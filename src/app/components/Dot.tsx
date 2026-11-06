type Props = {
  char?: "." | "?" | "!";
  variant?: "text" | "circle";
  size?: "sm" | "md" | "lg";
};

const sizeStyles = {
  sm: "size-1.5",
  md: "size-2",
  lg: "size-3.5",
};

export default function Dot({
  char = ".",
  variant = "text",
  size = "md",
}: Props) {
  if (variant === "circle") {
    return <span className={`block rounded-full bg-orange-500 ${sizeStyles[size]}`} />;
  }

  return <span className="text-orange-500">{char}</span>;
}
