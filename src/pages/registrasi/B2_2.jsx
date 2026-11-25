import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Badge from '../../components/Badge';
import Button from '../../components/Button';
import './B2_common.css';
import { useNavigate } from 'react-router-dom';

const poli = [
  { code: 'G', name: 'Poli Gigi', sub: 'Sedang buka', est: '~12 mnt', tone: 'ringan', label: 'Singkat' },
  { code: 'U', name: 'Poli Umum', sub: 'Sedang buka', est: '~30 mnt', tone: 'sedang', label: 'Sedang' },
  { code: 'P', name: 'Poli Psikologi', sub: 'Sedang buka', est: '~50 mnt', tone: 'lama', label: 'Lama' },
  { code: 'M', name: 'Medical Check Up', sub: 'Sedang buka', est: '~18 mnt', tone: 'sedang', label: 'Sedang' },
  { code: 'Z', name: 'Konseling Gizi', sub: 'Tidak buka hari ini', est: '—', tone: 'muted', label: 'Tutup', disabled: true },
];

export default function B2_2() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B2.2 Langkah 1 — Pilih Poli.">
      <TopBar 
        title="Pilih Poli" 
        step="Langkah 1 dari 4" 
        stepNumber={1} 
        totalSteps={4} 
        subtitle="GMC UGM — Bulaksumur" 
      />
      <div className="list-container">
        {poli.map(p => (
          <div key={p.code} className={`list-card ${p.disabled ? 'disabled' : ''}`} onClick={() => !p.disabled && nav('/registrasi/dokter')}>
            <div className="avatar">{p.code}</div>
            <div className="body">
              <b>{p.name}</b>
              <small className={p.disabled ? '' : 'text-green'}>{p.sub}</small>
            </div>
            <div className="right-col">
              <span className={`est ${p.disabled ? 'disabled-text' : `text-${p.tone}`}`}>{p.est}</span>
              <Badge tone={p.tone}>{p.label}</Badge>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-cta">
        <Button variant="orange" onClick={() => nav('/registrasi/dokter')}>Lanjut → Pilih Dokter</Button>
      </div>
    </PhoneFrame>
  );
}