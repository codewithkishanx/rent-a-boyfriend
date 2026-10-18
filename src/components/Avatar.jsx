export default function Avatar({ skin, hair, shirt, long, beard, bg }) {
  const shade = "rgba(0,0,0,.10)";
  return (
    <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMax slice">
      {bg && <rect width="200" height="220" style={{ fill: `var(${bg})` }} />}
      {long && (
        <path d="M62 98C56 50 88 40 102 40C140 40 148 80 140 160L128 190L74 190L60 160C56 130 58 112 62 98Z" fill={hair} />
      )}
      <path d="M16 220C16 172 58 152 100 152C142 152 184 172 184 220Z" fill={shirt} />
      <rect x="87" y="118" width="26" height="42" rx="12" fill={skin} />
      <rect x="87" y="138" width="26" height="20" rx="10" fill={shade} />
      <ellipse cx="100" cy="98" rx="34" ry="40" fill={skin} />
      <ellipse cx="66" cy="102" rx="5" ry="8" fill={skin} />
      <ellipse cx="134" cy="102" rx="5" ry="8" fill={skin} />
      {long ? (
        <path d="M64 92C66 58 134 54 136 92C124 74 82 70 64 92Z" fill={hair} />
      ) : (
        <path d="M64 94C60 56 84 46 102 46C128 46 142 66 136 94C130 78 116 70 100 70C84 70 72 78 64 94Z" fill={hair} />
      )}
      {beard && (
        <path d="M67 108C68 138 132 138 133 108C126 126 74 126 67 108Z" fill={hair} opacity={0.85} />
      )}
      <circle cx="87" cy="100" r="3" fill="#2A0F24" />
      <circle cx="113" cy="100" r="3" fill="#2A0F24" />
      <path d="M88 114Q100 124 112 114" fill="none" stroke="#2A0F24" strokeWidth={2.6} strokeLinecap="round" />
      <circle cx="80" cy="110" r="6" fill="#E5567E" opacity={0.28} />
      <circle cx="120" cy="110" r="6" fill="#E5567E" opacity={0.28} />
      {long ? (
        <path d="M82 158Q100 176 118 158" fill="none" stroke="#fff" strokeWidth={2} opacity={0.5} />
      ) : (
        <path d="M84 154L100 174L116 154" fill="none" stroke="#fff" strokeWidth={3} opacity={0.55} strokeLinejoin="round" />
      )}
    </svg>
  );
}
