// Rapid Mastery React components. Thin wrappers over components.css class names.
// Load once in your app: '@rapidmastery/brand-kit/css', '@rapidmastery/brand-kit/css/components', '@rapidmastery/brand-kit/fonts.css'.

const cx = (...c) => c.filter(Boolean).join(' ');

export function Eyebrow({ children, className }) {
  return <span className={cx('rm-eyebrow', className)}>{children}</span>;
}

/** The blue band. One per screen. `emphasis` is the one word shown in peach. */
export function Band({ eyebrow, title, emphasis, lead, children }) {
  return (
    <header className="rm-band">
      <div className="rm-band__inner">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="rm-band__title">{title}{emphasis && <> <em>{emphasis}</em></>}</h1>
        {lead && <p className="rm-band__lead">{lead}</p>}
        {children}
      </div>
    </header>
  );
}

/** variant: 'primary' | 'secondary' | 'highlight'. Pass href to render a link. */
export function Button({ variant = 'primary', href, className, ...props }) {
  const cls = cx('rm-btn', `rm-btn--${variant}`, className);
  return href ? <a className={cls} href={href} {...props} /> : <button className={cls} type="button" {...props} />;
}

export function TextLink({ className, ...props }) {
  return <a className={cx('rm-link', className)} {...props} />;
}

export function Input({ className, ...props }) {
  return <input className={cx('rm-input', className)} {...props} />;
}

/** pillar: 'learning' | 'systems' | 'execution' */
export function PillarCard({ pillar, eyebrow, title, children }) {
  return (
    <article className={cx('rm-pillar', `rm-pillar--${pillar}`)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h3>{title}</h3>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </article>
  );
}

export function Module({ children, className }) {
  return <div className={cx('rm-module', className)}>{children}</div>;
}

/** A list row: optional tile, meta line above the title, optional detail. */
export function ListRow({ tile, pillar, meta, title, detail }) {
  return (
    <li className="rm-row">
      {tile && <span className={cx('rm-tile', pillar && `rm-tile--${pillar}`)} aria-hidden="true">{tile}</span>}
      <div className="rm-row__text">
        {meta && <span className="rm-row__meta">{meta}</span>}
        <span className="rm-row__title">{title}</span>
        {detail && <span className="rm-row__detail">{detail}</span>}
      </div>
    </li>
  );
}

export function List({ children }) {
  return <ul className="rm-list">{children}</ul>;
}

/** states: array of 'done' | 'partial' | 'todo' */
export function StatusDots({ states, label }) {
  return (
    <span className="rm-dots" aria-label={label}>
      {states.map((s, i) => <i key={i} className={cx('rm-dot', s !== 'todo' && `rm-dot--${s}`)} />)}
    </span>
  );
}

export function SegmentedProgress({ value, total }) {
  return (
    <div className="rm-progress">
      <div className="rm-progress__bar">
        {Array.from({ length: total }, (_, i) => <i key={i} className={cx('rm-progress__seg', i < value && 'rm-progress__seg--on')} />)}
      </div>
      <span className="rm-progress__label">{value}/{total} complete</span>
    </div>
  );
}

/** kind: 'science' | 'mistakes' | 'do' */
const CALLOUT_TITLES = { science: 'The Science', mistakes: 'Common Mistakes', do: 'Do This' };
export function Callout({ kind, title, children }) {
  return (
    <div className={cx('rm-callout', `rm-callout--${kind}`)}>
      <strong>{title ?? CALLOUT_TITLES[kind]}</strong>
      <span>{children}</span>
    </div>
  );
}

export function Chip({ children }) {
  return <span className="rm-chip">{children}</span>;
}

/** Navy panel. Final CTA, study mode, downloads. At most one per page. */
export function DarkPanel({ eyebrow, title, children }) {
  return (
    <section className="rm-panel">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {children}
    </section>
  );
}
