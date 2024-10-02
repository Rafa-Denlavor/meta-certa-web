import * as AvatarComponent from '@radix-ui/react-avatar';

export function Avatar({ image }: { image: string }) {
  return (
    <AvatarComponent.Root className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <AvatarComponent.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={image}
        alt="Colm Tuite"
      />
      <AvatarComponent.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        CT
      </AvatarComponent.Fallback>
    </AvatarComponent.Root>
  )
}
