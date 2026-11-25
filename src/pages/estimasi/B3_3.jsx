import PhoneFrame from '../../components/PhoneFrame';
import BottomNav from '../../components/BottomNav';
import ProgressRing from '../../components/ProgressRing';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import './B3_common.css';
import { useNavigate } from 'react-router-dom';

export default function B3_3() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B3.3 Antrean Saya — Estimasi Realtime.">
      <div className="app-header">
        <div className="logo-sm">GMC</div>
        <div><b>GMC Queue</b><br/><small>Your Time, Your Queue</small></div>
        <Badge tone="live">Live</Badge>
      </div>

      <div className="ring-card">
        <Badge tone="sedang">Menunggu</Badge>
        <small>Poli Umum · dr. Rina Kusuma</small>
        <ProgressRing percent={65} label="U-48" sublabel="Nomor antrean" />
        <p className="center-sub">Perkiraan dipanggil <b>10.11</b></p>
      </div>

      <div className="stat-mini">
        <div><span>Dilayani</span><b>U-42</b></div>
        <div><span>Di depanku</span><b>5</b></div>
        <div><span>Estimasi</span><b className="orange">~30 mnt</b></div>
      </div>

      <div className="notif-row">
        <div><b>Notifikasi push</b><br/><small>Aktif</small></div>
        <div className="toggle-on" />
      </div>

      <div className="bottom-cta">
        <Button variant="secondary" onClick={() => nav('/estimasi/poli-umum')}>Detail Estimasi</Button>
        <Button variant="outline-danger" onClick={() => nav('/registrasi/batal')}>Batalkan</Button>
      </div>
      <BottomNav active="Antrean Saya" />
    </PhoneFrame>
  );
}