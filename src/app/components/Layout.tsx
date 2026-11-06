type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <div className="mx-auto max-w-6xl px-5 md:px-10">{children}</div>;
}
