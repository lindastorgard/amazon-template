export function createMarkup(param) {
  return { __html: param };
}

export function toggleText(open, setOpen, changeHeight) {
  if (open) {
    changeHeight("60px");
    setOpen(!open);
  } else {
    changeHeight("1000px");
    setOpen(!open);
  }
}
