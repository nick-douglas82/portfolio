"use client";

import Dot from "./Dot";
import Tag from "./Tag";
import Button from "./Button";
import BrowserFrame from "./BrowserFrame";
import Wireframe from "./Wireframe";

export type Project = {
  slug: string;
  title: string;
  sector: string;
  type: string;
  sketch: string;
};

type Props = {
  project: Project;
  open?: boolean;
  onToggle: () => void;
  showCaseFields?: boolean;
};

export default function ProjectRow({
  project,
  open = false,
  onToggle,
  showCaseFields = true,
}: Props) {
  const isExpanded = open && showCaseFields;
  const panelId = `project-panel-${project.slug}`;

  return (
    <div className="border-b border-gray-100">
      <button
        aria-controls={showCaseFields ? panelId : undefined}
        aria-expanded={isExpanded}
        className="flex w-full flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-[22px] hover:text-orange-500"
        onClick={onToggle}
        type="button"
      >
        <span className="text-xl font-medium tracking-tight md:text-2xl">
          {project.title}
          <Dot variant="circle" size={isExpanded ? "md" : "sm"} />
        </span>
        <span className="text-sm text-gray-400">
          {project.sector} · {project.type}
        </span>
      </button>
      {isExpanded && (
        <div className="grid gap-x-12 gap-y-8 pb-9 md:grid-cols-2" id={panelId}>
          <BrowserFrame>
            <Wireframe sketch={project.sketch} />
          </BrowserFrame>
          <div className="flex flex-wrap items-start gap-2">
            <Tag>{project.sector}</Tag>
            <Tag>{project.type}</Tag>
            <Button href={`/projects/${project.slug}`} size="sm">
              View case study
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
