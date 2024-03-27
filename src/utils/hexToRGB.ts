export const hexToRGB = (color: string) => {
  const value = parseInt(color.slice(1), 16);
  let r = (value >> 16) & 0xff;
  let g = (value >> 8) & 0xff;
  let b = value & 0xff;
  return `rgb(${r}, ${g}, ${b})`;
};
