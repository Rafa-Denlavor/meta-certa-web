import { X } from "lucide-react";
import {
  DialogClose,
  DialogContent,
  DialogTitle,
} from "./ui/dialog";
import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-BR'

dayjs.locale(ptBR);

export function DetailsGoal({goals, goalId} : any) {
  const currentGoal = goals.filter(({id} : { id: string }) => id === goalId);
  const { title, description, completedAt } = currentGoal[0];

  const completedAtFormated = dayjs(completedAt).format('DD[ de ]MMMM[ de ]YYYY[ as ]hh:mm');

  return (
    <DialogContent>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <DialogTitle>Meta</DialogTitle>

          <DialogClose>
            <X className="size-5 text-zinc-600" />
          </DialogClose>
        </div>
        <p>{title}</p>
        <h2 className="font-medium text-sm">Descrição</h2>
        <p>{description}</p>
        <h2 className="font-medium text-sm">Concluída em {completedAtFormated}</h2>
      </div>
    </DialogContent>
  )
}
