import Dot from "./Dot";
import Link from "next/link";

type Props = {
  links: { label: string; href: string }[];
};

export default function SiteHeader({ links }: Props) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 py-7">
      <Link
        className="text-[28px] font-bold tracking-tighter leading-none"
        href="/"
      >
        nd
        <Dot />
      </Link>
      <nav className="flex flex-wrap items-center gap-6 text-sm">
        {links.map((link, index) => (
          <Link href={link.href} key={`${link.href}-${index}`}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
