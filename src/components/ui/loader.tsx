import { forwardRef, type ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import * as RadixLoader from "@radix-ui/react-progress";

const loader = tv({
  base: "flex items-center justify-center rounded-full animate-spin w-fitcontent",
  variants: {
    variant: {
      primary: "text-violet-500",
      secondary: "text-zinc-900",
    },
    size: {
      default: "w-8 h-8 border-4 border-t-transparent",
      sm: "w-4 h-4 border-2 border-t-transparent",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

type LoaderProps = ComponentProps<"div"> & VariantProps<typeof loader>;

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <RadixLoader.Root
        {...props}
        ref={ref}
        className={loader({ variant, size, className })}
      />
    );
  }
);

Loader.displayName = "Loader";
