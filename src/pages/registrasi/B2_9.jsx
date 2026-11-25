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
      <div className="sheet-bg">
        <div className="sheet">
          <div className="sheet-handle" />
          <h3>Batalkan booking ini?</h3>
          <p className="muted">Pembatalan gratis. Slot 09.30 akan otomatis dialihkan ke pasien berikutnya.</p>
          <div className="bottom-cta">
            <Button variant="outline-danger" onClick={() => nav('/registrasi/berhasil')}>Ya, Batalkan Booking</Button>
            <Button variant="secondary" onClick={() => nav(-1)}>Tidak, Pertahankan</Button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}