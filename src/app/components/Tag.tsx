type Props = {
  children: string;
};

export default function Tag({ children }: Props) {
  return (
    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[13px] text-gray-700">
      {children}
    </span>
  );
}
