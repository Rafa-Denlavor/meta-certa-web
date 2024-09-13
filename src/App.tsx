import { EmptyGoals } from "./components/empty-goals";
import useSWR from "swr";
import { Summary } from "./components/summary";
import { Dialog } from "./components/ui/dialog";
import { getSummary } from "./service/get-summary";
import { Logo } from "./components/ui/logo";

export function App() {
  const { data, isLoading, error } = useSWR("/summary", {
    revalidateOnFocus: false,
    shouldRetryOnError : false,
  }, (url) => {
    return getSummary(url);
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <Logo />
      </div>
    );
  }

  return (
    <Dialog>
     {error || !data && <EmptyGoals />}
     {(!error && data) && <Summary summaryData={data} isLoading={isLoading} hasError={error} />}
    </Dialog>
  );
}
