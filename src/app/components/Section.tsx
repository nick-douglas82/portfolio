type Props = {
  id?: string;
  spacing?: "hero" | "default" | "tight";
  className?: string;
  children: React.ReactNode;
};

const spacingStyles = {
  default: "py-12 md:pb-24",
  hero: "pt-20 pb-20 md:pt-44 md:pb-36",
  tight: "py-8",
};

export default function Section({
  id,
  spacing = "default",
  className,
  children,
}: Props) {
  return (
    <section className={`${spacingStyles[spacing]} ${className ?? ""}`} id={id}>
      {children}
    </section>
  );
}
