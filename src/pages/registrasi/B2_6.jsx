import PhoneFrame from '../../components/PhoneFrame';
import Button from '../../components/Button';
import './B2_booking.css';
import { useNavigate } from 'react-router-dom';

export default function B2_6() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B2.6 Nomor Antrean Didapat.">
      <div className="success-header teal-full">
        <div className="check">✓</div>
        <h3>Nomor berhasil diambil</h3>
        <p>Konfirmasi dikirim ke notifikasi</p>
      </div>
      
      <div className="ticket-merged">
        <small className="ticket-label">POLI UMUM · dr. Rina Kusuma</small>
        <div className="big-num">U-48</div>
        
        <div className="stat-box">
          <div className="stat-item">
            <span>Dilayani</span>
            <b>U-42</b>
          </div>
          <div className="stat-item">
            <span>Di depanku</span>
            <b>5</b>
          </div>
          <div className="stat-item highlight">
            <span>Estimasi</span>
            <b>~30 mnt</b>
          </div>
        </div>
        
        <p className="ticket-note">Kamu akan dipanggil sekitar 30 menit lagi. Kami akan mengirim notifikasi saat 2 antrean lagi.</p>
      </div>
      
      <div className="bottom-cta">
        <Button variant="orange" onClick={() => nav('/estimasi/antrean-saya')}>Lihat Antrean Saya</Button>
        <Button variant="secondary" onClick={() => nav('/registrasi/klinik')}>Kembali ke Beranda</Button>
      </div>
    </PhoneFrame>
  );
}