type BackgroundVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

export const BackgroundVideo = ({
  src,
  poster,
  className = "",
}: BackgroundVideoProps): React.ReactNode => {
  return (
    <video
      className={`bg-video ${className}`.trim()}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};
