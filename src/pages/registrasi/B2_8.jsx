import PhoneFrame from '../../components/PhoneFrame';
import Button from '../../components/Button';
import './B2_booking.css';
import { useNavigate } from 'react-router-dom';

export default function B2_8() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B2.8 Booking Berhasil.">
      <div className="success-header teal">
        <div className="check white">✓</div>
        <h3>Booking berhasil</h3>
      </div>
      <div className="ticket">
        <small>KODE BOOKING</small>
        <div className="big-num small">GMC-2411-07</div>
        <div className="row"><span>Poli / Dokter</span><b>Poli Umum · dr. Rina Kusuma</b></div>
        <div className="row"><span>Jadwal</span><b>Selasa, 24 Nov · 09.30</b></div>
        <div className="row"><span>Status</span><b>Terjadwal</b></div>
      </div>
      <div className="notice">
        Nomor antrean diberikan pada hari kunjungan. Kamu akan menerima notifikasi pengingat.
      </div>
      <div className="bottom-cta">
        <Button variant="orange" onClick={() => nav('/estimasi/antrean-saya')}>Lihat Antrean Saya</Button>
        <Button variant="outline-danger" onClick={() => nav('/registrasi/batal')}>Batalkan Booking</Button>
      </div>
    </PhoneFrame>
  );
}