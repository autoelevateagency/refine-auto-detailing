import type { Dictionary } from "@/data/dictionary";

type BookingProps = {
  dict: Dictionary["booking"];
};

export const Booking = ({ dict }: BookingProps): React.ReactNode => {
  return (
    <section id="book" className="grain">
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
