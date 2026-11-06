type Props = {
  items: { label: string; value: string }[];
};

export default function MetaBar({ items }: Props) {
  return (
    <div className="flex flex-wrap gap-x-14 gap-y-4 rounded-2xl bg-gray-50 px-8 py-7">
      {items.map((item, index) => (
        <div key={`${item.label}-${index}`}>
          <div className="mb-1 text-[13px] text-gray-500">{item.label}</div>
          <div className="text-base font-medium">{item.value}</div>
        </div>
      ))}
    </div>
  );
}
