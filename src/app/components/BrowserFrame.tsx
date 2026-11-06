type Props = {
  children: React.ReactNode;
};

export default function BrowserFrame({ children }: Props) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-neutral-50 px-3 py-2.5">
        <span className="size-2 rounded-full bg-gray-300" />
        <span className="size-2 rounded-full bg-gray-300" />
        <span className="size-2 rounded-full bg-gray-300" />
      </div>
      {children}
    </div>
  );
}
