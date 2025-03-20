import { cn } from "app/utils";

interface ContainerProps extends Omit<React.HTMLProps<HTMLDivElement>, 'as'> {
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer' | 'aside' | 'nav';
  className?: string;
  children: React.ReactNode;
}

export function Container({
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "container mx-auto px-4 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}