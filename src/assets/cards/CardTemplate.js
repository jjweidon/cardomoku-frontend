export const createCardSVG = ({ suit, number, isOneEyed = false }) => `
<svg width="169" height="244" viewBox="0 0 169 244" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- 카드 배경 -->
  <rect width="169" height="244" rx="12" fill="white" stroke="#E5E5E5"/>
  
  <!-- 좌상단 숫자와 무늬 -->
  <g transform="translate(12, 12)">
    <text font-family="Arial" font-size="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">
      ${number}
    </text>
    <text font-family="Arial" font-size="24" y="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">
      ${suit}
    </text>
  </g>
  
  <!-- 우하단 숫자와 무늬 (180도 회전) -->
  <g transform="translate(157, 232) rotate(180)">
    <text font-family="Arial" font-size="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">
      ${number}
    </text>
    <text font-family="Arial" font-size="24" y="24" fill="${suit === '♥' || suit === '♦' ? '#FF0000' : '#000000'}">
      ${suit}
    </text>
  </g>
  
  <!-- 중앙 무늬 패턴 -->
  ${getCenterPattern(suit, number, isOneEyed)}
</svg>
`;

// O 카드 템플릿
export const createOCardSVG = () => `
<svg width="169" height="244" viewBox="0 0 169 244" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="169" height="244" rx="12" fill="white" stroke="#E5E5E5"/>
  <circle cx="84.5" cy="122" r="40" stroke="black" stroke-width="8"/>
</svg>
`; 