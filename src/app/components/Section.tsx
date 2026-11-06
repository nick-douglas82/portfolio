type Props = {
  id?: string;
  spacing?: "hero" | "default" | "tight";
  children: React.ReactNode;
};

const spacingStyles = {
  default: "py-12 md:pb-24",
  hero: "pt-20 pb-20 md:pt-44 md:pb-36",
  tight: "py-8",
};

export default function Section({ id, spacing = "default", children }: Props) {
  return (
    <section className={spacingStyles[spacing]} id={id}>
      {children}
    </section>
  );
}
