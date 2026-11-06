type Props = {
  label: string;
  name: string;
  as?: "input" | "textarea";
  type?: string;
  required?: boolean;
  full?: boolean;
};

const inputClassName =
  "rounded-[10px] border border-gray-200 bg-gray-50 px-3.5 py-3 text-[15px] focus:border-orange-500 focus:ring-[3px] focus:ring-orange-100 focus:outline-none";

export default function Field({
  label,
  name,
  as = "input",
  type = "text",
  required = false,
  full = false,
}: Props) {
  return (
    <label
      className={`flex flex-col gap-1.5 text-[13px] font-medium ${full ? "col-span-full" : ""}`}
      htmlFor={name}
    >
      {label}
      {as === "textarea" ? (
        <textarea className={inputClassName} id={name} name={name} required={required} />
      ) : (
        <input
          className={inputClassName}
          id={name}
          name={name}
          required={required}
          type={type}
        />
      )}
    </label>
  );
}
