import PhoneFrame from '../../components/PhoneFrame';
import Button from '../../components/Button';
import './B2_booking.css';
import { useNavigate } from 'react-router-dom';

export default function B2_8() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B2.8 Booking Berhasil.">
      {/* Header Hijau Penuh */}
      <div className="success-header teal-full">
        <div className="check">✓</div>
        <h3>Booking berhasil</h3>
      </div>

      {/* Tiket Putih */}
      <div className="ticket-merged">
        <small className="ticket-label">KODE BOOKING</small>
        <div className="big-num small">GMC-2411-07</div>
        
        {/* Detail Grid */}
        <div className="booking-detail-row">
          <span>Poli / Dokter</span>
          <b>Poli Umum · dr. Rina</b>
        </div>
        <div className="booking-detail-row">
          <span>Jadwal</span>
          <b>Selasa, 24 Nov · 09.30</b>
        </div>
        <div className="booking-detail-row">
          <span>Status</span>
          <b className="status-text">Terjadwal</b>
        </div>
        
        <p className="ticket-note" style={{ marginTop: '16px' }}>
          Nomor antrean diberikan pada hari kunjungan. Kamu akan menerima notifikasi pengingat.
        </p>
      </div>

      {/* Tombol Aksi */}
      <div className="bottom-cta">
        <Button variant="orange" onClick={() => nav('/estimasi/antrean-saya')}>Lihat Antrean Saya</Button>
        <Button variant="outline-danger" onClick={() => nav('/registrasi/batal')}>Batalkan Booking</Button>
      </div>
    </PhoneFrame>
  );
}