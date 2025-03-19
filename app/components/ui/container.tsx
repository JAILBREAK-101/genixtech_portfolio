import { cx } from "app/layout";
import { JSX } from "react/jsx-runtime";

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
      className={cx(
        "container mx-auto px-4 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}