import { BackgroundVideo } from "@/components/ui/background-video";
import type { Dictionary } from "@/data/dictionary";
import { media } from "@/data/media";

type HeroProps = {
  dict: Dictionary["hero"];
};

export const Hero = ({ dict }: HeroProps): React.ReactNode => {
  return (
    <section id="hero" className="grain" aria-label={media.hero.alt}>
      <div
        className="hero-media"
        aria-hidden="true"
        style={{ backgroundImage: `url(${media.hero.src})` }}
      >
        <BackgroundVideo src={media.hero.video} poster={media.hero.src} />
      </div>
      <span className="tag l">{dict.tag}</span>
      <span className="scr l">
        <i aria-hidden="true" />
        {dict.scroll}
      </span>
      <div className="sweep" aria-hidden="true" />
      <div className="floor" aria-hidden="true" />
      <div className="h1w">
        <div className="mk">
          <span className="d" style={{ display: "block" }}>
            {dict.titleOutline}
          </span>
        </div>
        <div className="mk">
          <span className="d f" style={{ display: "block" }}>
            {dict.titleFill}
          </span>
        </div>
      </div>
      <div className="meta rv">
        <div>
          <p className="l cy" style={{ marginBottom: "16px" }}>
            {dict.eyebrow}
          </p>
          <p>{dict.description}</p>
        </div>
        <div className="ctas">
          <a className="cta" href="#book">
            {dict.ctaBook}
            <i aria-hidden="true" />
          </a>
          <a className="cta s" href="#show">
            {dict.ctaWork}
          </a>
        </div>
      </div>
    </section>
  );
};
