import PhoneFrame from '../../components/PhoneFrame';
import BottomNav from '../../components/BottomNav';
import Badge from '../../components/Badge';
import './B2_1.css';

const clinics = [
  { code: 'G', name: 'GMC UGM — Bulaksumur', est: '~12 mnt', tone: 'ringan', label: 'Ringkas', sub: 'Estimasi tunggu terpendek' },
  { code: 'K', name: 'Klinik Pratama (contoh)', est: '~20 mnt', tone: 'sedang', label: 'Sedang', sub: 'Estimasi tunggu terdekat' },
];

export default function B2_1() {
  return (
    <PhoneFrame caption="B2.1 Beranda — Pilih Klinik.">
      <div className="app-header">
        <div className="logo-sm">GMC</div>
        <div><small>Your Time, Your Queue</small></div>
      </div>
      <div className="hero">
        <small>Halo, Syahril</small>
        <h3>Mau berobat? Pilih klinik dulu.</h3>
        <p>Kamu belum punya antrean aktif.</p>
      </div>

      <h4>Pilih klinik</h4>
      {clinics.map(c => (
        <div className="list-card" key={c.code}>
          <div className="avatar">{c.code}</div>
          <div className="body">
            <b>{c.name}</b>
            <small>{c.sub}</small>
            <div className="row-badges"><Badge tone={c.tone}>{c.label}</Badge> <span className="est">{c.est}</span></div>
          </div>
          <span className="link">Pilih →</span>
        </div>
      ))}
      <BottomNav active="Beranda" />
    </PhoneFrame>
  );
}