import { MediaFill } from "@/components/ui/media-fill";
import type { Dictionary } from "@/data/dictionary";
import { media } from "@/data/media";

type AboutProps = {
  dict: Dictionary["about"];
};

export const About = ({ dict }: AboutProps): React.ReactNode => {
  return (
    <section id="abt">
      <div className="ab1">
        <div className="vis">
          <MediaFill src={media.about.src} alt={media.about.alt} />
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
