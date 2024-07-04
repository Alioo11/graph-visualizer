const getCSSVariable = (property: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(property).trim();
};

export { getCSSVariable };
