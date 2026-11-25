import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../../components/PhoneFrame';
import Button from '../../components/Button';
import './B1_6.css';

export default function B1_6() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B1.6 Akun Siap — Izin notifikasi hanya dipinta di sini.">
      <div className="ready-icon">✓</div>
      <h2 className="verif-title">Akun berhasil dibuat</h2>
      <p className="verif-sub">Satu langkah lagi agar tidak ketinggalan giliran.</p>

      <div className="ready-card">
        <b>Aktifkan notifikasi untuk:</b>
        <ol>
          <li><span className="num">1</span> Konfirmasi nomor & estimasi tunggu</li>
          <li><span className="num">2</span> "2 antrean lagi" sebelum giliranmu</li>
          <li><span className="num">3</span> "Giliran Anda, menuju poli!"</li>
        </ol>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Button variant="orange" onClick={() => nav('/registrasi/klinik')}>Aktifkan Notifikasi</Button>
        <Button variant="secondary" onClick={() => nav('/registrasi/klinik')}>Nanti saja</Button>
      </div>
    </PhoneFrame>
  );
}