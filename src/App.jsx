import { Routes, Route, Navigate } from 'react-router-dom';

import B1_1 from './pages/login/B1_1';
import B1_2 from './pages/login/B1_2';
import B1_3 from './pages/login/B1_3';
import B1_4 from './pages/login/B1_4';
import B1_5 from './pages/login/B1_5';
import B1_6 from './pages/login/B1_6';

import B2_1 from './pages/registrasi/B2_1';
import B2_2 from './pages/registrasi/B2_2';
import B2_3 from './pages/registrasi/B2_3';
import B2_4a from './pages/registrasi/B2_4a';
import B2_4b from './pages/registrasi/B2_4b';
import B2_5 from './pages/registrasi/B2_5';
import B2_6 from './pages/registrasi/B2_6';
import B2_7 from './pages/registrasi/B2_7';
import B2_8 from './pages/registrasi/B2_8';
import B2_9 from './pages/registrasi/B2_9';

import B3_1 from './pages/estimasi/B3_1';
import B3_2 from './pages/estimasi/B3_2';
import B3_3 from './pages/estimasi/B3_3';
import B3_4 from './pages/estimasi/B3_4';
import B3_5 from './pages/estimasi/B3_5';

// 1. Tambahkan import Multipoli di sini
import Multipoli from './pages/estimasi/Multipoli';

export default function App() {
  return (
    <Routes>
      {/* Halaman utama langsung ke B1.1 */}
      <Route path="/" element={<B1_1 />} />

      <Route path="/login" element={<B1_1 />} />
      <Route path="/masuk" element={<B1_2 />} />
      <Route path="/masuk-gagal" element={<B1_3 />} />
      <Route path="/daftar" element={<B1_4 />} />
      <Route path="/verifikasi" element={<B1_5 />} />
      <Route path="/akun-siap" element={<B1_6 />} />

      <Route path="/registrasi/klinik" element={<B2_1 />} />
      <Route path="/registrasi/poli" element={<B2_2 />} />
      <Route path="/registrasi/dokter" element={<B2_3 />} />
      <Route path="/registrasi/jadwal" element={<B2_4a />} />
      <Route path="/registrasi/jadwal-booking" element={<B2_4b />} />
      <Route path="/registrasi/konfirmasi" element={<B2_5 />} />
      <Route path="/registrasi/nomor" element={<B2_6 />} />
      <Route path="/registrasi/sudah-aktif" element={<B2_7 />} />
      <Route path="/registrasi/berhasil" element={<B2_8 />} />
      <Route path="/registrasi/batal" element={<B2_9 />} />

      <Route path="/estimasi/semua-poli" element={<B3_1 />} />
      <Route path="/estimasi/poli-umum" element={<B3_2 />} />
      <Route path="/estimasi/antrean-saya" element={<B3_3 />} />
      <Route path="/estimasi/berubah" element={<B3_4 />} />
      <Route path="/estimasi/notifikasi" element={<B3_5 />} />

      {/* 2. Tambahkan rute Multipoli di sini */}
      <Route path="/estimasi/multipoli" element={<Multipoli />} />

      {/* Jika rute tidak ditemukan, kembalikan ke awal */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}