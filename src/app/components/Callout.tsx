import Text from "./Text";

type Props = {
  title: React.ReactNode;
  text: string;
  action: React.ReactNode;
};

export default function Callout({ title, text, action }: Props) {
  return (
    <section className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-orange-50 px-6 py-10 md:px-12">
      <div>
        <Text variant="lead">{title}</Text>
        <Text>{text}</Text>
      </div>
      {action}
    </section>
  );
}
