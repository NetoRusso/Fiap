

export const duplicateContent = (element: HTMLElement, fator: number) => {
  const content = element.innerHTML;
  const repeats = Math.ceil(window.innerWidth / element.scrollWidth * fator);
  element.innerHTML = content.repeat(repeats);
};