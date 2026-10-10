import type { Dictionary } from "@/data/dictionary";

import { TestimonialCarousel } from "./testimonial-carousel";

type TestimonialProps = {
  dict: Dictionary["testimonial"];
};

export const Testimonial = ({ dict }: TestimonialProps): React.ReactNode => {
  return (
    <section id="tst" className="grain">
      <div className="bg" aria-hidden="true" />
      <span className="qm d" aria-hidden="true">
        “
      </span>
      <TestimonialCarousel dict={dict} />
    </section>
  );
};
