import PhoneFrame from '../../components/PhoneFrame';
import './B3_common.css';

export default function B3_5() {
  return (
    <PhoneFrame dark caption="B3.5 Notifikasi Push — Konfirmasi + Estimasi.">
      <div className="lock-screen">
        <p className="lock-date">Senin, 23 November</p>
        <h1 className="lock-time">09.41</h1>

        <div className="notif-card dark">
          <div className="notif-logo">GMC</div>
          <div className="notif-body">
            <div className="notif-head"><b>GMC Queue</b><span>sekarang</span></div>
            <b className="notif-title">Nomor U-48 terkonfirmasi</b>
            <p>Poli Umum · estimasi tunggu ~30 menit. Perkiraan dipanggil pukul 10.11.</p>
          </div>
        </div>

        <div className="notif-card dark">
          <div className="notif-logo">GMC</div>
          <div className="notif-body">
            <div className="notif-head"><b>GMC Queue</b><span>kemarin</span></div>
            <b className="notif-title">Booking Selasa 24 Nov dibatalkan</b>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}