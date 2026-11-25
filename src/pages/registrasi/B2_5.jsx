import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';
import './B2_common.css';
import { useNavigate } from 'react-router-dom';

export default function B2_5() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B2.5 Langkah 4 — Konfirmasi.">
      <TopBar title="Konfirmasi" step="Langkah 4 dari 4" />
      <div className="summary-card">
        <div className="row"><span>Klinik</span><b>GMC UGM — Bulaksumur</b></div>
        <div className="row"><span>Poli</span><b>Poli Umum</b></div>
        <div className="row"><span>Dokter</span><b>dr. Rina Kusuma</b></div>
        <div className="row"><span>Jadwal</span><b>Senin, 23 Nov · Hari ini</b></div>
      </div>
      <div className="estimate-box">
        <small>Estimasi tunggu</small>
        <div className="est-row">
          <div><span>Di depanku</span><b>5</b></div>
          <div><span>Di depanku lagi</span><b>~30 mnt</b></div>
        </div>
      </div>
      <div className="notice">
        Kamu akan mendapat notifikasi jika estimasi berubah lebih dari 10 menit.
      </div>
      <div className="bottom-cta">
        <Button variant="orange" onClick={() => nav('/registrasi/nomor')}>Ambil Nomor Antrean</Button>
        <Button variant="secondary" onClick={() => nav('/registrasi/klinik')}>Ubah Pilihan</Button>
      </div>
    </PhoneFrame>
  );
}