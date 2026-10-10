import { BackgroundVideo } from "@/components/ui/background-video";
import type { Dictionary } from "@/data/dictionary";
import { media } from "@/data/media";

type BookingProps = {
  dict: Dictionary["booking"];
};

export const Booking = ({ dict }: BookingProps): React.ReactNode => {
  return (
    <section id="book" className="grain" aria-label={media.booking.alt}>
      <div
        className="book-media"
        aria-hidden="true"
        style={{ backgroundImage: `url(${media.booking.src})` }}
      >
        <BackgroundVideo src={media.booking.video} poster={media.booking.src} />
      </div>
      <div className="beam2" aria-hidden="true" />
      <div className="beam" aria-hidden="true" />
      <div className="bk2">
        <div className="rv">
          <h2 className="d">
            {dict.titleLine1}
            <br />
            <span className="o">{dict.titleOutline}</span>
            <br />
            {dict.titleLine2}
          </h2>
        </div>
        <div className="row">
          <p>{dict.subtitle}</p>
          <a className="cta xl" href="#ct">
            {dict.cta}
            <i aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
