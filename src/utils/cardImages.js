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
  if (!number) {
    const fileName = `${suit}_${version}.svg`;
    return cards[fileName];
  }
  
  const fileName = `${suit}_${number}_${version}.svg`;
  return cards[fileName];
}; 