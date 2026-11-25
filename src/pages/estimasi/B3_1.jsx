import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Badge from '../../components/Badge';
import BottomNav from '../../components/BottomNav';
import './B3_1.css';

const poli = [
  { name: 'Poli Gigi', code: 'G-11', est: '~12', label: 'Singkat', tone: 'ringan', width: '30%' },
  { name: 'Poli Umum', code: 'U-42', est: '~30', label: 'Sedang', tone: 'sedang', width: '60%' },
  { name: 'Medical Check Up', code: 'M-7', est: '~18', label: 'Sedang', tone: 'sedang', width: '40%' },
  { name: 'Poli Psikologi', code: 'P-3', est: '~50', label: 'Lama', tone: 'lama', width: '90%' },
];

export default function B3_1() {
  return (
    <PhoneFrame caption="B3.1 Estimasi Semua Poli.">
      <TopBar title="Estimasi Waktu Tunggu" />
      <div className="filter-row">
        <span className="filter active">≤ 15 mnt</span>
        <span className="filter">16–30 mnt</span>
        <span className="filter">≥ 30 mnt</span>
      </div>
      {poli.map(p => (
        <div className="est-card" key={p.code}>
          <div className="est-top">
            <b>{p.name}</b>
            <Badge tone={p.tone}>{p.label}</Badge>
          </div>
          <small>Dilayani {p.code} · antrean berjalan</small>
          <div className="est-bottom">
            <div className="bar"><div style={{ width: p.width }} /></div>
            <span className="est-num">{p.est}<small> mnt</small></span>
          </div>
        </div>
      ))}
      <p className="updated">Diperbarui otomatis · 10 detik lalu</p>
      <BottomNav active="Antrean Saya" />
    </PhoneFrame>
  );
}