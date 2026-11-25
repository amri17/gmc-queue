import PhoneFrame from '../../components/PhoneFrame';
import ProgressRing from '../../components/ProgressRing';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import './B3_common.css';

export default function B3_4() {
  return (
    <PhoneFrame caption="B3.4 Estimasi Berubah.">
      <div className="app-header">
        <div className="logo-sm">GMC</div>
        <div><b>GMC Queue</b><br/><small>Your Time, Your Queue</small></div>
        <Badge tone="live">Live</Badge>
      </div>

      <div className="alert-amber">⚠ Estimasi bertambah 8 menit. Pasien di depanku membutuhkan waktu lebih lama.</div>

      <div className="ring-card">
        <Badge tone="sedang">Menunggu</Badge>
        <small>Poli Umum · dr. Rina Kusuma</small>
        <ProgressRing percent={45} label="U-48" sublabel="Nomor antrean" />
        <p className="center-sub">Perkiraan dipanggil <b>10.19</b></p>
      </div>

      <div className="stat-mini">
        <div><span>Dilayani</span><b>U-43</b></div>
        <div><span>Di depanku</span><b>4</b></div>
        <div><span>Estimasi</span><b className="orange">~38 mnt</b></div>
      </div>

      <div className="card-info">
        <b>Riwayat pembaruan estimasi</b>
        <div className="info-row"><span>09.41</span><b>30 menit</b></div>
        <div className="info-row"><span>09.47</span><b>30 menit</b></div>
        <div className="info-row"><span>09.53</span><b className="orange">38 menit ⚠</b></div>
      </div>

      <div className="bottom-cta">
        <Button variant="secondary">Ingatkan saya bila estimasi &gt; 45 menit</Button>
      </div>
    </PhoneFrame>
  );
}