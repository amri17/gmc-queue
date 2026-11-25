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
      <div className="list-card">
        <div className="body">
          <b>Poli Umum · dr. Rina Kusuma</b>
          <div className="row-badges"><Badge tone="sedang">Menunggu</Badge><span className="est">~30 menit lagi</span></div>
          <small>Kamu tidak perlu mengambil nomor baru.</small>
        </div>
      </div>
      <div className="bottom-cta">
        <Button variant="orange" onClick={() => nav('/estimasi/antrean-saya')}>Lihat Antrean Saya</Button>
        <Button variant="outline-danger" onClick={() => nav('/registrasi/batal')}>Batalkan Antrean Ini</Button>
      </div>
    </PhoneFrame>
  );
}