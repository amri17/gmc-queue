import './ProgressRing.css';

export default function ProgressRing({ size = 150, stroke = 14, percent = 65, label, sublabel, color = 'var(--orange-500)' }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return (
    <div className="ring-wrap" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} stroke="var(--gray-200)" strokeWidth={stroke} fill="none" />
        <circle cx={size/2} cy={size/2} r={r} stroke={color} strokeWidth={stroke}
          fill="none" strokeDasharray={c} strokeDashoffset={offset}
          strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`} />
      </svg>
      <div className="ring-label">
        {sublabel && <span className="ring-sub">{sublabel}</span>}
        <span className="ring-main">{label}</span>
      </div>
    </div>
  );
}