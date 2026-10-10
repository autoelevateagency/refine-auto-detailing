import type { Dictionary } from "@/data/dictionary";

type ShowcaseProps = {
  dict: Dictionary["showcase"];
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

export const Showcase = ({ dict }: ShowcaseProps): React.ReactNode => {
  return (
    <section id="show">
      <div className="hs" id="hs">
        <div className="stk">
          <div className="hd rv">
            <span className="l cy">{dict.eyebrow}</span>
            <h2
              className="d"
              style={{
                fontSize: "clamp(2rem,4vw,4rem)",
                marginTop: "14px",
              }}
            >
              <TitleLines text={dict.title} />
            </h2>
          </div>
          <div className="trk" id="trk">
            <div className="pn">
              <div className="vis">
                <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="a1" x1="0" y1="0" x2="1" y2=".4">
                      <stop offset="0" stopColor="#050607" />
                      <stop offset=".5" stopColor="#d7dbde" />
                      <stop offset=".62" stopColor="#2a3036" />
                      <stop offset="1" stopColor="#050607" />
                    </linearGradient>
                  </defs>
                  <rect width="800" height="600" fill="url(#a1)" />
                  <path
                    d="M0 380C250 250 520 250 800 330"
                    stroke="#19BFEF"
                    fill="none"
                    opacity=".7"
                  />
                </svg>
                <span className="ph">{dict.panels[0].photo}</span>
              </div>
              <div className="cap l">
                <b>{dict.panels[0].category}</b>
                <span>{dict.panels[0].label}</span>
              </div>
            </div>
            <div className="pn">
              <div className="vis">
                <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
                  <rect width="600" height="600" fill="#0b0d0f" />
                  <g fill="none" stroke="#C8CCD0" strokeOpacity=".6">
                    <circle
                      cx="300"
                      cy="300"
                      r="260"
                      strokeWidth="30"
                      strokeOpacity=".2"
                    />
                    <circle cx="300" cy="300" r="190" />
                    <path
                      d="M300 300L300 40M300 300L550 220M300 300L460 530M300 300L140 530M300 300L50 220"
                      strokeWidth="26"
                      strokeOpacity=".28"
                    />
                  </g>
                  <circle cx="300" cy="300" r="34" fill="#C8CCD0" opacity=".5" />
                  <circle
                    cx="300"
                    cy="300"
                    r="268"
                    fill="none"
                    stroke="#19BFEF"
                    strokeOpacity=".5"
                  />
                </svg>
                <span className="ph">{dict.panels[1].photo}</span>
              </div>
              <div className="cap l">
                <b>{dict.panels[1].category}</b>
                <span>{dict.panels[1].label}</span>
              </div>
            </div>
            <div className="pn">
              <div className="vis">
                <div className="ba">
                  <div
                    className="b"
                    style={{
                      background:
                        "repeating-linear-gradient(115deg,#2b2e30 0 6px,#1b1d1f 6px 14px)",
                    }}
                  />
                  <div
                    style={{
                      background:
                        "linear-gradient(115deg,#050607,#e4e7ea 55%,#1a1f23)",
                    }}
                  />
                </div>
                <span className="ph" style={{ left: "auto", right: "18px" }}>
                  {dict.beforeAfterPhoto}
                </span>
              </div>
              <div className="cap l">
                <b>{dict.panels[2].category}</b>
                <span>{dict.panels[2].label}</span>
              </div>
            </div>
            <div className="pn">
              <div className="vis">
                <svg viewBox="0 0 600 700" preserveAspectRatio="xMidYMid slice">
                  <rect width="600" height="700" fill="#14110f" />
                  <rect width="600" height="700" fill="#0c0e10" opacity=".7" />
                  <g
                    stroke="#C8CCD0"
                    strokeOpacity=".45"
                    strokeDasharray="7 6"
                    fill="none"
                  >
                    <path d="M-20 200C200 150 400 250 640 190" />
                    <path d="M-20 214C200 164 400 264 640 204" />
                    <path d="M-20 480C200 430 400 530 640 470" />
                  </g>
                  <path
                    d="M-20 300C200 250 400 350 640 290V420C400 480 200 380-20 440Z"
                    fill="#1d2226"
                  />
                  <path
                    d="M-20 300C200 250 400 350 640 290"
                    stroke="#19BFEF"
                    strokeOpacity=".6"
                    fill="none"
                  />
                </svg>
                <span className="ph">{dict.panels[3].photo}</span>
              </div>
              <div className="cap l">
                <b>{dict.panels[3].category}</b>
                <span>{dict.panels[3].label}</span>
              </div>
            </div>
            <div className="pn">
              <div className="vis">
                <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <radialGradient id="a5" cx=".6" cy=".7" r=".8">
                      <stop offset="0" stopColor="#2c353b" />
                      <stop offset="1" stopColor="#050607" />
                    </radialGradient>
                  </defs>
                  <rect width="800" height="600" fill="url(#a5)" />
                  <path
                    d="M60 420C100 330 260 280 400 280S700 330 740 420Z"
                    fill="#0a0c0e"
                    stroke="#C8CCD0"
                    strokeOpacity=".5"
                  />
                  <rect
                    x="0"
                    y="420"
                    width="800"
                    height="1"
                    fill="#19BFEF"
                    opacity=".7"
                  />
                </svg>
                <span className="ph">{dict.panels[4].photo}</span>
              </div>
              <div className="cap l">
                <b>{dict.panels[4].category}</b>
                <span>{dict.panels[4].label}</span>
              </div>
            </div>
          </div>
          <div className="prog">
            <i id="pg" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};
