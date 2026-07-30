# PRD: Website Kado Ulang Tahun untuk Pasangan

## 1. Overview & Objective
Website personal non-komersial yang dibuat sebagai kado ulang tahun digital untuk pasangan. Website ini adalah "kado" itu sendiri — bukan alat promosi atau penjualan — berisi kenangan berdua (galeri, timeline, surat cinta, playlist) yang dibungkus dalam pengalaman interaktif: pengunjung harus melewati countdown dan menyelesaikan puzzle untuk "membuka kado" secara penuh. Dibangun sekali, dipakai untuk momen spesial tertentu, dengan vibe playful dan ceria.

## 2. Konteks Bisnis & Tujuan
- Jenis website: Personal/gift website (single-purpose, bukan bisnis).
- Tujuan utama (urut prioritas):
  1. Menciptakan momen "reveal" yang berkesan saat pasangan membuka website di waktu yang tepat.
  2. Menyampaikan kenangan & perasaan lewat kombinasi visual (foto/video), narasi (timeline, surat), dan audio (playlist).
  3. Memberi elemen interaktif (puzzle) yang membuat proses membuka kado terasa seperti permainan, bukan sekadar scroll pasif.
- Model bisnis: Tidak ada — website non-komersial, single-user (hanya untuk 1 penerima).
- Konteks tambahan: Bukan redesign dari website lama, dibangun dari nol.

## 3. Target Audiens
- Persona utama: Pasangan pembuat website (1 orang spesifik, bukan publik luas). Mengakses dari HP maupun laptop — device tidak bisa diasumsikan tunggal, jadi wajib fully responsive di kedua form factor.
- Persona sekunder: Tidak ada. Website ini tidak dirancang untuk traffic publik/SEO. Kemungkinan diakses lewat link privat (tidak perlu terindeks mesin pencari).

## 4. Success Metrics
Kualitatif (tidak ada target angka/traffic, karena audiens tunggal):
- Pasangan berhasil melewati countdown gate dan puzzle tanpa mengalami bug/error yang mengganggu momen.
- Semua konten (galeri, timeline, surat, playlist) tampil dengan baik di HP maupun laptop tanpa layout rusak.
- Pengalaman terasa personal dan "custom-made", bukan seperti template generik.

## 5. Sitemap & Fitur (In Scope)

| Halaman/Section | Fitur/Konten Utama | Prioritas |
|---|---|---|
| Landing / Countdown Gate | Halaman pembuka pertama yang dilihat. Menampilkan countdown timer menuju tanggal target (placeholder, diisi user nanti). Konten lain terkunci/tidak bisa diakses sebelum countdown selesai. | Must-have |
| Puzzle Unlock | Setelah countdown selesai, pasangan disambut dengan puzzle/teka-teki bertema kenangan berdua sebagai "kunci" untuk membuka kado sepenuhnya. Setelah puzzle terpecahkan, navigasi ke section lain terbuka. | Must-have |
| Galeri Foto & Video | Kumpulan foto dan video kenangan, ditampilkan dalam layout grid/masonry. Mendukung placeholder image saat konten asli belum diupload. | Must-have |
| Timeline Perjalanan Hubungan | Rangkaian momen penting hubungan disusun kronologis (tanggal + judul momen + deskripsi singkat + foto pendukung opsional). | Must-have |
| Surat/Pesan Cinta | Halaman berisi teks surat personal, ditampilkan dengan tipografi yang mendukung nuansa personal (bukan default sans-serif tanpa karakter). | Must-have |
| Playlist Kenangan | Embed playlist Spotify (atau platform musik lain yang dipilih user) yang bisa diputar langsung dari halaman. | Must-have |
| Navigasi Antar Section | Menu navigasi (multi-page/section) untuk berpindah antara Galeri, Timeline, Surat, Playlist setelah puzzle terbuka. | Must-have |

## 6. Out of Scope
Eksplisit TIDAK dikerjakan di iterasi ini:
- Guestbook / fitur ucapan dari teman-teman.
- Sistem login/akun.
- CMS/dashboard admin untuk edit konten tanpa coding — update konten dilakukan langsung lewat kode/file data.
- Multi-bahasa (default Bahasa Indonesia, kecuali user minta lain di kemudian hari).
- Payment gateway, e-commerce, atau fitur transaksi apa pun.
- SEO optimization untuk pencarian publik (website ini privat, tidak ditujukan untuk ditemukan lewat search engine — cukup `noindex`).
- Analytics pihak ketiga (GA4, Meta Pixel, dll) — tidak relevan untuk website single-visitor.
- Fitur berbagi ke media sosial.

## 7. User Stories & Acceptance Criteria

**US-01: Countdown Gate**
Sebagai penerima kado, saya ingin melihat countdown menuju momen spesial saat pertama membuka link, sehingga saya merasakan antisipasi sebelum kado terbuka sepenuhnya.

