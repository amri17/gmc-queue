import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import './B3_common.css';
import { useNavigate } from 'react-router-dom'; // 1. Tambahkan import useNavigate

export default function B3_2() {
  const nav = useNavigate(); // 2. Inisialisasi useNavigate

  return (
    <PhoneFrame caption="B3.2 Detail Estimasi — Poli Umum.">
      <TopBar title="Poli Umum" />
      <div className="detail-hero">
        <Badge tone="sedang">Sedang</Badge>
        <small>Perkiraan waktu tunggu</small>
        <h1>~30 <span>menit</span></h1>
        <p>Kisaran 25–35 menit · dipanggil sekitar 10.11</p>
      </div>

      <div className="card-info">
        <b>Cara menghitung</b>
        <div className="info-row"><span>Antrean di depanku</span><b>5 orang</b></div>
        <div className="info-row"><span>Rata-rata layanan / pasien</span><b>6 menit</b></div>
        <div className="info-row"><span>Estimasi</span><b className="orange">5 × 6 = 30 menit</b></div>
      </div>

      <div className="card-info">
        <b>Rata-rata tunggu per jam hari ini</b>
        <div className="chart">
          {[40, 60, 100, 55, 45, 30, 25].map((h, i) => (
            <div key={i} className="bar-col">
              <div className="bar" style={{ height: `${h}%`, background: i === 2 ? 'var(--orange-500)' : i === 6 ? 'var(--green-500)' : 'var(--gray-200)' }} />
              <small>{['07.00','08.00','09.00','10.00','11.00','12.00','13.00'][i]}</small>
            </div>
          ))}
        </div>
        <small className="hint">Biasanya paling sepi sekitar pukul 13.00.</small>
      </div>

      <div className="bottom-cta">
        {/* 3. Tambahkan onClick untuk pindah ke halaman B3.3 (Antrean Saya) */}
        <Button variant="orange" onClick={() => nav('/estimasi/antrean-saya')}>
          Ambil Nomor Antrean
        </Button>
      </div>
    </PhoneFrame>
  );
}