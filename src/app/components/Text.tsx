type Props = {
  variant?: "lead" | "body" | "muted" | "caption";
  as?: "p" | "span" | "div";
  children: React.ReactNode;
};

const textStyles = {
  lead: "text-2xl md:text-3xl font-medium tracking-tight leading-snug",
  body: "text-[17px] leading-relaxed text-gray-700 text-pretty",
  muted: "text-[15px] leading-relaxed text-gray-500",
  caption: "text-xs text-gray-400",
};

export default function Text({
  variant = "body",
  as = "p",
  children,
}: Props) {
  const Component = as;

  return <Component className={textStyles[variant]}>{children}</Component>;
}
