export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-gradient-hero text-primary-foreground py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-sm">{title}</h1>
        {subtitle && <p className="mt-3 text-lg text-primary-foreground/90 max-w-3xl">{subtitle}</p>}
      </div>
    </section>
  );
}