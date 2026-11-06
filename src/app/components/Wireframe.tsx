type Props = {
  sketch: string;
  ratio?: string;
};

const kindStyles = {
  b: "rounded bg-white border border-gray-200",
  g: "rounded bg-gray-100",
  l: "h-1 self-center mx-1 rounded bg-gray-200",
  t: "h-[7px] self-center mx-1 rounded bg-gray-400",
  o: "h-[70%] self-center rounded bg-orange-500",
  d: "size-2 place-self-center rounded-full",
  q: "size-2 place-self-center rounded-full",
};

type WireframeKind = keyof typeof kindStyles;

function isWireframeKind(kind: string): kind is WireframeKind {
  return Object.prototype.hasOwnProperty.call(kindStyles, kind);
}

function gridPosition(position: string) {
  const [start, end] = position.split("/");

  return end ? `${start} / ${end}` : start;
}

export default function Wireframe({ sketch, ratio = "16/9" }: Props) {
  return (
    <div
      className="grid aspect-video grid-cols-12 grid-rows-10 gap-1.5 p-3"
      style={{ aspectRatio: ratio }}
    >
      {sketch.split(/\s+/).map((token, index) => {
        const [column, row, kind] = token.split(",");

        if (!column || !row || !kind || !isWireframeKind(kind)) {
          return null;
        }

        return (
          <span
            className={kindStyles[kind]}
            key={`${token}-${index}`}
            style={{
              gridColumn: gridPosition(column),
              gridRow: gridPosition(row),
            }}
          />
        );
      })}
    </div>
  );
}
