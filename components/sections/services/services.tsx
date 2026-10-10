import { MediaFill } from "@/components/ui/media-fill";
import type { Dictionary } from "@/data/dictionary";
import { media } from "@/data/media";

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
          <MediaFill
            src={media.services.interior.src}
            alt={media.services.interior.alt}
          />
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
          <MediaFill
            src={media.services.exterior.src}
            alt={media.services.exterior.alt}
          />
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
