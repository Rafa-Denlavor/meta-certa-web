import { Avatar } from './Avatar';
import { DropdownMenu } from './dropdown-menu';
import { Logo } from './logo';

const userFallback = {
    id: "admin",
    email: null,
    name: "Rafaella Lopes",
    username: "rafaella.lopes",
    password: "testee",
    avatar: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    motivationalPhrase: 'Hey! Assim que você adicionar sua frase motivacional ela irá aparecer aqui',
    createdAt: "2024-09-26T17:37:17.302Z"
};

export function Header({ user } : any) {
  console.log(user);

  return (
    <header className="flex items-center justify-between m-auto px-[100px] py-7">
      <header className="flex gap-4 items-center">
        <Logo />
        <h1 className="font-bold text-2xl">Meta Certa</h1>
      </header>
      {/*<p className="italic">"{user.motivationalPhrase ?? userFallback.motivationalPhrase}</p>*/}
      <footer className="flex gap-4">
        <Avatar image={user.avatar ?? userFallback.avatar}/>
        <DropdownMenu user={user} />
      </footer>
    </header>
  )
}
