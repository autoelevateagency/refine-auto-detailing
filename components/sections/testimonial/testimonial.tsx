import { MediaFill } from "@/components/ui/media-fill";
import type { Dictionary } from "@/data/dictionary";
import { media } from "@/data/media";

type TestimonialProps = {
  dict: Dictionary["testimonial"];
};

export const Testimonial = ({ dict }: TestimonialProps): React.ReactNode => {
  return (
    <section id="tst" className="grain">
      <div className="bg" aria-hidden="true" />
      <div className="bgc" aria-hidden="true">
        <MediaFill src={media.testimonial.src} alt="" />
      </div>
      <span className="qm d" aria-hidden="true">
        “
      </span>
      <div className="qt rv">
        <h3 className="d">
          {dict.quote.split("\n").map((line, i, arr) => (
            <span key={`${line}-${i}`}>
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
