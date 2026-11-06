import Dot from "./Dot";

type Props = {
  as: "h1" | "h2" | "h3" | "h4";
  dot?: boolean;
  className?: string;
  children: React.ReactNode;
};

const headerStyles = {
  h1: "text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none",
  h2: "text-4xl md:text-5xl font-bold tracking-tight leading-none",
  h3: "text-3xl font-semibold tracking-tight",
  h4: "text-lg font-semibold",
};

export default function Heading({
  as,
  dot = true,
  className,
  children,
}: Props) {
  const Component = as;

  return (
    <header>
      <Component className={`${headerStyles[as]} ${className ?? ""}`}>
        {children}
        {dot && <Dot />}
      </Component>
    </header>
  );
}
