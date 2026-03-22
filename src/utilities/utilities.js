export const formatCount = (num) => {
  if (num >= 1_000_000) {
    return num % 1_000_000 === 0
      ? `${num / 1_000_000}M`
      : `${(num / 1_000_000).toFixed(1)}M+`;
  }
  if (num >= 1_000) {
    return num % 1_000 === 0
      ? `${num / 1_000}K`
      : `${(num / 1_000).toFixed(1)}K+`;
  }
  return num.toString();
};
