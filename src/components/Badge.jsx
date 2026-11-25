import './Badge.css';

const map = {
  ringan: 'badge-green', singkat: 'badge-green', sedang: 'badge-amber',
  lama: 'badge-red', success: 'badge-green', live: 'badge-green', muted: 'badge-gray'
};

export default function Badge({ tone = 'sedang', children }) {
  return <span className={`badge ${map[tone] || 'badge-amber'}`}>{children}</span>;
}