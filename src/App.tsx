import { EmptyGoals } from "./components/empty-goals";
import useSWR from "swr";
import { Summary } from "./components/summary";
import { Dialog } from "./components/ui/dialog";
import { getSummary } from "./service/get-summary";
import { Logo } from "./components/ui/logo";
import { Toaster } from 'react-hot-toast';
import { useCookies } from 'react-cookie'
import { LoginPage } from './pages/login';
import { getGl } from './utils/getGl';
import { useEffect } from 'react';

export function App() : any {
  const [cookies, setCookie] = useCookies(['gltoken']);

  if(!cookies.gltoken) {
    return window.location.replace('/login');
  }

  const { data, isLoading, error } = useSWR("/summary", async (url) => {
    const result = await getSummary(url);

    return result;
  }, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <Logo />
      </div>
    );
  }

  const summary = data ? data : { total: 0, goalsPerDay: null, completed: 0};

  return (
    <Dialog>
     <Toaster position="bottom-left" />
     {(error || !summary.total) && <EmptyGoals />}
     {(!error && summary.total > 0) && <Summary summaryData={summary} isLoading={isLoading} hasError={error} />}
    </Dialog>
  );
}
