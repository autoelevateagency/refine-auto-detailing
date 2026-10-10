import type { Dictionary } from "@/data/dictionary";

type ContactProps = {
  dict: Dictionary["contact"];
};

const Multiline = ({ text }: { text: string }): React.ReactNode => {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <span key={`${line}-${i}`}>
          {line}
          {i < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
};

export const Contact = ({ dict }: ContactProps): React.ReactNode => {
  return (
    <section id="ct">
      <span className="l" style={{ color: "#5b6268" }}>
        {dict.eyebrow}
      </span>
      <h2 className="d rv" style={{ marginTop: "3vh" }}>
        {dict.titleLine1}
        <br />
        <span>{dict.titleOutline}</span>
        <br />
        {dict.titleLine2}
      </h2>
      <div className="ci rv">
        <div>
          <span className="l">{dict.locationLabel}</span>
          <p>
            <Multiline text={dict.locationValue} />
          </p>
        </div>
        <div>
          <span className="l">{dict.hoursLabel}</span>
          <p>
            <Multiline text={dict.hoursValue} />
          </p>
        </div>
        <div>
          <span className="l">{dict.phoneLabel}</span>
          <a href="tel:+12105550148" aria-label={dict.phoneValue}>
            {dict.phoneValue}
          </a>
        </div>
        <div>
          <span className="l">{dict.emailLabel}</span>
          <a
            href={`mailto:${dict.emailValue}`}
            aria-label={dict.emailValue}
          >
            {dict.emailValue}
          </a>
        </div>
      </div>
      <div className="cb2">
        <a href="#book">
          {dict.cta}
          <i aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
