import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { createNumberCardSVG, createFaceCardSVG, createAceCardSVG, createOCardSVG, getNumberPositions } = require('../assets/cards/CardTemplate.js');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CARD_DIR = path.join(__dirname, '../assets/cards');

// 모든 무늬
const suits = {
  spade: '♠',
  heart: '♥',
  diamond: '♦',
  clover: '♣'
};

// 숫자 카드 생성 (2-10)
Object.entries(suits).forEach(([suitName, suitSymbol]) => {
  for (let num = 2; num <= 10; num++) {
    for (let version = 1; version <= 2; version++) {
      const svg = createNumberCardSVG(suitSymbol, num.toString(), getNumberPositions(num.toString()));
      fs.writeFileSync(
        path.join(CARD_DIR, `${suitName}_${num}_${version}.svg`),
        svg
      );
    }
  }
});

// 문자 카드 생성 (J,Q,K)
const faceCards = ['j', 'q', 'k'];
Object.entries(suits).forEach(([suitName, suitSymbol]) => {
  faceCards.forEach(rank => {
    // 한눈 버전
    const svg1 = createFaceCardSVG(suitSymbol, rank.toUpperCase(), true);
    fs.writeFileSync(
      path.join(CARD_DIR, `${suitName}_${rank}_1.svg`),
      svg1
    );
    
    // 두눈 버전
    const svg2 = createFaceCardSVG(suitSymbol, rank.toUpperCase(), false);
    fs.writeFileSync(
      path.join(CARD_DIR, `${suitName}_${rank}_2.svg`),
      svg2
    );
  });
});

// A 카드 생성
Object.entries(suits).forEach(([suitName, suitSymbol]) => {
  for (let version = 1; version <= 2; version++) {
    const svg = createAceCardSVG(suitSymbol);
    fs.writeFileSync(
      path.join(CARD_DIR, `${suitName}_a_${version}.svg`),
      svg
    );
  }
});

// O 카드 생성
for (let i = 1; i <= 4; i++) {
  const svg = createOCardSVG();
  fs.writeFileSync(
    path.join(CARD_DIR, `o_o_${i}.svg`),
    svg
  );
} 