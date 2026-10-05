import Image from "next/image";

/**
 * A photo slot that is either a real image or a clearly-labelled placeholder.
 *
 * Photos for the drainage and rock-features pages had not been supplied when
 * these pages were built. Every slot below renders a visible "PHOTO NEEDED"
 * card describing exactly which shot belongs there, so nothing can ship
 * silently as a blank or a stock image (see Data Integrity Rules in CLAUDE.md).
 *
 * To fill a slot: drop the file into `public/images/...` and add its path as
 * `src` in the page's photo config. Nothing else needs to change.
 */

export type PhotoSlotProps = {
  /** Path under /public. When undefined, the labelled placeholder renders. */
  src?: string;
  /** Alt text for the real image. Also shown on the placeholder as the brief. */
  alt: string;
  /** Short tag, e.g. "Before" / "After" / "Process". */
  tag?: string;
  /** Extra direction for whoever is taking the photo. */
  note?: string;
  /** Tailwind aspect class. Defaults to 4/3. */
  aspect?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function PhotoSlot({
  src,
  alt,
  tag,
  note,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: PhotoSlotProps) {
  if (src) {
    return (
      <div className={`relative ${aspect} overflow-hidden rounded-2xl ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
        {tag ? (
          <span className="absolute left-3 top-3 rounded-full bg-brand-dark/75 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            {tag}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Placeholder — photo needed: ${alt}`}
      data-photo-needed="true"
      className={`relative ${aspect} overflow-hidden rounded-2xl border-2 border-dashed border-brand-green/35 bg-brand-cream ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-5 text-center">
        <svg
          className="h-7 w-7 text-brand-green/45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {tag ? (
          <span className="rounded-full bg-brand-green/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-green">
            {tag}
          </span>
        ) : null}
        <p className="font-accent text-[11px] font-bold uppercase tracking-[0.14em] text-brand-green/70">
          Photo needed
        </p>
        <p className="max-w-[26ch] text-sm font-medium leading-snug text-brand-charcoal/75">{alt}</p>
        {note ? (
          <p className="max-w-[30ch] text-xs leading-snug text-brand-charcoal/50">{note}</p>
        ) : null}
      </div>
    </div>
  );
}
