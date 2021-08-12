export const doubleClick = callback => {
  let times = 0;
  let timer = null;
  return () => {
    clearTimeout(timer);
    if (++times >= 2) {
      console.log('双击了');
      callback();
      times = 0;
    }
    timer = setTimeout(() => {
      times = 0;
    }, 200);
  };
};
