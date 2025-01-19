const fontSize = 36;

// 숫자 카드 템플릿 (2-10)
const createNumberCardSVG = (suit, number, positions) => `
<svg width="169" height="244" viewBox="0 0 169 244" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- 카드 배경 -->
  <rect width="169" height="244" rx="12" fill="white" stroke="#E5E5E5"/>
  
  <!-- 좌상단 숫자와 무늬 -->
  <g transform="translate(12, 12)">
    <text font-family="Arial" font-size="${fontSize}" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${number}</text>
    <text font-family="Arial" font-size="${fontSize}" y="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${suit}</text>
  </g>
  
  <!-- 우하단 숫자와 무늬 (180도 회전) -->
  <g transform="translate(157, 232) rotate(180)">
    <text font-family="Arial" font-size="${fontSize}" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${number}</text>
    <text font-family="Arial" font-size="${fontSize}" y="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${suit}</text>
  </g>
  
  <!-- 중앙 무늬들 -->
  ${positions.map(pos => `
    <g transform="translate(${pos.x}, ${pos.y})">
      <text font-family="Arial" font-size="${fontSize}" y="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${suit}</text>
    </g>
  `).join('')}
</svg>
`;

// 문자 카드 템플릿 (J,Q,K)
const createFaceCardSVG = (suit, rank, isOneEyed = false) => `
<svg width="169" height="244" viewBox="0 0 169 244" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- 카드 배경 -->
  <rect width="169" height="244" rx="12" fill="white" stroke="#E5E5E5"/>
  
  <!-- 좌상단 숫자와 무늬 -->
  <g transform="translate(12, 12)">
    <text font-family="Arial" font-size="${fontSize}" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${rank}</text>
    <text font-family="Arial" font-size="${fontSize}" y="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${suit}</text>
  </g>
  
  <!-- 우하단 숫자와 무늬 (180도 회전) -->
  <g transform="translate(157, 232) rotate(180)">
    <text font-family="Arial" font-size="${fontSize}" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${rank}</text>
    <text font-family="Arial" font-size="${fontSize}" y="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${suit}</text>
  </g>
  
  <!-- 중앙 이미지 -->
  <g transform="translate(84.5, 122)">
    ${getFaceImage(rank, isOneEyed, suit === '♥' || suit === '♦')}
  </g>
</svg>
`;

// A 카드 템플릿
const createAceCardSVG = (suit) => `
<svg width="169" height="244" viewBox="0 0 169 244" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- 카드 배경 -->
  <rect width="169" height="244" rx="12" fill="white" stroke="#E5E5E5"/>
  
  <!-- 좌상단 숫자와 무늬 -->
  <g transform="translate(12, 12)">
    <text font-family="Arial" font-size="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">A</text>
    <text font-family="Arial" font-size="24" y="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${suit}</text>
  </g>
  
  <!-- 우하단 숫자와 무늬 (180도 회전) -->
  <g transform="translate(157, 232) rotate(180)">
    <text font-family="Arial" font-size="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">A</text>
    <text font-family="Arial" font-size="24" y="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">${suit}</text>
  </g>
  
  <!-- 중앙 큰 무늬 -->
  <g transform="translate(84.5, 122)">
    <text font-family="Arial" font-size="72" y="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}" text-anchor="middle">${suit}</text>
  </g>
</svg>
`;

// O 카드 템플릿
const createOCardSVG = () => `
<svg width="169" height="244" viewBox="0 0 169 244" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- 카드 배경 -->
  <rect width="169" height="244" rx="12" fill="white" stroke="#E5E5E5"/>
  
  <!-- 중앙 검은 원 -->
  <circle cx="84.5" cy="122" r="40" stroke="#000000" stroke-width="8" fill="none"/>
</svg>
`;

// getFaceImage 함수 추가
const getFaceImage = (rank, isOneEyed, isRed) => {
  const color = isRed ? '#FF0000' : '#000000';
  const faceColor = '#FFE4B5';

  switch (rank) {
    case 'K':
      return `
        <!-- 왕관 -->
        <path d="M-20 -40 L20 -40 L15 -30 L10 -35 L0 -25 L-10 -35 L-15 -30 Z" fill="#FFD700"/>
        <!-- 얼굴 -->
        <circle cx="0" cy="-15" r="20" fill="${faceColor}"/>
        <!-- 눈 -->
        ${isOneEyed ? 
          `<circle cx="8" cy="-18" r="2" fill="${color}"/>` :
          `<circle cx="-8" cy="-18" r="2" fill="${color}"/>
           <circle cx="8" cy="-18" r="2" fill="${color}"/>`
        }
        <!-- 코 -->
        <path d="M0 -15 Q2 -12 0 -10" stroke="${color}" fill="none"/>
        <!-- 입 -->
        <path d="M-5 -5 Q0 -2 5 -5" stroke="${color}" fill="none"/>
        <!-- 옷깃 -->
        <path d="M-20 10 Q0 40 20 10" fill="#4169E1"/>
      `;
    case 'Q':
      return `
        <!-- 왕관 -->
        <path d="M-15 -40 L15 -40 L10 -30 L5 -35 L0 -25 L-5 -35 L-10 -30 Z" fill="#FFD700"/>
        <!-- 얼굴 -->
        <circle cx="0" cy="-15" r="18" fill="${faceColor}"/>
        <!-- 눈 -->
        ${isOneEyed ? 
          `<circle cx="6" cy="-18" r="1.5" fill="${color}"/>` :
          `<circle cx="-6" cy="-18" r="1.5" fill="${color}"/>
           <circle cx="6" cy="-18" r="1.5" fill="${color}"/>`
        }
        <!-- 코 -->
        <path d="M0 -15 Q1 -12 0 -10" stroke="${color}" fill="none"/>
        <!-- 입 -->
        <path d="M-4 -5 Q0 -2 4 -5" stroke="${color}" fill="none"/>
        <!-- 드레스 -->
        <path d="M-15 10 Q0 45 15 10" fill="#FF69B4"/>
      `;
    case 'J':
      return `
        <!-- 모자 -->
        <path d="M-15 -35 L15 -35 L20 -25 L-20 -25 Z" fill="#FF0000"/>
        <!-- 얼굴 -->
        <circle cx="0" cy="-15" r="16" fill="${faceColor}"/>
        <!-- 눈 -->
        ${isOneEyed ? 
          `<circle cx="6" cy="-18" r="1.5" fill="${color}"/>` :
          `<circle cx="-6" cy="-18" r="1.5" fill="${color}"/>
           <circle cx="6" cy="-18" r="1.5" fill="${color}"/>`
        }
        <!-- 코 -->
        <path d="M0 -15 Q1 -12 0 -10" stroke="${color}" fill="none"/>
        <!-- 입 -->
        <path d="M-4 -5 Q0 -3 4 -5" stroke="${color}" fill="none"/>
        <!-- 옷깃 -->
        <path d="M-15 10 Q0 35 15 10" fill="#000000"/>
      `;
    default:
      return '';
  }
};

export { createNumberCardSVG, createFaceCardSVG, createAceCardSVG, createOCardSVG }; 