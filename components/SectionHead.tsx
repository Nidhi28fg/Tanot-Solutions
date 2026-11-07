import Link from "next/link";
import styles from "./section-head.module.css";

type SectionHeadProps = {
  index?: string;
  kicker: string;
  title: string;
  titleId?: string;
  support: string;
  actionHref?: string;
  actionLabel?: string;
};

export default function SectionHead({
  index,
  kicker,
  title,
  titleId,
  support,
  actionHref,
  actionLabel,
}: SectionHeadProps) {
  return (
    <header className={`${styles.head} ${index ? styles.headWithIndex : ""}`}>
      {index ? (
        <span className={styles.index} aria-hidden="true">
          {index}
        </span>
      ) : null}
      <div className={styles.leadCol}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
      </div>
      <div className={styles.supportCol}>
        <p className={styles.support}>{support}</p>
        {actionHref && actionLabel ? (
          <p className={styles.meta}>
            <Link href={actionHref}>
              {actionLabel} <span aria-hidden="true">↗</span>
            </Link>
          </p>
        ) : null}
      </div>
    </header>
  );
}
