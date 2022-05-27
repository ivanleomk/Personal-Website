export const isInternalLink = (link: string) => {
  const regEx = /^http/;
  return !regEx.test(link);
};
