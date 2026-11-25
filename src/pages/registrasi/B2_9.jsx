import PhoneFrame from '../../components/PhoneFrame';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';
import './B2_common.css';
import { useNavigate } from 'react-router-dom';

export default function B2_9() {
  const nav = useNavigate();
  return (
    <PhoneFrame caption="B2.9 Batalkan Booking — Bottom Sheet.">
      <TopBar title="Antrean Saya" />
      
      {/* Latar belakang konten yang gelap/blur */}
      <div className="sheet-bg" style={{ backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '12px', margin: '0 -18px', flex: 1 }}>
        
        {/* Bottom Sheet */}
        <div className="sheet">
          <div className="sheet-handle" />
          <h3>Batalkan booking ini?</h3>
          <p className="muted" style={{ marginTop: '4px', marginBottom: '20px' }}>
            Pembatalan gratis. Slot 09.30 akan otomatis dialihkan ke pasien berikutnya.
          </p>
          
          <div className="bottom-cta">
            {/* Jika Ya: Kembali ke Beranda (Klinik) */}
            <Button variant="outline-danger" onClick={() => nav('/registrasi/klinik')}>Ya, Batalkan Booking</Button>
            
            {/* Jika Tidak: Kembali ke halaman sebelumnya */}
            <Button variant="secondary" onClick={() => nav(-1)}>Tidak, Pertahankan</Button>
          </div>
        </div>
        
      </div>
    </PhoneFrame>
  );
}