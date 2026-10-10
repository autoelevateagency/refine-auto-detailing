import type { Dictionary } from "@/data/dictionary";

type AboutProps = {
  dict: Dictionary["about"];
};

export const About = ({ dict }: AboutProps): React.ReactNode => {
  return (
    <section id="abt">
      <div className="ab1">
        <div className="vis">
          <svg viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="b1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#0a0c0e" />
                <stop offset=".55" stopColor="#3a4248" />
                <stop offset=".7" stopColor="#d9dde0" />
                <stop offset=".8" stopColor="#1a1f23" />
                <stop offset="1" stopColor="#050607" />
              </linearGradient>
            </defs>
            <rect width="1400" height="700" fill="#0a0c0e" />
            <path
              d="M0 500C300 250 800 180 1400 330V700H0Z"
              fill="url(#b1)"
              opacity=".7"
            />
            <path
              d="M0 500C300 250 800 180 1400 330"
              stroke="#19BFEF"
              fill="none"
              opacity=".8"
            />
          </svg>
          <span className="ph">{dict.photo}</span>
        </div>
      </div>
      <div className="ab2">
        <span className="l" style={{ color: "#6c7378" }}>
          {dict.eyebrow}
        </span>
        <h2 className="d rv" style={{ marginTop: "20px" }}>
          {dict.title}
          <br />
          <span>{dict.titleMuted}</span>
        </h2>
        <div className="ab3">
          <span className="l">{dict.philosophyLabel}</span>
          <div className="rv">
            <p>{dict.body}</p>
            <div className="pl l">
              {dict.pillars.map((pillar) => (
                <div key={pillar}>
                  <b>{pillar}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
