import PhoneFrame from '../../components/PhoneFrame';
import BottomNav from '../../components/BottomNav';

const poliData = [
  { 
    id: 1, 
    name: 'Poli Umum', 
    doctor: 'dr. Anita Suprabo', 
    time: '07.30 - 15.00', 
    status: 'Sedang dilayani', 
    currentNumber: 'U-11', 
    waiting: 1, 
    total: 12, 
    color: 'var(--green-500)', 
    btnColor: 'var(--orange-500)' 
  },
  { 
    id: 2, 
    name: 'Poli Gigi', 
    doctor: 'dr. Anita Suprabo', 
    time: '07.30 - 15.00', 
    status: 'Sedang dilayani', 
    currentNumber: 'G-8', 
    waiting: 3, 
    total: 11, 
    color: '#EAB308', 
    btnColor: 'var(--orange-500)' 
  },
  { 
    id: 3, 
    name: 'Poli Psikologi', 
    doctor: 'Psikolog Dewi Sari', 
    time: '07.30 - 15.00', 
    status: 'Sedang dilayani', 
    currentNumber: 'P-4', 
    waiting: 5, 
    total: 9, 
    color: 'var(--red-500)', 
    btnColor: 'var(--red-500)' 
  },
];

export default function Multipoli() {
  return (
    <PhoneFrame caption="Multipoli — Monitoring Antrean">
      
      {/* HEADER HIJAU */}
      <div style={{
        backgroundColor: 'var(--teal-800)',
        borderRadius: '20px',
        padding: '20px',
        color: '#fff',
        marginTop: '10px',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <small style={{ fontSize: '12px', opacity: 0.9 }}>Halo, Syahrial 👋</small>
            <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '4px 0' }}>Mau berobat? Cek antreannya dulu</h3>
            <p style={{ fontSize: '11px', opacity: 0.8, margin: 0 }}>Diperbarui otomatis</p>
          </div>
          <div style={{ textAlign: 'right', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <h1 style={{ fontSize: '32px', margin: 0, fontWeight: '800' }}>3</h1>
            <span style={{ fontSize: '12px' }}>poli</span>
          </div>
        </div>
      </div>

      {/* FILTER ROW */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '16px' }}>
        <span style={{ padding: '8px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: '600', backgroundColor: 'var(--teal-700)', color: '#fff', whiteSpace: 'nowrap' }}>Semua poli</span>
        <span style={{ padding: '8px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: '600', backgroundColor: '#fff', color: 'var(--teal-700)', border: '1px solid var(--gray-200)', whiteSpace: 'nowrap' }}>Sedang Buka</span>
        <span style={{ padding: '8px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: '600', backgroundColor: '#fff', color: 'var(--teal-700)', border: '1px solid var(--gray-200)', whiteSpace: 'nowrap' }}>Tunggu ≤ 15 menit</span>
      </div>

      {/* JUDUL */}
      <h4 style={{ fontSize: '16px', margin: '0 0 12px 0', color: 'var(--gray-900)', fontWeight: '700' }}>Poli tersedia</h4>

      {/* LIST CARD */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '20px' }}>
        {poliData.map((poli) => (
          <div key={poli.id} style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid var(--gray-200)' }}>
            
            {/* Card Header */}
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '12px' }}>
              <b style={{ fontSize: '16px', color: 'var(--gray-900)' }}>{poli.name}</b>
              <span style={{ fontSize: '13px', color: 'var(--gray-700)', marginTop: '2px' }}>{poli.doctor} &bull; {poli.time}</span>
            </div>
            
            {/* Card Body (Angka & Progress) */}
            <div style={{ marginBottom: '16px' }}>
              <small style={{ fontSize: '11px', color: 'var(--teal-700)', fontWeight: '600', display: 'block', marginBottom: '4px' }}>{poli.status}</small>
              <h2 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--gray-900)', margin: '0 0 10px 0', lineHeight: '1.1' }}>{poli.currentNumber}</h2>
              
              <div style={{ height: '8px', backgroundColor: 'var(--gray-200)', borderRadius: '999px', overflow: 'hidden', width: '100%' }}>
                <div style={{ height: '100%', borderRadius: '999px', width: `${(poli.waiting / poli.total) * 100}%`, backgroundColor: poli.color }}></div>
              </div>
            </div>

            {/* Card Footer (Info & Tombol) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: 'var(--gray-500)' }}>
                <span style={{ color: 'var(--teal-700)', fontWeight: 'bold' }}>{poli.waiting} menunggu</span> &bull; total {poli.total}
              </span>
              <button style={{ padding: '10px 16px', borderRadius: '999px', color: '#fff', fontWeight: '700', fontSize: '12px', border: 'none', cursor: 'pointer', backgroundColor: poli.btnColor }}>
                Ambil Antrean
              </button>
            </div>

          </div>
        ))}
      </div>

      <BottomNav active="Multipoli" />
    </PhoneFrame>
  );
}