import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Logo } from '../components/ui/logo';
import { toast } from 'react-hot-toast';
import { useForm, Controller } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUser } from '../service/create-user';

const createUserSchema = z.object({
  email: z.string().email("Formato de email inválido"),
  username: z.string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long"),
  name: z.string()
    .min(1, "Nome é obrigatório"),
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be at most 100 characters long"),
});

type CreateUserForm = z.infer<typeof createUserSchema>;

async function handleCreateGoal(data: any) {
  console.log(data);

  // await createUser(data).then(() => {
  //   toast.success('Conta criada com sucesso!');
  // }).catch(() => {
  //   toast.error('Não foi possível criar sua conta. Tente mais tarde!');
  // });
  //
  // reset();
}

export function NewAccountPage() {
  const { register, control, handleSubmit, formState, reset } = useForm<CreateUserForm>({
    resolver: zodResolver(createUserSchema)
  });

  return (
  <section className="flex align-center h-screen">
    <form action="" onSubmit={() => {}} className="flex flex-col align-center w-[480px] m-auto rounded-md border-2 border-gray-700 p-6">
      <div className="flex justify-center gap-3 mb-8">
        <Logo />
        <h1 className="text-4xl text-center">Criar conta</h1>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Como gostaria de ser chamado?</Label>
          <Input
            id="name"
            autoFocus
            placeholder="Maria Helena"
            {...register('name')}
          />
          {formState.errors.name && (
            <p className="text-red-400 text-s">{formState.errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Insira um nome de usuário</Label>
          <Input
            id="username"
            autoFocus
            placeholder="maria_helena"
            {...register('username')}
          />
          {formState.errors.username && (
            <p className="text-red-400 text-s">{formState.errors.username.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Qual o seu melhor email?</Label>
          <Input
            id="email"
            autoFocus
            placeholder="mariahelena@gmail.com"
            {...register('email')}
          />
          {formState.errors.email && (
            <p className="text-red-400 text-s">{formState.errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Insira uma senha forte</Label>
          <Input
            id="password"
            type="password"
            autoFocus
            placeholder="Deve conter número, letras e caracteres especiais"
            {...register('password')}
          />
          {formState.errors.password && (
            <p className="text-red-400 text-s">{formState.errors.password.message}</p>
          )}
        </div>
      </div>
      <footer className="flex items-center gap-3 mt-8">
        <Button type="submit" className="flex-1">
          Criar conta no Goals
        </Button>
      </footer>
    </form>
  </section>
  )
};