Acceptance Criteria:
- Given tanggal target countdown belum tercapai, When pengunjung membuka link, Then hanya halaman countdown yang tampil (hitungan hari/jam/menit/detik), dan section lain tidak bisa diakses langsung lewat URL.
- Given tanggal target countdown sudah tercapai, When pengunjung membuka link, Then pengunjung diarahkan otomatis ke halaman Puzzle Unlock.
- Given pengunjung mencoba mengakses URL section lain (misal `/galeri`) secara langsung sebelum countdown selesai, When URL diakses, Then pengunjung tetap diarahkan/redirect kembali ke halaman countdown.

**US-02: Puzzle Unlock**
Sebagai penerima kado, saya ingin menyelesaikan sebuah puzzle bertema kenangan kami berdua, sehingga proses membuka kado terasa seperti permainan yang personal, bukan sekadar klik "lanjut".

Acceptance Criteria:
- Given countdown sudah selesai, When pengunjung tiba di halaman ini, Then puzzle/teka-teki ditampilkan dengan instruksi yang jelas.
- Given pengunjung menjawab/menyelesaikan puzzle dengan benar, When submit, Then akses ke semua section lain (Galeri, Timeline, Surat, Playlist) terbuka dan navigasi muncul.
- Given pengunjung menjawab salah, When submit, Then muncul pesan yang ramah untuk mencoba lagi (tanpa membatasi jumlah percobaan — ini bukan security gate, hanya elemen fun).

**US-03: Galeri Foto & Video**
Sebagai penerima kado, saya ingin melihat kumpulan foto dan video kenangan kami, sehingga saya bisa bernostalgia dengan momen-momen yang sudah dilewati.

Acceptance Criteria:
- Given halaman Galeri sudah terbuka (setelah puzzle selesai), When pengunjung membuka section ini, Then foto/video ditampilkan dalam grid yang rapi di desktop maupun HP.
- Given konten asli belum diupload user, When halaman di-build, Then placeholder image/video ditampilkan dengan jelas ditandai sebagai placeholder (bukan foto stok generik yang terlihat seperti konten final).
- Given pengunjung mengklik satu foto/video, When diklik, Then muncul tampilan lebih besar (lightbox) untuk melihat detail.

**US-04: Timeline Perjalanan Hubungan**
Sebagai penerima kado, saya ingin melihat rangkaian momen penting hubungan kami secara berurutan, sehingga saya bisa mengingat kembali perjalanan yang sudah dilalui.

Acceptance Criteria:
- Given data timeline (tanggal, judul, deskripsi) tersedia di file konten, When halaman dimuat, Then momen-momen ditampilkan urut kronologis secara visual (garis waktu vertikal/horizontal).
- Given data timeline masih placeholder, When halaman dimuat, Then minimal 4-5 entri contoh placeholder ditampilkan sebagai referensi struktur data yang harus diisi user.

**US-05: Surat/Pesan Cinta**
Sebagai penerima kado, saya ingin membaca surat personal dari pasangan saya, sehingga saya merasakan pesan yang tulus dan personal.

Acceptance Criteria:
- Given teks surat tersedia di file konten, When halaman dibuka, Then teks ditampilkan dengan tipografi yang mudah dibaca dan punya karakter (bukan default sans-serif polos).
- Given teks surat masih placeholder, When halaman dibuka, Then placeholder teks ditandai jelas (misal `[Tulis surat kamu di sini]`) supaya user tahu ini wajib diganti sebelum deploy final.

**US-06: Playlist Kenangan**
Sebagai penerima kado, saya ingin mendengarkan lagu-lagu yang berkaitan dengan kenangan kami, sehingga pengalaman jadi lebih immersive lewat audio.

Acceptance Criteria:
- Given link playlist Spotify tersedia, When halaman Playlist dibuka, Then embed player Spotify tampil dan bisa diputar langsung dari halaman.
- Given link playlist belum diisi (masih placeholder), When halaman dibuild, Then muncul instruksi jelas di kode/file konten tentang di mana menaruh link playlist asli.

## 8. Konten & Tone/Voice
- Status ketersediaan konten: Semua konten (foto, video, teks surat, nama panggilan pasangan, tanggal countdown, link playlist) masih **placeholder**. Semua placeholder harus mudah ditemukan dan diganti (idealnya terpusat di satu file data, misal `content.json` atau `data.ts`, bukan tersebar hardcoded di banyak komponen).
- Tone/voice: **Playful, ceria, hangat** — seperti bercanda dengan orang terdekat, bukan formal. Hindari kesan "kartu ucapan generik".
- Bahasa: Indonesia.
- Pesan/value proposition utama: Tidak ada pesan marketing — pesan utamanya adalah rasa sayang dan usaha personal yang ditunjukkan lewat detail (bukan lewat klaim, tapi lewat kenangan spesifik yang ditampilkan).

