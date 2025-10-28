## EmergencyCall – Mental Health Platform

### Arsitektur & Alasan Framework/Library
Aplikasi dibangun dengan **React + TypeScript** untuk kemudahan pengembangan, keamanan tipe data, dan reusability komponen. **Vite** dipilih karena proses development yang sangat cepat. **Tailwind CSS** digunakan agar styling konsisten dan mudah diatur.

**Struktur utama:**
- App.tsx (state container & router sederhana)
- MoodForm & MoodScale (input mood)
- RecommendationCard, AISuggestions, ComingSoon (output & navigasi)
- Notification (feedback/toast)

### Logika State Management & Interaksi
State dikelola dengan React Hooks (`useState`) tanpa library eksternal, cukup untuk aplikasi skala kecil-menengah. State utama:
- `currentMood` (angka 1-5)
- `showNotification`, `showRecommendation`, `showSuggestions`, `showComingSoon` (navigasi)

**Alur interaksi:**
1. User memilih mood (radio button)
2. Emoji & label mood muncul di samping
3. Tombol Continue aktif setelah memilih mood
4. Setelah submit, muncul notifikasi & navigasi ke rekomendasi/AI/coming soon

Komunikasi antar elemen via props & children, sehingga komponen tetap reusable dan mudah di-maintain.

### Desain untuk User Comfort & Mental Wellness
- **Warna utama biru lembut (#4D90FE), putih, abu-abu:** Memberikan efek menenangkan, menghindari warna agresif.
- **Aksesibilitas:** ARIA label, keyboard navigation, support reduced motion.
- **Interaksi lembut:** Transisi halus, animasi tidak berlebihan, layout responsif.
- **Validasi emosi:** Pesan positif, emoji besar, dan saran yang empatik.
- **Visual hierarchy:** Spasi lega, tombol besar, teks mudah dibaca.

Desain ini meminimalisir trigger kecemasan, memudahkan fokus, dan memberikan pengalaman yang ramah untuk semua pengguna.