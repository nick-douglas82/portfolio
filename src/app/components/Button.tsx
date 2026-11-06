import Link from "next/link";

type Props = {
  variant?: "primary" | "secondary" | "dark";
  size?: "md" | "sm";
  href?: string;
  type?: "button" | "submit";
  children: React.ReactNode;
};

const sizeStyles = {
  md: "px-6 py-3.5 text-base",
  sm: "px-[18px] py-2.5 text-sm",
};

const variantStyles = {
  primary: "bg-orange-500 text-white hover:bg-orange-600",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  dark: "bg-gray-900 text-white hover:bg-orange-500",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  type = "button",
  children,
}: Props) {
  const className = `inline-flex items-center rounded-full font-medium transition-colors ${sizeStyles[size]} ${variantStyles[variant]}`;

  if (href !== undefined && (href.startsWith("/") || href.startsWith("#"))) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  if (href !== undefined) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}
