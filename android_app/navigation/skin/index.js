import baseSkin from './baseSkin';
import todoSkin from './todoSkin';
const skinCollect = ({route}) => {
  let baseGlobalSkin = baseSkin(route);
  let speicalSkin;
  console.log('12124123');

  switch (route.name) {
    case '待办事项':
      speicalSkin = todoSkin(route);
      break;
    default:
      speicalSkin = {};
      break;
  }
  return {
    ...baseGlobalSkin,
    ...speicalSkin,
  };
};
export default skinCollect;
