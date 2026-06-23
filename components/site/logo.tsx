type LogoProps = {
  className?: string
  subtitle?: boolean
}

export function Logo({ className, subtitle = true }: LogoProps) {
  return (
    <div className={className}>
      <div className="flex items-baseline gap-2 leading-none">
        <span className="bg-gradient-to-r from-brand via-[oklch(0.6_0.2_300)] to-accent2 bg-clip-text font-heading text-2xl font-extrabold tracking-[0.18em] text-transparent">
          RUTHA
        </span>
      </div>
      {subtitle && (
        <span className="mt-0.5 block text-[0.6rem] font-semibold uppercase tracking-[0.42em] text-muted-foreground">
          Credit Solutions
        </span>
      )}
    </div>
  )
}
