import PhoneFrame from '../../components/PhoneFrame';
import BottomNav from '../../components/BottomNav';
import Badge from '../../components/Badge';
import { useNavigate } from 'react-router-dom';
import './B2_1.css';

const clinics = [
  { code: 'G', name: 'GMC UGM — Bulaksumur', est: '~12 mnt', color: 'green', label: 'Buka', sub: 'Estimasi tunggu terpendek' },
  { code: 'K', name: 'Klinik Pratama (contoh)', est: '~25 mnt', color: 'amber', label: 'Buka', sub: 'Estimasi tunggu terdekat' },
];

export default function B2_1() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B2.1 Beranda — Pilih Klinik.">
      <div className="app-header">
        <div className="logo-sm">GMC</div>
        <div className="header-text">
          <b>GMC Queue</b>
          <small>Your Time, Your Queue</small>
        </div>
      </div>
      
      <div className="hero">
        <small>Halo, Syahril</small>
        <h3>Mau berobat? Pilih klinik dulu.</h3>
        <p>Kamu belum punya antrean aktif.</p>
      </div>

      <h4>Pilih klinik</h4>
      
      {clinics.map(c => (
        <div className="list-card-klinik" key={c.code} onClick={() => nav('/registrasi/poli')}>
          <div className="avatar">{c.code}</div>
          
          <div className="body">
            <b>{c.name}</b>
            <div className="sub-row">
              <small>{c.sub}</small>
              <span className={`est text-${c.color}`}>{c.est}</span>
            </div>
          </div>
          
          <div className="right-col">
            <Badge tone="success">{c.label}</Badge>
            <span className="link-pilih">Pilih →</span>
          </div>
        </div>
      ))}
      
      <BottomNav active="Beranda" />
    </PhoneFrame>
  );
}