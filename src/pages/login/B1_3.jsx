import { Link } from 'react-router-dom';
import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';
import './B1_3.css';   // ← diubah dari './B1_2.css'

export default function B1_3() {
  return (
    <PhoneFrame caption="B1.3 Masuk — Gagal.">
      <TopBar title="Masuk" />
      <h2 className="page-title">Selamat datang kembali</h2>
      <div className="alert-error">Email/NIM atau kata sandi salah. Sisa percobaan: 2 kali.</div>

      <div className="input-group">
        <label>Email UGM atau NIM</label>
        <div className="input-wrap error"><input className="input" defaultValue="22/497291/TK/54495" /></div>
      </div>
      <div className="input-group">
        <label>Kata sandi</label>
        <div className="input-wrap error">
          <input className="input" type="password" defaultValue="••••••••" />
          <span className="link-inline">Lihat</span>
        </div>
        <small style={{ color: 'var(--red-500)', fontSize: 10, marginTop: 4 }}>Periksa kembali kata sandi.</small>
      </div>
      <a className="link-right" href="#!">Lupa kata sandi?</a>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Button>Masuk</Button>
        <p className="foot">Belum punya akun? <Link to="/daftar"><b>Daftar</b></Link></p>
      </div>
    </PhoneFrame>
  );
}