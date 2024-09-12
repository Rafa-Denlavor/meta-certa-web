import { CheckCircle2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";
import type { TSummary } from "../types/TSummary";
import { Loader } from "./ui/loader";
import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-BR'
import { PendingGoals } from './pending-goals';
import { CreateGoal } from './create-goal'

type TSummaryProps = {
  summaryData: TSummary;
  isLoading?: boolean;
  hasError?: boolean;
};

dayjs.locale(ptBR);

export function Summary({ summaryData, isLoading, hasError }: TSummaryProps) {
  const completedPorcentage =
    (summaryData?.completed / summaryData?.total) * 100;

  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM');
  const firstMonth = dayjs().startOf('week').format('MMMM');
  const lastMonth = dayjs().endOf('week').format('MMMM');

  return (
    <section className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Logo Goals" />
          <span className="text-lg font-semibold">
            <span title={firstMonth} className="capitalize">{firstDayOfWeek}</span>
            {' a '}
            <span title={lastMonth} className="capitalize">{lastDayOfWeek}</span>
          </span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
        <CreateGoal />
      </header>

      <div className="flex flex-col gap-3">
        <Progress value={summaryData?.completed} max={summaryData?.total}>
          <ProgressIndicator style={{ width: `${completedPorcentage}` }} />
        </Progress>
        <div className="flex items-center justify-between text-zinc-400">
          <span>
            Você completou{" "}
            <span className="text-zinc-100">
              {summaryData?.completed ?? 0}
            </span>{" "}
            de{" "}
            <span className="text-zinc-100">{summaryData?.total ?? 0}</span>{" "}
            metas nessa semana.
          </span>
          <span>{completedPorcentage.toFixed(1)}%</span>
        </div>
      </div>
      <Separator />
      <PendingGoals />
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>
        {isLoading && <Loader />}
        {hasError && <span>Poxa, um erro ocorreu...</span>}
        {(!hasError && !isLoading && summaryData) &&
          Object.entries(summaryData?.goalsPerDay).map(([date, goals]) => {
            const weekDay = dayjs(date).format('dddd');
            const formattedDate =  dayjs(date).format('D[ de ]MMMM');

            return (
              <div key={date} className="flex flex-col gap-4">
                <h3 className="font-medium capitalize">
                  {weekDay}{' '}<span className="text-zinc-400 tex-xs lowercase">({formattedDate})</span>
                </h3>
                <ul className="flex flex-col gap-3">
                  {goals.map(({ id, title, completedAt }) => {
                    const time = dayjs(completedAt).format('HH:mm');

                    return (
                      <li key={id} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-pink-500" />
                        <span className="text-sm text-zinc-400">
                          Você completou "
                          <span className="text-zinc-100">{title}</span>" ás{" "}
                          <span className="text-zinc-100">{time}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </section>
  );
}