export const sizes = {
  sm: "576",
  md: "768",
  lg: "992",
  xl: "1280",
};

export const breakpoint = {
  upSm: `(min-width:${sizes.sm}px)`,
  upMd: `(min-width:${sizes.md}px)`,
  upLg: `(min-width:${sizes.lg}px)`,
  upXl: `(min-width:${sizes.xl}px)`,
  downXs: `(max-width:${sizes.sm - 1}px)`,
  downSm: `(max-width:${sizes.md - 1}px)`,
  downMd: `(max-width:${sizes.lg - 1}px)`,
  downLg: `(max-width:${sizes.xl - 1}px)`,
};
