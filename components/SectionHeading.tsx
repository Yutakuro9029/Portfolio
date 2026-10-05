export default function SectionHeading({
  title,
  blurb,
}: {
  title: string;
  blurb?: string;
}) {
  return (
    <div className="mb-12 border-t border-zinc-200/80 pt-8">
      <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
        {title}
      </h2>
      {blurb && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">
          {blurb}
        </p>
      )}
    </div>
  );
}
