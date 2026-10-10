import type { Dictionary } from "@/data/dictionary";

type ServiceAreaProps = {
  dict: Dictionary["serviceArea"];
};

export const ServiceArea = ({ dict }: ServiceAreaProps): React.ReactNode => {
  return (
    <section id="area" className="grain">
      <svg
        className="map"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke="#C8CCD0"
        strokeOpacity=".12"
        aria-hidden="true"
      >
        <path d="M-50 650C300 600 500 400 760 420S1200 300 1450 120" />
        <path d="M-50 300C250 380 520 560 800 600S1200 780 1450 700" />
        <path d="M300-50C340 250 480 500 520 950" />
        <path d="M900-50C860 200 980 480 1060 950" />
        <circle cx="780" cy="470" r="120" />
        <circle cx="780" cy="470" r="240" />
        <circle cx="780" cy="470" r="380" />
        <path d="M-50 480H1450M780-50V950" strokeDasharray="3 9" />
        <circle cx="780" cy="470" r="4" fill="#19BFEF" stroke="none" />
        <circle cx="780" cy="470" r="14" stroke="#19BFEF" strokeOpacity=".6" />
      </svg>
      <div className="ar">
        <span className="l cy">{dict.eyebrow}</span>
        <div className="d big" style={{ marginTop: "3vh" }}>
          {dict.city}
        </div>
        <div className="d zip">
          {dict.zip}
          <i aria-hidden="true" />
          <span className="l">{dict.state}</span>
        </div>
        <h3 className="d rv">
          {dict.title}
          <br />
          <span>{dict.titleMuted}</span>
        </h3>
        <p className="n2 rv">{dict.body}</p>
      </div>
    </section>
  );
};
