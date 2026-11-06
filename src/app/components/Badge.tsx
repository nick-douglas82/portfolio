type Props = {
  children: React.ReactNode;
};

export default function Badge({ children }: Props) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full bg-orange-50 py-2 pl-3 pr-3.5 text-sm text-gray-600">
      {children}
    </span>
  );
}
