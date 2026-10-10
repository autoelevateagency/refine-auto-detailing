import { MediaFill } from "@/components/ui/media-fill";
import type { Dictionary } from "@/data/dictionary";
import { media } from "@/data/media";

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
            {media.showcase.map((panel, index) => {
              const caption = dict.panels[index] ?? dict.panels[0];

              return (
                <div className="pn" key={`${caption.category}-${caption.label}-${index}`}>
                  <div className="vis">
                    {panel.kind === "beforeAfter" ? (
                      <div className="ba">
                        <div className="b">
                          <MediaFill
                            src={panel.before.src}
                            alt={panel.before.alt}
                          />
                        </div>
                        <div>
                          <MediaFill
                            src={panel.after.src}
                            alt={panel.after.alt}
                          />
                        </div>
                      </div>
                    ) : (
                      <MediaFill src={panel.src} alt={panel.alt} />
                    )}
                  </div>
                  <div className="cap l">
                    <b>{caption.category}</b>
                    <span>{caption.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="prog">
            <i id="pg" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};
