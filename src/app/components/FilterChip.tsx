"use client";

type Props = {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export default function FilterChip({
  active = false,
  onClick,
  children,
}: Props) {
  const stateStyles = active
    ? "bg-gray-900 text-white"
    : "bg-gray-50 text-gray-600 hover:bg-orange-50 hover:text-gray-900";

  return (
    <button
      aria-pressed={active}
      className={`flex items-center gap-1.5 rounded-full px-3.5 py-[7px] text-sm ${stateStyles}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
