export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  date: string;
  location?: string;
  rotation?: number; // Tilted Polaroid rotation in degrees
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  tag: string;
  iconName?: string;
  imageUrl?: string;
}

export interface SongItem {
  title: string;
  artist: string;
  memory: string;
}

export interface PuzzleQuestion {
  id: number;
  question: string;
  hint: string;
  type: 'text' | 'choice';
  options?: string[];
  correctAnswers: string[];
}

export interface GiftData {
  recipientName: string;
  senderName: string;
  birthdayAge: number;
  targetDate: string;

  devInstructions: string;

  puzzleConfig: {
    title: string;
    description: string;
    questions: PuzzleQuestion[];
  };

  gallery: GalleryItem[];
  timeline: TimelineItem[];

  letter: {
    greeting: string;
    contentParagraphs: string[];
    closing: string;
    signature: string;
    secretPostscript?: string;
  };

  playlist: {
    spotifyEmbedUrl: string;
    spotifyDirectUrl: string;
    description: string;
    favoriteSongs: SongItem[];
  };
}

export const giftData: GiftData = {
  // =========================================================================
  // 1. DATA UTAMA (NAMA & TANGGAL TARGET COUNTDOWN)
  // =========================================================================
  recipientName: "Sayangku",
  senderName: "Pasanganmu",
  birthdayAge: 23,

  targetDate: "2026-08-15T00:00:00",

  devInstructions: "Tips: Klik 'Preview Mode' di sudut kanan bawah untuk membuka kunci kado saat mengetes website.",

  // =========================================================================
  // 2. TEKA-TEKI / PUZZLE UNLOCK
  // =========================================================================
  puzzleConfig: {
    title: "Misi Teka-Teki Kenangan Berdua",
    description: "Sebelum membuka kado ini, mari uji ingatanmu tentang momen-momen manis kita berdua. Jawab teka-teki berikut dengan benar.",
    questions: [
      {
        id: 1,
        question: "Di mana tempat kencan atau momen paling berkesan saat pertama kali kita main bareng?",
        hint: "Ingat cafe atau tempat nongkrong yang membuat kita ngobrol sampai lupa waktu. [GANTI_HINT_1]",
        type: "text",
        correctAnswers: ["cafe", "kopi", "taman", "kedai kopi", "[ganti_jawaban_1]"]
      },
      {
        id: 2,
        question: "Makanan atau jajanan apa yang paling sering kita makan bareng?",
        hint: "Jajanan favorit yang sering kita beli pas malam hari. [GANTI_HINT_2]",
        type: "text",
        correctAnswers: ["seblak", "mie ayam", "bakso", "martabak", "[ganti_jawaban_2]"]
      },
      {
        id: 3,
        question: "Berapa tingkat kebahagiaan kamu selama menjalani hubungan bersama aku?",
        hint: "Pilih jawaban paling berkesan dari hati.",
        type: "choice",
        options: [
          "100/10 (Sangat Bahagia)",
          "1000/10 (Sangat Istimewa)",
          "Tak Terhingga"
        ],
        correctAnswers: [
          "100/10 (Sangat Bahagia)",
          "1000/10 (Sangat Istimewa)",
          "Tak Terhingga"
        ]
      }
    ]
  },

  // =========================================================================
  // 3. GALERI FOTO POLAROID KENANGAN (8 FOTO POLAROID ASLI)
  // =========================================================================
  gallery: [
    {
      id: "gal-1",
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
      caption: "Senyum kamu saat pertama kali jalan bareng.",
      date: "12 Jan 2024",
      location: "Taman Kota",
      rotation: -3.8
    },
    {
      id: "gal-2",
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
      caption: "Momen santai di akhir pekan mengobrol bersama.",
      date: "24 Feb 2024",
      location: "Cafe Favorit",
      rotation: 1.8
    },
    {
      id: "gal-3",
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
      caption: "Momen penuh tawa di pantai.",
      date: "15 Mar 2024",
      location: "Pantai Indah",
      rotation: -1.5
    },
    {
      id: "gal-4",
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
      caption: "Liburan manis di pegunungan.",
      date: "10 Mei 2024",
      location: "Puncak Gunung",
      rotation: 2.5
    },
    {
      id: "gal-5",
      url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=1200&auto=format&fit=crop",
      caption: "Kejutan manis di hari spesial.",
      date: "20 Jun 2024",
      location: "Rumah",
      rotation: 1.5
    },
    {
      id: "gal-6",
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
      caption: "Foto berdua penuh kehangatan.",
      date: "04 Jul 2024",
      location: "Tepi Pantai",
      rotation: -2.0
    },
    {
      id: "gal-7",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
      caption: "Potret selfie kebersamaan kita.",
      date: "18 Agu 2024",
      location: "Studio Foto",
      rotation: 2.2
    },
    {
      id: "gal-8",
      url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      caption: "Kenangan manis di sore hari.",
      date: "29 Sep 2024",
      location: "Taman Bunga",
      rotation: -1.8
    }
  ],

  // =========================================================================
  // 4. TIMELINE PERJALANAN HUBUNGAN
  // =========================================================================
  timeline: [
    {
      id: "time-1",
      date: "15 Oktober 2023",
      title: "Awal Pertemuan & Saling Sapa",
      description: "Hari pertama kita mengobrol secara intens. Obrolan terasa mengalir begitu saja dan penuh kenyamanan.",
      tag: "Awal Cerita",
      iconName: "Sparkles",
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "time-2",
      date: "12 November 2023",
      title: "First Date / Kencan Pertama",
      description: "Pertama kali jalan bersama. Mengingat momen awal yang penuh kesan manis.",
      tag: "Kencan Pertama",
      iconName: "Coffee",
      imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "time-3",
      date: "01 Januari 2024",
      title: "Resmi Bersama",
      description: "Momen di mana kita sepakat untuk saling menjaga, melengkapi, dan berjalan berdampingan.",
      tag: "Momen Spesial",
      iconName: "HeartHandshake",
      imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "time-4",
      date: "14 Februari 2024",
      title: "Momen Kebersamaan",
      description: "Tukeran kado kenangan dan menikmati waktu berkualitas bersama.",
      tag: "Kenangan Manis",
      iconName: "Gift"
    },
    {
      id: "time-5",
      date: "Hari Ini",
      title: "Ulang Tahun Kamu yang Ke-23",
      description: "Hari istimewa bagi orang yang paling berharga. Semoga selalu sehat, bahagia, dan tercapai semua impianmu.",
      tag: "Hari Spesial",
      iconName: "Cake"
    }
  ],

  // =========================================================================
  // 5. SURAT / PESAN CINTA
  // =========================================================================
  letter: {
    greeting: "Untuk [Nama Sayang] yang Sangat Berharga",
    contentParagraphs: [
      "Selamat ulang tahun. Di hari yang sangat istimewa ini, aku secara khusus membuat website kecil ini untukmu sebagai bentuk apresiasi dan rasa terima kasih atas setiap kehadiranmu dalam hidupku.",
      "Terima kasih telah menjadi sosok yang selalu mendengarkan, memberi rasa nyaman, dan menghadirkan tawa di setiap kesempatan. Setiap momen yang telah kita lalui bersama selalu menjadi kenangan manis yang berharga.",
      "Semoga di usiamu yang baru ini, kamu senantiasa dilimpahi kesehatan, kebahagiaan, serta kemudahan dalam mewujudkan impianmu. Aku akan selalu ada untuk mendukung dan mendampingi setiap langkahmu.",
      "Semoga website sederhana ini memberikan kesan yang manis di hari ulang tahunmu."
    ],
    closing: "Dengan tulus,",
    signature: "Pasanganmu",
    secretPostscript: "Catatan: Jangan lupa mendengarkan kumpulan lagu kenangan di section Playlist."
  },

  // =========================================================================
  // 6. PLAYLIST KENANGAN (SPOTIFY EMBED & SONG LIST)
  // =========================================================================
  playlist: {
    spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator",
    spotifyDirectUrl: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
    description: "Kumpulan lagu pilihan yang menyimpan banyak kenangan manis saat kita nikmati bersama.",

    favoriteSongs: [
      {
        title: "Sampai Jadi Debu",
        artist: "Banda Neira",
        memory: "Lagu yang memberikan ketenangan dan makna mendalam tentang tumbuh bersama."
      },
      {
        title: "Perfect",
        artist: "Ed Sheeran",
        memory: "Lagu yang sering diputar saat kita dalam perjalanan."
      },
      {
        title: "Until I Found You",
        artist: "Stephen Sanchez",
        memory: "Lagu yang selalu mengingatkan pada momen-momen berharga bersamamu."
      },
      {
        title: "Monokrom",
        artist: "Tulus",
        memory: "Lagu rasa syukur atas lembaran kenangan manis yang kita lalui."
      }
    ]
  }
};
