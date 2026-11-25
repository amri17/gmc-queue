import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';
import './B2_common.css';
import { useNavigate } from 'react-router-dom';

const dokter = [
  { code: 'RK', name: 'dr. Rina Kusuma', sub: 'Dokter umum · 07:30–15:00', kuota: 'Kuota tersisa: 11', status: 'Praktik', tone: 'success' },
  { code: 'AP', name: 'dr. Andi Pratama (contoh)', sub: 'Dokter umum', kuota: 'Kuota tersisa: 6', status: 'Praktik', tone: 'success' },
  { code: 'SW', name: 'dr. Sari Wulandari (contoh)', sub: 'Praktik: Sen & Kam', kuota: 'Kuota penuh', status: 'Tidak praktik', tone: 'sedang' },
];

export default function B2_3() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B2.3 Langkah 2 — Pilih Dokter.">
      <TopBar title="Pilih Dokter" step="Langkah 2 dari 4" />
      <p className="muted">Poli Umum · GMC UGM — Bulaksumur</p>
      {dokter.map(d => (
        <div key={d.code} className="list-card">
          <div className="avatar">{d.code}</div>
          <div className="body">
            <b>{d.name}</b>
            <small>{d.sub}</small>
            <small className="muted">{d.kuota}</small>
          </div>
          <span className={`pill ${d.tone}`}>{d.status}</span>
        </div>
      ))}
      <div className="bottom-cta">
        <Button variant="orange" onClick={() => nav('/registrasi/jadwal')}>Lanjut → Pilih Jadwal</Button>
      </div>
    </PhoneFrame>
  );
}