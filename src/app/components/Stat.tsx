import Dot from "./Dot";

type Props = {
  value: string | number;
  label: string;
};

export default function Stat({ value, label }: Props) {
  return (
    <div>
      <div className="text-4xl font-semibold tracking-tight leading-none md:text-5xl">
        {value}
        <Dot />
      </div>
      <div className="mt-2 text-[15px] text-gray-500">{label}</div>
    </div>
  );
}
