import { forwardRef, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TextareaProps = ComponentProps<"textarea">;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return (
    <textarea
      {...props}
      ref={ref}
      className={twMerge(
        "p-4 h-24 bg-black border border-zinc-900 rounded-lg placeholder-zinc-400 outline-none text-sm hover:border-zinc-800 focus-visible:border-pink-500 focus-visible:ring-4 ring-pink-500/10",
        props.className
      )}
    />
  );
});

Textarea.displayName = "Textarea";
