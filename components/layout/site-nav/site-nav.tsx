import type { Dictionary } from "@/data/dictionary";

type SiteNavProps = {
  dict: Dictionary["nav"];
};

export const SiteNav = ({ dict }: SiteNavProps): React.ReactNode => {
  return (
    <nav id="nav">
      <a href="#hero" className="logo" aria-label={dict.logoAria}>
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect
            x=".5"
            y=".5"
            width="47"
            height="47"
            stroke="#C8CCD0"
            opacity=".7"
          />
          <path
            d="M14 36V12h13a7 7 0 010 14H14m11 0l9 10"
            stroke="#F5F6F7"
            strokeWidth="3"
          />
          <rect x="36" y="9" width="4" height="4" fill="#19BFEF" />
        </svg>
        <span>
          <b>{dict.brandLine}</b>
          <small>{dict.brandSub}</small>
        </span>
      </a>
      <div className="nl l">
        <span className="loc">
          <i aria-hidden="true" />
          {dict.location}
        </span>
        <a className="k" href="#svc">
          {dict.services}
        </a>
        <a className="k" href="#show">
          {dict.work}
        </a>
        <a className="k" href="#abt">
          {dict.studio}
        </a>
        <a className="k" href="#ct">
          {dict.contact}
        </a>
        <a className="bk" href="#book">
          {dict.book}
        </a>
      </div>
      <a
        className="mb l"
        href="#book"
        style={{ borderBottom: "1px solid var(--cy)", paddingBottom: "4px" }}
      >
        {dict.bookMobile}
      </a>
    </nav>
  );
};
