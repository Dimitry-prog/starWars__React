export const changeCssVariables = theme => {
  const root = document.querySelector(':root');
  const cssVariables = ['color', 'bgImage'];
  cssVariables.forEach(element => {
    root.style.setProperty(`--theme-default-${element}`, `var(--theme-${theme}-${element}`);
  });
}