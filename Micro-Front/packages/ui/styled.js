export function styled(tag, styles) {
  const el = document.createElement(tag);
  Object.assign(el.style, styles);
  return el;
}