import type { Dictionary } from "@/data/dictionary";

type SiteFooterProps = {
  dict: Dictionary["footer"];
};

export const SiteFooter = ({ dict }: SiteFooterProps): React.ReactNode => {
  return (
    <footer>
      <div className="d">{dict.titleOutline}</div>
      <div className="d o">{dict.titleFill}</div>
      <div className="fm l">
        <span>{dict.location}</span>
        <nav className="l" aria-label="Footer">
          <a href="#">{dict.instagram}</a>
          <a href="#ct">{dict.phone}</a>
          <a href="#ct">{dict.email}</a>
          <a href="#book">{dict.booking}</a>
        </nav>
      </div>
      <div className="dv" aria-hidden="true" />
      <div className="cp">
        <span>{dict.copyright}</span>
        <span>{dict.region}</span>
      </div>
    </footer>
  );
};
