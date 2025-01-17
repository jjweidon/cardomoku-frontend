const importAll = (r) => {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

// 모든 카드 이미지를 한 폴더에서 import
const cards = importAll(require.context('../assets/cards', false, /\.svg$/));

export const getCardImage = (suit, number, version = 1) => {
  if (number === 'O') {
    return cards[`o_${version}.svg`];
  }
  
  return cards[`${suit.toLowerCase()}_${number.toLowerCase()}_${version}.svg`];
}; 