## 9. Desain & Branding
- Brand guideline: Belum ada (personal project, bukan brand formal). Arah visual yang disepakati: **playful & ceria** — warna cerah, ada elemen animasi/micro-interaction yang lucu (bukan animasi kaku/enterprise).
- Referensi visual/kompetitor: Tidak disebutkan user, tidak dilakukan riset kompetitor (tidak relevan untuk website personal).
- Mood/atmosfer yang ingin dicapai: Hangat, personal, sedikit "surprise/game-like" (karena ada countdown + puzzle), terasa dibuat dengan effort — bukan template kado online generik yang banyak beredar.

## 10. Instruksi Anti-AI-Slop

Kenapa bagian ini penting: agent eksekutor cenderung default ke pola paling umum di training data (component default, copy generic) kalau tidak diberi batasan eksplisit. Untuk website personal seperti ini, kesan "generic" justru paling fatal karena tujuannya adalah terasa personal.

**A. Desain — Hindari:**
- Hero/landing dengan gradient ungu-pink generik ala template "romantic website" yang banyak dijual online — pilih palet warna cerah yang punya karakter spesifik (misal kombinasi 2-3 warna dominan yang disengaja, bukan gradient default).
- Ikon hati/emoji sebagai pengganti elemen UI/dekorasi utama — kalau butuh elemen dekoratif bertema cinta, buat ilustrasi/SVG custom yang playful, bukan tempel emoji ❤️ berulang.
- Font script/cursive generik (seperti "Great Vibes" atau "Dancing Script" default) yang dipakai di hampir semua website kado online tanpa pertimbangan — kalau mau nuansa personal di bagian surat, pilih pairing tipografi yang disengaja (misal 1 font display berkarakter + 1 font body yang tetap terbaca jelas).
- Countdown timer dengan style digital-clock generik (angka kotak hitam-putih ala countdown e-commerce flash sale) — desain ulang agar terasa playful, sesuai tone ceria yang dipilih.
- Layout simetris kaku di semua section — beri variasi ritme visual antar section (misal Galeri pakai grid asimetris, Timeline pakai layout vertikal dengan aksen ilustrasi).
- Animasi transisi default framework tanpa kustomisasi (fade generik semua tempat) — pilih 1-2 jenis animasi/micro-interaction yang jadi ciri khas website ini dan pakai konsisten.

**Instruksi ke agent**: setiap keputusan visual (warna, tipografi, animasi) harus terhubung ke mood playful/ceria/hangat yang didefinisikan di section 9 — bukan default framework atau template "romantic website" generik yang banyak beredar di internet.

**B. Konten — Hindari:**
- Frasa klise seperti "kamu adalah duniaku", "cinta sejati", "takdir mempertemukan kita" sebagai draft placeholder — kalau agent perlu menulis draft teks (misal untuk surat placeholder), tulis sesuatu yang terasa personal-spesifik-fiktif sebagai contoh struktur (misal menyebut detail konkret seperti "waktu itu di [tempat placeholder], kamu bilang..."), bukan kalimat generik yang bisa dipakai siapa saja.
- Instruksi countdown/puzzle yang ditulis terlalu formal ("Silakan selesaikan teka-teki berikut untuk melanjutkan") — sesuaikan dengan tone playful (lebih santai, seperti mengajak main).
- Placeholder teks bergaya "Lorem Ipsum" atau instruksi teknis kaku ("insert content here") — gunakan placeholder yang tetap dalam nuansa tone website (misal "[Tulis satu momen paling absurd yang pernah kalian alami berdua di sini]" untuk field timeline), supaya struktur & mood-nya kebayang saat user mengisi konten asli.

Referensi tone yang disepakati: playful, ceria, hangat — semua keputusan desain dan draft copy di atas harus terasa seperti "kado buatan sendiri yang effortful", bukan template kado digital yang bisa dibeli online.

## 11. Functional Requirements

**Countdown Gate**
- Tanggal target disimpan di 1 variabel/config terpusat (placeholder: `TARGET_DATE`), format ISO 8601, mudah diganti user.
- Countdown menghitung mundur hari, jam, menit, detik secara real-time (update tiap detik) menggunakan waktu lokal browser pengunjung.
- Jika `TARGET_DATE` sudah lewat, langsung redirect ke halaman Puzzle Unlock (tidak perlu refresh manual).
- Jika pengunjung reload halaman sebelum countdown selesai, state countdown tetap konsisten (dihitung ulang dari `TARGET_DATE`, bukan dari waktu load pertama).

