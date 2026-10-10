export type MediaItem = {
  src: string;
  alt: string;
};

export type ShowcasePanel =
  | {
      kind: "image";
      src: string;
      alt: string;
    }
  | {
      kind: "beforeAfter";
      before: MediaItem;
      after: MediaItem;
    };

const asset = (file: string): string => `/assets/${file}`;
const video = (file: string): string => `/assets/videos/${file}`;

export const media = {
  hero: {
    src: asset("photo-20.jpg"),
    alt: "Detailed Lexus LC 500 with a mirror gloss finish",
    video: video("hero-ba.mp4"),
  },
  services: {
    interior: {
      src: asset("photo-08.jpg"),
      alt: "Detailed Cadillac Escalade interior with polished leather and wood trim",
    },
    exterior: {
      src: asset("photo-16.jpg"),
      alt: "Glossy dark GMC Sierra after exterior detailing",
    },
  },
  showcase: [
    {
      kind: "image",
      src: asset("photo-02.jpg"),
      alt: "Silver Lexus sedan with reflective paint finish",
    },
    {
      kind: "image",
      src: asset("photo-14.jpg"),
      alt: "Black Ford Edge wheels and tire finish",
    },
    {
      kind: "beforeAfter",
      before: {
        src: asset("photo-09.jpg"),
        alt: "Toyota Tundra during detailing process",
      },
      after: {
        src: asset("photo-17.jpg"),
        alt: "Tesla Model Y after exterior detailing",
      },
    },
    {
      kind: "image",
      src: asset("photo-15.jpg"),
      alt: "Clean Lexus leather interior after detailing",
    },
    {
      kind: "image",
      src: asset("photo-13.jpg"),
      alt: "Gray Kia K5 final reveal after detailing",
    },
    {
      kind: "image",
      src: asset("photo-01.jpg"),
      alt: "Black Chevrolet Trailblazer exterior detail",
    },
    {
      kind: "image",
      src: asset("photo-07.jpg"),
      alt: "White Lexus GX after exterior detailing",
    },
    {
      kind: "image",
      src: asset("photo-11.jpg"),
      alt: "Honda cabin interior deep clean",
    },
    {
      kind: "image",
      src: asset("photo-19.jpg"),
      alt: "Two-tone Ford F-150 exterior finish",
    },
    {
      kind: "image",
      src: asset("photo-03.jpg"),
      alt: "Lifted Ford F-150 after exterior detailing",
    },
    {
      kind: "image",
      src: asset("photo-06.jpg"),
      alt: "White Jeep Grand Cherokee exterior detail",
    },
    {
      kind: "image",
      src: asset("photo-10.jpg"),
      alt: "White Ford F-150 chrome and paint finish",
    },
    {
      kind: "image",
      src: asset("photo-12.jpg"),
      alt: "Dark Jeep Cherokee with reflective paint",
    },
  ] satisfies ShowcasePanel[],
  about: {
    src: asset("photo-05.jpg"),
    alt: "Ram 1500 freshly detailed in a residential driveway",
  },
  booking: {
    src: asset("photo-18.jpg"),
    alt: "White SUV detailed at a San Antonio home",
    video: video("cta-back.mp4"),
  },
} as const;
