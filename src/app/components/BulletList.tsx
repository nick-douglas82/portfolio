type Props = {
  items: string[];
};

export default function BulletList({ items }: Props) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item, index) => (
        <li className="flex items-baseline gap-3.5" key={`${item}-${index}`}>
          <span
            aria-hidden="true"
            className="size-1.75 shrink-0 -translate-y-0.5 rounded-full bg-orange-500"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