**Puzzle Unlock**
- Jenis puzzle: teka-teki sederhana berbasis teks/pilihan (misal isian jawaban singkat atau pilihan ganda bertema kenangan berdua) — bukan puzzle visual kompleks (jigsaw/drag-drop) kecuali user secara eksplisit follow-up minta itu di iterasi berikutnya.
- Jawaban benar disimpan sebagai konfigurasi (placeholder di file data), dicocokkan case-insensitive dan trim whitespace untuk isian teks.
- Setelah puzzle terpecahkan, status "unlocked" disimpan di browser (misal localStorage) supaya pengunjung tidak perlu mengulang puzzle tiap kali reload/kembali ke website di sesi yang sama.
- Percobaan salah tidak dibatasi jumlahnya (bukan security gate).

**Galeri Foto & Video**
- Sumber media: file statis di folder assets (placeholder image disediakan sebagai contoh struktur folder).
- Layout grid responsif: 2 kolom di HP, 3-4 kolom di desktop (breakpoint disesuaikan dengan sistem desain yang dipilih).
- Video mendukung format mp4 minimal, autoplay dimatikan (butuh klik user untuk play, demi performa & UX yang wajar).

**Timeline**
- Data timeline disimpan sebagai array terstruktur (tanggal, judul, deskripsi, foto opsional) di file data terpusat.
- Ditampilkan urut kronologis ascending (dari momen paling awal ke terbaru).

**Surat**
- Teks surat disimpan sebagai string/markdown di file data terpusat, mendukung paragraf multi-baris.

**Playlist**
- Embed menggunakan iframe resmi Spotify (embed URL), dengan link placeholder yang jelas ditandai untuk diganti.
- Jika Spotify tidak tersedia/diblokir, fallback minimal: tampilkan link "Buka di Spotify" yang mengarah ke placeholder URL.

## 12. Non-Functional Requirements
- Performa: Website ringan, load time awal (halaman countdown) di bawah 3 detik pada koneksi 4G biasa. Gambar dioptimasi (lazy loading untuk galeri).
- Responsif: Wajib mendukung HP (mulai lebar 360px) dan desktop/laptop (hingga 1920px), termasuk breakpoint tablet.
- SEO: Tidak diperlukan optimasi SEO publik — tambahkan `noindex` meta tag karena website ini privat, tidak ditujukan untuk publik.
- Aksesibilitas: Kontras warna teks-background tetap memenuhi standar keterbacaan dasar meskipun tema playful/warna cerah (hindari teks yang sulit dibaca demi estetika).
- Keamanan: Tidak ada data sensitif/form input yang perlu divalidasi ketat (bukan form publik) — cukup pastikan tidak ada dependency pihak ketiga yang mencurigakan di embed (Spotify resmi saja).

## 13. Batasan & Preferensi Teknis
- Tech stack: Bebas ditentukan agent, dengan syarat harus deploy-ready untuk **Vercel**. Rekomendasi: Next.js (React) karena native support Vercel, atau alternatif static-friendly lain (Vite + React) jika ingin lebih ringan — agent bisa pilih sesuai kebutuhan asal kompatibel Vercel.
- Platform/hosting: **Vercel** (sudah fix, user sudah punya akun).
- Integrasi pihak ketiga: Spotify embed (untuk Playlist). Tidak ada integrasi lain (tidak butuh payment, WA API, analytics, maps).

## 14. Asumsi & Pertanyaan Terbuka
- Nama panggilan pasangan masih placeholder (`[Nama Sayang]` atau sejenis) — perlu diganti user sebelum deploy final.
- Tanggal countdown masih placeholder — perlu diisi user sebelum deploy final.
- Semua foto, video, teks surat, dan link playlist masih placeholder — perlu diisi user sebelum deploy final.
- Diasumsikan website ini hanya diakses lewat link privat (dibagikan langsung ke pasangan), bukan didaftarkan ke search engine — kalau ternyata user ingin tetap SEO-friendly untuk alasan tertentu, ini perlu dikoreksi.
- Diasumsikan tidak butuh proteksi password tambahan di luar puzzle (puzzle dianggap cukup sebagai "gate" yang fun, bukan gate keamanan) — kalau user mau link benar-benar tidak bisa diakses orang lain sama sekali, mungkin perlu ditambah password sederhana di iterasi berikutnya.
- Konsep puzzle diasumsikan berbasis teks/pilihan sederhana (bukan jigsaw visual) — kalau user maunya puzzle visual yang lebih kompleks, ini perlu didiskusikan lagi sebagai scope tambahan.

## 15. Timeline & Prioritas
Tidak ada tenggat waktu spesifik yang disebutkan user. Semua fitur di section 5 berstatus Must-have untuk MVP — tidak ada fitur yang secara eksplisit ditunda ke fase berikutnya, mengingat scope-nya sudah relatif kecil dan fokus (single-page journey untuk 1 pengguna).