import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import './B2_common.css';
import { useNavigate } from 'react-router-dom';

export default function B2_4a() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B2.4a Langkah 3 — Jadwal Hari Ini.">
      <TopBar title="Pilih Jadwal" step="Langkah 3 dari 4" />
      <div className="tab-row">
        <span className="tab active">Antrean hari ini</span>
        <span className="tab">Booking jadwal</span>
      </div>
      <p className="muted">Poli Umum · dr. Rina Kusuma</p>
      <div className="info-card">
        <div><b>Senin, 23 Nov 2026</b> <Badge tone="ringan">Hari ini</Badge></div>
        <small>Praktik dokter 07:30–15:00 · Kuota tersisa: 11</small>
        <div className="stat-row">
          <div><span>Antrean berjalan</span><b>U-42</b></div>
          <div><span>Nomor terakhir</span><b>U-47</b></div>
        </div>
      </div>
      <div className="notice">
        Perkiraan tunggu sekitar <b>30 menit</b> (5 antrean di depannya).
      </div>
      <div className="bottom-cta">
        <Button variant="orange" onClick={() => nav('/registrasi/konfirmasi')}>Lanjut → Konfirmasi</Button>
      </div>
    </PhoneFrame>
  );
}