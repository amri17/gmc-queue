import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';
import './B2_common.css';
import { useNavigate } from 'react-router-dom';

export default function B2_4b() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B2.4b Langkah 3 — Jadwal Booking.">
      <TopBar title="Pilih Jadwal" step="Langkah 3 dari 4" />
      <div className="tab-row">
        <span className="tab">Antrean hari ini</span>
        <span className="tab active">Booking jadwal</span>
      </div>
      <p className="muted">Poli Umum · dr. Rina Kusuma</p>
      <div className="info-card">
        <small>Tanggal (maks. 2 hari ke depan)</small>
        <div className="date-row">
          <span className="date-chip">Sen 23</span>
          <span className="date-chip active">Sel 24 Nov</span>
          <span className="date-chip">Rab 25</span>
          <span className="date-chip">Kam 26</span>
        </div>
        <div className="session-list">
          <span className="session">08:00</span>
          <span className="session">08:30</span>
          <span className="session">09:00</span>
          <span className="session active">09:30</span>
          <span className="session">10:00</span>
        </div>
      </div>
      <div className="notice amber">
        Booking akan dibatalkan jika pasien tiba lebih dari <b>30 menit</b>.
      </div>
      <div className="bottom-cta">
        <Button variant="orange" onClick={() => nav('/registrasi/konfirmasi')}>Lanjut → Konfirmasi</Button>
      </div>
    </PhoneFrame>
  );
}