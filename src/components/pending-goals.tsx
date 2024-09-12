import { OutlineButton } from "./ui/outline-button";
import { Loader } from './ui/loader';
import { Plus } from "lucide-react";
import { getPendingGoals } from '../service/get-pending-goals';
import useSWR, { mutate as mutateGlobal } from 'swr';
import { createGolCompletion } from '../service/create-goal-completion.ts';

async function handleCompleteGoal(goalId: string) {
  await createGolCompletion(goalId);

  mutateGlobal('/pending-goals');
  mutateGlobal('/summary');
}

export function PendingGoals() {
  const { data, isLoading } = useSWR("/pending-goals", (url) => {
    return getPendingGoals(url);
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex gap-3 flex-wrap">
    {data.map(({ id, title, desiredWeeklyFrequency, completionCount }) => {
      return (
        <OutlineButton key={id} disabled={completionCount >= desiredWeeklyFrequency} onClick={() => handleCompleteGoal(id)}>
         <Plus className="size-4 text-zinc-600" />
         {title}
        </OutlineButton>
      )
    })}
    </div>
  )
}
