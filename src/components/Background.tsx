export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-ink">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:54px_54px] opacity-35 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]" />
      <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-electric/15 blur-3xl dark:bg-electric/10" />
      <svg
        aria-hidden="true"
        className="absolute right-0 top-28 h-[34rem] w-[34rem] animate-slow-pulse text-electric/25 dark:text-mint/20"
        viewBox="0 0 600 600"
        fill="none"
      >
        <path d="M80 410L190 260L315 335L430 145L540 230" stroke="currentColor" strokeWidth="2" />
        <path d="M125 160L250 210L335 105L475 355" stroke="currentColor" strokeWidth="1.4" />
        {[80, 190, 315, 430, 540, 125, 250, 335, 475].map((cx, index) => (
          <circle key={index} cx={cx} cy={[410, 260, 335, 145, 230, 160, 210, 105, 355][index]} r="5" fill="currentColor" />
        ))}
      </svg>
    </div>
  );
}
