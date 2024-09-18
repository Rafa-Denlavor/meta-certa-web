import { EmptyGoals } from "./components/empty-goals";
import useSWR from "swr";
import { Summary } from "./components/summary";
import { Dialog } from "./components/ui/dialog";
import { getSummary } from "./service/get-summary";
import { Logo } from "./components/ui/logo";
import { Toaster } from 'react-hot-toast';

export function App() {
  const { data, isLoading, error } = useSWR("/summary", async (url) => {
    const result = await getSummary(url);

    return result;
  }, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });
  const summary = data ? data : { total: 0, goalsPerDay: null, completed: 0};

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <Logo />
      </div>
    );
  }

  console.log({data, isLoading, error});

  return (
    <div>
      <h1>Será que vai funcionar?</h1>
      <Dialog>
       <h1>Será que vai funcionar? - 2</h1>
       {(error || !summary.total) && <EmptyGoals />}
       {(!error && summary.total > 0) && <Summary summaryData={summary} isLoading={isLoading} hasError={error} />}
      </Dialog>
    </div>
  );
}
