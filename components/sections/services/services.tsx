import type { Dictionary } from "@/data/dictionary";

type ServicesProps = {
  dict: Dictionary["services"];
};

const TitleLines = ({ text }: { text: string }): React.ReactNode => {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <span key={line}>
          {line}
          {i < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
};

export const Services = ({ dict }: ServicesProps): React.ReactNode => {
  const { interior, exterior } = dict;

  return (
    <section id="svc">
      <div className="sv si grain">
        <span className="n d">{interior.number}</span>
        <div className="vis">
          <svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="lt" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2a3035" />
                <stop offset="1" stopColor="#07090a" />
              </linearGradient>
            </defs>
            <rect width="800" height="800" fill="url(#lt)" />
            <g fill="none" stroke="#C8CCD0" strokeOpacity=".55">
              <circle
                cx="340"
                cy="470"
                r="250"
                strokeWidth="22"
                strokeOpacity=".25"
              />
              <circle cx="340" cy="470" r="250" />
              <circle cx="340" cy="470" r="228" />
              <path
                d="M340 470L110 380M340 470L570 380M340 470V700"
                strokeWidth="30"
                strokeOpacity=".2"
              />
            </g>
            <g
              fill="none"
              stroke="#19BFEF"
              strokeOpacity=".55"
              strokeDasharray="6 7"
            >
              <circle cx="340" cy="470" r="239" />
            </g>
            <circle
              cx="340"
              cy="470"
              r="46"
              fill="#0b0d0f"
              stroke="#C8CCD0"
              strokeOpacity=".5"
            />
            <path d="M0 760C200 700 500 690 800 740V800H0Z" fill="#050607" />
          </svg>
          <span className="ph">{interior.photo}</span>
        </div>
        <div className="tx rv">
          <span className="l cy">{interior.label}</span>
          <h2 className="d">
            <TitleLines text={interior.title} />
          </h2>
          <p>{interior.body}</p>
          <ul className="l">
            {interior.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sv sx grain">
        <span className="n d">{exterior.number}</span>
        <div className="vis">
          <svg viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="px" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#0a0c0e" />
                <stop offset=".4" stopColor="#3a4249" />
                <stop offset=".55" stopColor="#e8eaec" />
                <stop offset=".7" stopColor="#252b30" />
                <stop offset="1" stopColor="#050607" />
              </linearGradient>
              <linearGradient id="py" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#14181b" />
                <stop offset="1" stopColor="#050607" />
              </linearGradient>
            </defs>
            <rect width="1200" height="520" fill="url(#py)" />
            <path
              d="M-50 420C250 140 700 60 1300 160V520H-50Z"
              fill="url(#px)"
              opacity=".85"
            />
            <path
              d="M-50 420C250 140 700 60 1300 160"
              stroke="#19BFEF"
              strokeWidth="1.5"
              fill="none"
              opacity=".8"
            />
          </svg>
          <span className="ph">{exterior.photo}</span>
        </div>
        <div className="tx rv">
          <span className="l cy">{exterior.label}</span>
          <h2 className="d">
            <TitleLines text={exterior.title} />
          </h2>
          <p>{exterior.body}</p>
          <ul className="l">
            {exterior.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
