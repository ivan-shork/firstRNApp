export const directToPage = (navigation, pageName, params) => {
  return function () {
    navigation.navigate(pageName, params);
  };
};
