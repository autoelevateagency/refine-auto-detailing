import type { Dictionary } from "@/data/dictionary";

type TestimonialProps = {
  dict: Dictionary["testimonial"];
};

export const Testimonial = ({ dict }: TestimonialProps): React.ReactNode => {
  return (
    <section id="tst" className="grain">
      <div className="bg" aria-hidden="true" />
      <div className="bgc" aria-hidden="true">
        <svg viewBox="0 0 1000 320">
          <path
            d="M30 238C26 214 52 200 120 192L255 124C300 98 385 82 478 82C568 82 648 98 706 134L796 166C884 174 956 192 966 224L968 244L30 244Z"
            fill="#0d1012"
          />
          <path
            d="M120 192L255 124C300 98 385 82 478 82C568 82 648 98 706 134"
            stroke="#C8CCD0"
            strokeOpacity=".4"
            fill="none"
          />
        </svg>
      </div>
      <span className="qm d" aria-hidden="true">
        “
      </span>
      <div className="qt rv">
        <h3 className="d">
          {dict.quote.split("\n").map((line, i, arr) => (
            <span key={line}>
              {line}
              {i < arr.length - 1 ? <br /> : null}
            </span>
          ))}
          <em>{dict.quoteEmphasis}</em>
        </h3>
        <div className="at l">
          <i aria-hidden="true" />
          <span>
            {dict.attribution}{" "}
            <span style={{ opacity: 0.6 }}>{dict.attributionNote}</span>
          </span>
          <span className="loc">{dict.location}</span>
        </div>
      </div>
    </section>
  );
};
