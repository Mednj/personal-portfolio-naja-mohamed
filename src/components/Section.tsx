import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-9 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric dark:text-mint">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{intro}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
