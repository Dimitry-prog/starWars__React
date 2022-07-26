export function debounce(func, timeout = 300) {
  let timer;
  return function (...par) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, par);
    }, timeout);
  }
}