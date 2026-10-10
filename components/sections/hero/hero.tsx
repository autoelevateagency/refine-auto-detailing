import type { Dictionary } from "@/data/dictionary";

type HeroProps = {
  dict: Dictionary["hero"];
};

export const Hero = ({ dict }: HeroProps): React.ReactNode => {
  return (
    <section id="hero" className="grain">
      <span className="tag l">{dict.tag}</span>
      <span className="scr l">
        <i aria-hidden="true" />
        {dict.scroll}
      </span>
      <div className="car" id="car">
        <svg viewBox="0 0 1000 320" aria-hidden="true">
          <defs>
            <linearGradient id="bd" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2d343a" />
              <stop offset=".45" stopColor="#0d1012" />
              <stop offset="1" stopColor="#050607" />
            </linearGradient>
            <linearGradient id="rf" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#C8CCD0" stopOpacity="0" />
              <stop offset=".5" stopColor="#F5F6F7" stopOpacity=".9" />
              <stop offset="1" stopColor="#19BFEF" stopOpacity=".8" />
            </linearGradient>
            <linearGradient id="gl" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#1c2a32" />
              <stop offset="1" stopColor="#05080a" />
            </linearGradient>
            <linearGradient id="rfl" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2d343a" stopOpacity=".35" />
              <stop offset="1" stopColor="#000" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M30 238C26 214 52 200 120 192L255 124C300 98 385 82 478 82C568 82 648 98 706 134L796 166C884 174 956 192 966 224L968 244L30 244Z"
            fill="url(#bd)"
          />
          <path
            d="M270 128C312 104 392 90 478 90C560 90 636 104 690 136L520 136L300 138Z"
            fill="url(#gl)"
          />
          <path
            d="M120 192L255 124C300 98 385 82 478 82C568 82 648 98 706 134"
            stroke="url(#rf)"
            strokeWidth="2.4"
            fill="none"
          />
          <path
            d="M60 205C260 186 560 180 940 206"
            stroke="#C8CCD0"
            strokeOpacity=".35"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M60 222C300 212 640 212 950 224"
            stroke="#19BFEF"
            strokeOpacity=".35"
            strokeWidth=".8"
            fill="none"
          />
          <g>
            <circle cx="220" cy="244" r="50" fill="#050607" />
            <circle
              cx="220"
              cy="244"
              r="34"
              fill="none"
              stroke="#C8CCD0"
              strokeOpacity=".7"
            />
            <circle cx="220" cy="244" r="8" fill="#C8CCD0" opacity=".6" />
          </g>
          <g>
            <circle cx="855" cy="244" r="50" fill="#050607" />
            <circle
              cx="855"
              cy="244"
              r="34"
              fill="none"
              stroke="#C8CCD0"
              strokeOpacity=".7"
            />
            <circle cx="855" cy="244" r="8" fill="#C8CCD0" opacity=".6" />
          </g>
          <rect
            x="30"
            y="296"
            width="940"
            height="24"
            fill="url(#rfl)"
            transform="translate(0 -10)"
          />
        </svg>
      </div>
      <div className="sweep" aria-hidden="true" />
      <div className="floor" aria-hidden="true" />
      <div className="h1w">
        <div className="mk">
          <span className="d" style={{ display: "block" }}>
            {dict.titleOutline}
          </span>
        </div>
        <div className="mk">
          <span className="d f" style={{ display: "block" }}>
            {dict.titleFill}
          </span>
        </div>
      </div>
      <div className="meta rv">
        <div>
          <p className="l cy" style={{ marginBottom: "16px" }}>
            {dict.eyebrow}
          </p>
          <p>{dict.description}</p>
        </div>
        <div className="ctas">
          <a className="cta" href="#book">
            {dict.ctaBook}
            <i aria-hidden="true" />
          </a>
          <a className="cta s" href="#show">
            {dict.ctaWork}
          </a>
        </div>
      </div>
    </section>
  );
};
