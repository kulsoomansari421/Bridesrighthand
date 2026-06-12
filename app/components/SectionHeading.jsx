export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.32em] text-[#8d7288]">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-charcoal sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-charcoal/80 sm:text-base sm:leading-8">{description}</p>
    </div>
  );
}
