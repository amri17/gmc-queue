import { Link, useNavigate } from 'react-router-dom';
import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import './B1_2.css';

export default function B1_2() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B1.2 Masuk — Kolom aktif diberi ring teal.">
      <TopBar title="Masuk" />
      <h2 className="page-title">Selamat datang kembali</h2>
      <p className="page-sub">Masuk untuk melihat dan mengambil antrean.</p>

      <InputField label="Email UGM atau NIM" placeholder="22/497291/TK/54495" />
      <InputField label="Kata sandi" type="password" placeholder="••••••••" showToggle />

      <a className="link-right" href="#!">Lupa kata sandi?</a>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Button onClick={() => nav('/verifikasi')}>Masuk</Button>
        <p className="divider"><span>atau</span></p>
        <Button variant="secondary">Masuk dengan SSO UGM</Button>
        <p className="foot">Belum punya akun? <Link to="/daftar"><b>Daftar</b></Link></p>
      </div>
    </PhoneFrame>
  );
}