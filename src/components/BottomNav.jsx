import './BottomNav.css';
import { useNavigate } from 'react-router-dom';

export default function BottomNav({ active = 'Beranda' }) {
  const nav = useNavigate();
  const items = [
    { label: 'Beranda', path: '/registrasi/klinik' },
    { label: 'Antrean Saya', path: '/estimasi/antrean-saya' },
    { label: 'Riwayat', path: '/estimasi/antrean-saya' },
    { label: 'Profil', path: '/estimasi/antrean-saya' },
  ];
  return (
    <nav className="bottom-nav">
      {items.map(i => (
        <span key={i.label} className={i.label === active ? 'active' : ''} onClick={() => nav(i.path)}>
          {i.label}
        </span>
      ))}
    </nav>
  );
}