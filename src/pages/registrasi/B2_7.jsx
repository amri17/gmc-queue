import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import './B2_common.css';
import { useNavigate } from 'react-router-dom';

export default function B2_7() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B2.7 Ditolak — Sudah Punya Antrean Aktif.">
      <TopBar title="Daftar Antrean" />
      <div className="warn-icon">!</div>
      <h2 className="center-title">Kamu masih punya antrean aktif</h2>
      <p className="center-sub">Selesaikan atau batalkan antrean ini sebelum mengambil yang lain.</p>
      
      <div className="active-card">
        <div className="active-header">
          <b>Poli Umum · dr. Rina Kusuma</b>
          <Badge tone="sedang">Menunggu</Badge>
        </div>
        <div className="active-body">
          <span>U-48</span>
          <b>~30 menit lagi</b>
        </div>
        <p>Kamu tidak perlu mengambil nomor baru.</p>
      </div>

      <div className="bottom-cta">
        <Button variant="orange" onClick={() => nav('/estimasi/antrean-saya')}>Lihat Antrean Saya</Button>
        <Button variant="outline-danger" onClick={() => nav('/registrasi/batal')}>Batalkan Antrean Ini</Button>
      </div>
    </PhoneFrame>
  );
}