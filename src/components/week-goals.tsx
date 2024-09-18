import { CheckCircle2 } from "lucide-react";
import { DialogTrigger, Dialog } from "./ui/dialog";
import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-BR';
// import { DetailsGoal } from './details-goal'
import 'dayjs/locale/pt-BR';
import type { TGoal } from '../types/TGoal';

type TWeekGoals = {
  goalsPerDay: any;
}

dayjs.locale(ptBR);

export function WeekGoals({goalsPerDay}: TWeekGoals) {
  return (
    <Dialog>
      {Object.entries(goalsPerDay).map(([date, goals]: Array<any>) => {
        const weekDay = dayjs(date).format('dddd');
        const formattedDate = dayjs(date).format('D[ de ]MMMM');

        console.log([date, goals]);

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
                      <li className="flex items-center gap-2 cursor-pointer hover:border hover:border-1 hover:border-pink-400 p-2 hover:rounded-md">
                        <CheckCircle2 className="size-4 text-pink-500" />
                        <span className="text-sm text-zinc-400">
                          Você completou "
                          <span className="text-zinc-100">{title}</span>" ás{" "}
                          <span className="text-zinc-100">{time}</span>
                        </span>
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
