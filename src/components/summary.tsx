import { CheckCircle2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";
import { OutlineButton } from "./ui/outline-button";
import type { TSummary } from "../types/TSummary";
import { Loader } from "./ui/loader";

type TSummaryProps = {
  summaryData: TSummary;
  isLoading?: boolean;
  hasError?: boolean;
};

export function Summary({ summaryData, isLoading, hasError }: TSummaryProps) {
  const currentPorcentage =
    (summaryData[0]?.completed / summaryData[0]?.total) * 100;

  return (
    <section className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Logo Goals" />
          <span className="text-lg font-semibold">5 a 10 de agosto</span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </header>

      <div className="flex flex-col gap-3">
        <Progress value={summaryData[0]?.completed} max={summaryData[0]?.total}>
          <ProgressIndicator style={{ width: 200 }} />
        </Progress>
        <div className="flex items-center justify-between text-zinc-400">
          <span>
            Você completou{" "}
            <span className="text-zinc-100">
              {summaryData[0]?.completed ?? 0}
            </span>{" "}
            de{" "}
            <span className="text-zinc-100">{summaryData[0]?.total ?? 0}</span>{" "}
            metas nessa semana.
          </span>
          <span>{currentPorcentage.toFixed(1)}%</span>
        </div>
      </div>

      <Separator />
      <div className="flex gap-3 flex-wrap">
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Meditar
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Correr 2km
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Aprender novas receitas
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>
        {isLoading && <Loader />}
        {hasError && <span>Poxa, um erro ocorreu...</span>}
        {(!hasError && summaryData) &&
          Object.entries(summaryData[0]?.goalsPerDay).map(([date, goals]) => {
            return (
              <div key={date} className="flex flex-col gap-4">
                <h3 className="font-medium">
                  Dia <span className="text-zinc-400 tex-xs">({date})</span>
                </h3>
                <ul className="flex flex-col gap-3">
                  {goals.map(({ id, title, completedAt }) => {
                    return (
                      <li key={id} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-pink-500" />
                        <span className="text-sm text-zinc-400">
                          Você completou "
                          <span className="text-zinc-100">{title}</span>" ás{" "}
                          <span className="text-zinc-100">{completedAt}</span>
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
