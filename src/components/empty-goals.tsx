import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { CreateGoal } from "./create-goal";
import { DialogTrigger } from "./ui/dialog";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src="/logo-goals.svg" alt="Logo Goals" />
      <img src="/lets-start-illustration.svg" alt="Ilustração Goals" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que cadastrar uma agora mesmo?
      </p>
      <q className="italic">
        Se você quer algo que nunca teve, você precisa fazer algo que nunca fez
      </q>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus />
          Cadastrar meta
        </Button>
      </DialogTrigger>
      <CreateGoal />
    </div>
  );
}
