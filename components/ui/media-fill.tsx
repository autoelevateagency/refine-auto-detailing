import Image from "next/image";

type MediaFillProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export const MediaFill = ({
  src,
  alt,
  priority = false,
  className = "",
}: MediaFillProps): React.ReactNode => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1100px) 80vw, 70vw"
      priority={priority}
      className={`media-fill ${className}`.trim()}
    />
  );
};
