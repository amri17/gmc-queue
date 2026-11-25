import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import './B1_4.css';

export default function B1_4() {
  const nav = useNavigate();
  const [status, setStatus] = useState('Mahasiswa');
  return (
    <PhoneFrame caption="B1.4 Daftar Akun — Status pengguna (Mahasiswa/Dosen/Alumni).">
      <TopBar title="Buat Akun" />
      <div style={{ overflowY: 'auto', paddingBottom: 8 }}>
        <InputField label="Nama lengkap" defaultValue="Syahril Syarif Amri" />
        <InputField label="NIM / NIP" defaultValue="22/497291/TK/54495" />
        <InputField label="Email" defaultValue="syahril@mail.ugm.ac.id" />
        <InputField label="Nomor HP" defaultValue="0812 3456 7890" />
        <InputField label="Kata sandi" type="password" defaultValue="••••••••" showToggle />

        <div className="pass-strength">
          <div className="bar"><div style={{ width: '60%' }} /></div>
          <small>Kuat • minimal 8 karakter</small>
        </div>

        <label className="chips-label">Status</label>
        <div className="chip-group">
          {['Mahasiswa', 'Dosen / Tendik', 'Alumni'].map(s => (
            <span key={s} className={`chip ${status === s ? 'active' : ''}`} onClick={() => setStatus(s)}>{s}</span>
          ))}
        </div>

        <label className="check">
          <input type="checkbox" defaultChecked /> Saya setuju dengan syarat dan kebijakan privasi GMC.
        </label>
      </div>

      <div style={{ marginTop: 'auto' }}>
        <Button onClick={() => nav('/verifikasi')}>Daftar</Button>
      </div>
    </PhoneFrame>
  );
}