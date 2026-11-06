import Dot from "./Dot";
import type { Project } from "./ProjectRow";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function NextProject({ project }: Props) {
  return (
    <section className="border-t border-gray-100 py-10">
      <div className="mb-1.5 text-[13px] text-gray-500">Next project</div>
      <Link
        className="text-3xl font-semibold tracking-tight md:text-[44px]"
        href={`/projects/${project.slug}`}
      >
        {project.title}
        <Dot /> <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
