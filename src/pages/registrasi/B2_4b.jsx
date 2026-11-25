import { useState } from 'react';
import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';
import './B2_common.css';
import { useNavigate } from 'react-router-dom';

// Data tanggal dipisah menjadi hari dan tanggal agar tampilannya rapi
const daftarTanggal = [
  { id: 'sen', hari: 'Sen', tgl: '23' },
  { id: 'sel', hari: 'Sel', tgl: '24' },
  { id: 'rab', hari: 'Rab', tgl: '25' },
  { id: 'kam', hari: 'Kam', tgl: '26' },
];

const daftarJam = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];

export default function B2_4b() {
  const nav = useNavigate();
  
  // State untuk menyimpan tanggal dan jam yang dipilih
  const [selectedDate, setSelectedDate] = useState('sel');
  const [selectedTime, setSelectedTime] = useState('09:30');

  return (
    <PhoneFrame caption="B2.4b Langkah 3 — Jadwal Booking.">
      <TopBar 
        title="Pilih Jadwal" 
        step="Langkah 3 dari 4" 
        stepNumber={3} 
        totalSteps={4} 
        subtitle="Poli Umum · dr. Rina Kusuma" 
      />
      
      {/* Tab Menu */}
      <div className="tab-row">
        <span className="tab" onClick={() => nav('/registrasi/jadwal')}>Antrean hari ini</span>
        <span className="tab active">Booking jadwal</span>
      </div>
      
      <div className="info-card">
        <span className="info-label">Tanggal (maks. 2 hari ke depan)</span>
        
        {/* 4 Card Tanggal Sejajar */}
        <div className="date-row">
          {daftarTanggal.map((item) => (
            <div 
              key={item.id}
              className={`date-chip ${selectedDate === item.id ? 'active' : ''}`}
              onClick={() => setSelectedDate(item.id)}
            >
              <span style={{ display: 'block', fontSize: '10px', marginBottom: '2px' }}>{item.hari}</span>
              <span style={{ display: 'block', fontSize: '12px', fontWeight: 'bold' }}>{item.tgl} Nov</span>
            </div>
          ))}
        </div>

        {/* Jam Praktik */}
        <span className="info-label" style={{ marginTop: '16px' }}>Jam praktik dr. Rina Kusuma</span>
        <div className="session-list">
          {daftarJam.map((jam) => (
            <div 
              key={jam}
              className={`session ${selectedTime === jam ? 'active' : ''}`}
              onClick={() => setSelectedTime(jam)}
            >
              {jam}
            </div>
          ))}
        </div>
      </div>
      
      <div className="notice amber">
        Booking akan dibatalkan jika pasien tiba lebih dari <b>30 menit</b> dari slot yang dipilih.
      </div>
      
      <div className="bottom-cta">
        <Button variant="orange" onClick={() => nav('/registrasi/konfirmasi')}>Lanjut → Konfirmasi</Button>
      </div>
    </PhoneFrame>
  );
}