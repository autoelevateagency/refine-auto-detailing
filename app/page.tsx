import { SiteNav } from "@/components/layout/site-nav/site-nav";
import { ScrollController } from "@/components/home/scroll-controller";
import { About } from "@/components/sections/about/about";
import { Booking } from "@/components/sections/booking/booking";
import { Contact } from "@/components/sections/contact/contact";
import { SiteFooter } from "@/components/sections/footer/site-footer";
import { Hero } from "@/components/sections/hero/hero";
import { ServiceArea } from "@/components/sections/service-area/service-area";
import { Services } from "@/components/sections/services/services";
import { Showcase } from "@/components/sections/showcase/showcase";
import { Testimonial } from "@/components/sections/testimonial/testimonial";
import { getDictionary } from "@/data/dictionary";

export default function Home(): React.ReactNode {
  const dict = getDictionary("EN");

  return (
    <>
      <ScrollController />
      <SiteNav dict={dict.nav} />
      <Hero dict={dict.hero} />
      <Services dict={dict.services} />
      <Showcase dict={dict.showcase} />
      <Testimonial dict={dict.testimonial} />
      <About dict={dict.about} />
      <ServiceArea dict={dict.serviceArea} />
      <Contact dict={dict.contact} />
      <Booking dict={dict.booking} />
      <SiteFooter dict={dict.footer} />
    </>
  );
}
