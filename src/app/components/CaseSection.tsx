import Heading from "./Heading";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function CaseSection({ title, children }: Props) {
  return (
    <section className="grid gap-x-16 gap-y-6 pt-16 md:grid-cols-3">
      <Heading as="h3" className="col-span-1">
        {title}
      </Heading>
      <div className="md:col-span-2">{children}</div>
    </section>
  );
}
