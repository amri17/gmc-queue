import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../../components/PhoneFrame';
import Button from '../../components/Button';
import './B1_1.css';

export default function B1_1() {
  const nav = useNavigate();
  return (
    <PhoneFrame dark caption="B1.1 Selamat Datang — Hanya dua jalan: Masuk atau Daftar.">
      <div className="splash">
        <div className="splash-decor1" />
        <div className="splash-decor2" />
        <div className="logo-circle">GMC</div>
        <h1>GMC Queue</h1>
        <p>Pantau antrean, tahu estimasi,<br/>dan atur waktumu sendiri.</p>
        <div className="chips">
          <span>Real-time</span><span>Estimasi tunggu</span><span>Notifikasi</span>
        </div>
      </div>
      <div className="splash-cta">
        <p className="eyebrow">LAYANAN KESEHATAN CIVITAS UGM</p>
        <h2>Tidak perlu lagi menunggu berjam-jam di ruang tunggu.</h2>
        <div className="splash-buttons">
          <Button onClick={() => nav('/masuk')}>Masuk</Button>
          <Button variant="secondary" onClick={() => nav('/daftar')}>Daftar Akun Baru</Button>
        </div>
        <small>Akun diperlukan untuk mengambil nomor antrean.</small>
      </div>
    </PhoneFrame>
  );
}