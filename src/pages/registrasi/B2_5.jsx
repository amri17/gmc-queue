import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';
import './B2_common.css';
import { useNavigate } from 'react-router-dom';

export default function B2_5() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B2.5 Langkah 4 — Konfirmasi.">
      <TopBar 
        title="Konfirmasi" 
        step="Langkah 4 dari 4" 
        stepNumber={4} 
        totalSteps={4} 
        subtitle="Poli Umum · dr. Rina Kusuma" 
      />
      
      {/* Ringkasan Klinik */}
      <div className="summary-card">
        <div className="row"><span>Klinik</span><b>GMC UGM — Bulaksumur</b></div>
        <div className="row"><span>Poli</span><b>Poli Umum</b></div>
        <div className="row"><span>Dokter</span><b>dr. Rina Kusuma</b></div>
        <div className="row"><span>Jadwal</span><b>Senin, 23 Nov · Hari ini</b></div>
      </div>
      
      {/* 3 CARD LANGSUNG TANPA PEMBUNGKUS BESAR */}
      <div style={{ 
        display: 'flex', 
        gap: '8px', /* Jarak antar card */
        marginBottom: '16px' 
      }}>
        
        {/* Card 1: Di depanku */}
        <div style={{
          flex: 1,
          backgroundColor: 'var(--teal-50)',
          border: '1px solid var(--teal-100)',
          borderRadius: '12px',
          padding: '12px 8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '10.5px', color: 'var(--gray-500)', marginBottom: '4px', textAlign: 'center' }}>
            Di depanku
          </span>
          <b style={{ fontSize: '18px', color: 'var(--teal-800)' }}>5</b>
        </div>

        {/* Card 2: Estimasi */}
        <div style={{
          flex: 1,
          backgroundColor: 'var(--orange-100)',
          border: '1px solid var(--orange-500)',
          borderRadius: '12px',
          padding: '12px 8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '10.5px', color: 'var(--orange-600)', marginBottom: '4px', textAlign: 'center' }}>
            Estimasi
          </span>
          <b style={{ fontSize: '18px', color: 'var(--orange-600)' }}>~30 mnt</b>
        </div>

        {/* Card 3: Perkiraan dipanggil */}
        <div style={{
          flex: 1,
          backgroundColor: 'var(--teal-50)',
          border: '1px solid var(--teal-100)',
          borderRadius: '12px',
          padding: '12px 8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '10.5px', color: 'var(--gray-500)', marginBottom: '4px', textAlign: 'center' }}>
            Dipanggil
          </span>
          <b style={{ fontSize: '18px', color: 'var(--teal-800)' }}>10.11</b>
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