import { CheckCircle2 } from "lucide-react";
import { DialogTrigger, Dialog } from "./ui/dialog";
import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-BR';
// import { DetailsGoal } from './details-goal'
import 'dayjs/locale/pt-BR';
import type { TGoal } from '../types/TGoal';
import { deleteGoalCompletion } from '../service/delete-goal-completion';
import { toast } from 'react-hot-toast';
import { mutate } from 'swr';

type TWeekGoals = {
  goalsPerDay: any;
}

dayjs.locale(ptBR);

async function handleGoalCompletionRemove(completionId : string) {
   await deleteGoalCompletion(completionId).then(() => {
     toast.success('Meta completada deletada com sucesso.');
     mutate('/summary');
     mutate('/pending-goals');
   }).catch(() => {
     toast.error('Não foi possível deletar meta completada.');
   });;
}

export function WeekGoals({goalsPerDay}: TWeekGoals) {
  return (
    <Dialog>
      {Object.entries(goalsPerDay).map(([date, goals]: Array<any>) => {
        const weekDay = dayjs(date).format('dddd');
        const formattedDate = dayjs(date).format('D[ de ]MMMM');

        return (
          <div key={date} className="flex flex-col gap-4">
            <h3 className="font-medium capitalize">
              {weekDay}{' '}<span className="text-zinc-400 text-xs lowercase">({formattedDate})</span>
            </h3>
            <ul className="flex flex-col gap-3">
              {goals.length > 0 && goals.map(({ id, title, completedAt } : TGoal) => {
                const time = dayjs(completedAt).format('HH:mm');

                return (
                  <div key={id}>
                    {/*<DetailsGoal goals={goals} goalId={id} /> */}
                    <DialogTrigger>
                      <li className="flex items-center gap-2 over:border over:border-1 over:border-pink-400 p-2 over:rounded-md">
                        <CheckCircle2 className="size-4 text-pink-500" />
                        <span className="text-sm text-zinc-400">
                          Você completou "
                          <span className="text-zinc-100">{title}</span>" ás{" "}
                          <span className="text-zinc-100">{time}</span>
                        </span>
                        <img className="w-5 cursor-pointer" src="/trash.svg" alt="Remover meta completa" onClick={() => handleGoalCompletionRemove(id)} />
                      </li>
                    </DialogTrigger>
                  </div>
                );
              })}
            </ul>
          </div>
        );
      })}
    </Dialog>
  )
};
