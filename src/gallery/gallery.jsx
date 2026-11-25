import B1_1 from '../pages/login/B1_1';
import B1_2 from '../pages/login/B1_2';
import B1_3 from '../pages/login/B1_3';
import B1_4 from '../pages/login/B1_4';
import B1_5 from '../pages/login/B1_5';
import B1_6 from '../pages/login/B1_6';

import B2_1 from '../pages/registrasi/B2_1';
import B2_2 from '../pages/registrasi/B2_2';
import B2_3 from '../pages/registrasi/B2_3';
import B2_4a from '../pages/registrasi/B2_4a';
import B2_4b from '../pages/registrasi/B2_4b';
import B2_5 from '../pages/registrasi/B2_5';
import B2_6 from '../pages/registrasi/B2_6';
import B2_7 from '../pages/registrasi/B2_7';
import B2_8 from '../pages/registrasi/B2_8';
import B2_9 from '../pages/registrasi/B2_9';

import B3_1 from '../pages/estimasi/B3_1';
import B3_2 from '../pages/estimasi/B3_2';
import B3_3 from '../pages/estimasi/B3_3';
import B3_4 from '../pages/estimasi/B3_4';
import B3_5 from '../pages/estimasi/B3_5';

export default function Gallery() {
  return (
    <div className="gallery">
      <h1 style={{ width: '100%', textAlign: 'center', color: 'var(--teal-900)', padding: '24px 0' }}>
        GMC Queue — Desain B (21 Layar)
      </h1>

      <h2 className="gallery-section-title">Fitur 1 — Login (B1.1 – B1.6)</h2>
      <B1_1 /><B1_2 /><B1_3 /><B1_4 /><B1_5 /><B1_6 />

      <h2 className="gallery-section-title">Fitur 2 — Registrasi Antrean (B2.1 – B2.9)</h2>
      <B2_1 /><B2_2 /><B2_3 /><B2_4a /><B2_4b />
      <B2_5 /><B2_6 /><B2_7 /><B2_8 /><B2_9 />

      <h2 className="gallery-section-title">Fitur 3 — Estimasi Waktu Tunggu (B3.1 – B3.5)</h2>
      <B3_1 /><B3_2 /><B3_3 /><B3_4 /><B3_5 />
    </div>
  );
}