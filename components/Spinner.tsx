import { Loader } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const SpinnerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "w-2 h-2",
      lg: "w-6 h-6",
      icon: "w-10 h-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SpinnerProps extends VariantProps<typeof SpinnerVariants> {}

const Spinner = ({ size }: SpinnerProps) => {
  return <Loader className={cn(SpinnerVariants({ size }))} />;
};

export default Spinner;
