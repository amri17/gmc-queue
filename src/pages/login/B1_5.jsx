import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';
import './B1_5.css';

export default function B1_5() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B1.5 Verifikasi — Kode 6 digit, auto-hitung mundur 0:42.">
      <TopBar title="Verifikasi" />
      <div className="verif-icon">✉️</div>
      <h2 className="verif-title">Cek emailmu</h2>
      <p className="verif-sub">Kami mengirim kode 6 digit ke<br/>syahril@mail.ugm.ac.id</p>

      <div className="otp-row">
        {['4','8','2','1','',''].map((n, i) => (
          <span key={i} className={`otp ${n ? 'filled' : ''}`}>{n}</span>
        ))}
      </div>
      <p className="verif-timer">Kirim ulang kode dalam <b>0:42</b></p>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Button onClick={() => nav('/akun-siap')}>Verifikasi</Button>
        <span className="link-center" onClick={() => nav('/akun-siap')}>Ganti email</span>
      </div>
    </PhoneFrame>
  );
}