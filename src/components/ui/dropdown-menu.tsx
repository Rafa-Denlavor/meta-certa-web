import React from 'react';
import * as DropdownMenuComponent from '@radix-ui/react-dropdown-menu';
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';

export function DropdownMenu({user}) {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState('pedro');

  return (
    <DropdownMenuComponent.Root>
      <DropdownMenuComponent.Trigger asChild>
        <button
          className="rounded-full w-[45px] h-[45px] inline-flex items-center justify-center text-violet11 bg-black shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Customise options"
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenuComponent.Trigger>

      <DropdownMenuComponent.Portal>
        <DropdownMenuComponent.Content
          className="min-w-[220px] bg-black rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenuComponent.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
          {user.name ?? 'Usuário anônimo'}
          </DropdownMenuComponent.Item>

          <DropdownMenuComponent.Separator className="h-[1px] bg-violet6 m-[5px]" />


        </DropdownMenuComponent.Content>
      </DropdownMenuComponent.Portal>
    </DropdownMenuComponent.Root>
  );
};
