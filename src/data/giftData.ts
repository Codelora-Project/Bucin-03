export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  date: string;
  location?: string;
  rotation?: number;
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

export interface TopSongItem {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl?: string;
  spotifyUrl?: string;
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
    quote: string;
    buddiesLabel: string;
    musicCard: {
      title: string;
      name: string;
      song: string;
      artist: string;
      album: string;
      issuedDate: string;
      photoUrl: string;
      code: string;
    };
    topSongsTitle: string;
    topSongs: TopSongItem[];
  };
}

export const giftData: GiftData = {
  // =========================================================================
  // 1. MAIN DATA (NAME & COUNTDOWN TARGET DATE)
  // =========================================================================
  recipientName: "My Sweetheart",
  senderName: "Your Partner",
  birthdayAge: 23,

  targetDate: "2026-08-15T00:00:00",

  devInstructions: "Tip: Click 'Preview Mode' in the bottom right corner to unlock the gift while testing the website.",

  // =========================================================================
  // 2. PUZZLE UNLOCK MISSION
  // =========================================================================
  puzzleConfig: {
    title: "Memory Puzzle Mission",
    description: "Before opening this gift, let's test your memory of our sweet moments together. Answer the following puzzles correctly.",
    questions: [
      {
        id: 1,
        question: "Where was our most memorable date or hangout spot when we first spent time together?",
        hint: "Remember the cafe or hangout spot that made us chat until we forgot about time. [CHANGE_HINT_1]",
        type: "text",
        correctAnswers: ["cafe", "coffee", "park", "coffee shop", "[change_answer_1]"]
      },
      {
        id: 2,
        question: "What food or snack did we eat together most often?",
        hint: "Our favorite late night snack we often bought. [CHANGE_HINT_2]",
        type: "text",
        correctAnswers: ["seblak", "noodles", "meatball", "martabak", "ramen", "[change_answer_2]"]
      },
      {
        id: 3,
        question: "What is your happiness level during our relationship together?",
        hint: "Choose the most meaningful answer from your heart.",
        type: "choice",
        options: [
          "100/10 (Very Happy)",
          "1000/10 (Very Special)",
          "Infinity"
        ],
        correctAnswers: [
          "100/10 (Very Happy)",
          "1000/10 (Very Special)",
          "Infinity"
        ]
      }
    ]
  },

  // =========================================================================
  // 3. POLAROID PHOTO GALLERY
  // =========================================================================
  gallery: [
    {
      id: "gal-1",
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
      caption: "Your smile when we first walked together.",
      date: "12 Jan 2024",
      location: "City Park",
      rotation: -3.8
    },
    {
      id: "gal-2",
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
      caption: "Relaxing weekend chatting together.",
      date: "24 Feb 2024",
      location: "Favorite Cafe",
      rotation: 1.8
    },
    {
      id: "gal-3",
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
      caption: "Laughter-filled moment at the beach.",
      date: "15 Mar 2024",
      location: "Beautiful Beach",
      rotation: -1.5
    },
    {
      id: "gal-4",
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
      caption: "Sweet vacation in the mountains.",
      date: "10 May 2024",
      location: "Mountain Peak",
      rotation: 2.5
    },
    {
      id: "gal-5",
      url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=1200&auto=format&fit=crop",
      caption: "Sweet surprise on a special day.",
      date: "20 Jun 2024",
      location: "Home",
      rotation: 1.5
    },
    {
      id: "gal-6",
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
      caption: "Warm photo of us together.",
      date: "04 Jul 2024",
      location: "Seaside",
      rotation: -2.0
    },
    {
      id: "gal-7",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
      caption: "Our cozy selfie together.",
      date: "18 Aug 2024",
      location: "Photo Studio",
      rotation: 2.2
    },
    {
      id: "gal-8",
      url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      caption: "Sweet memory in the afternoon.",
      date: "29 Sep 2024",
      location: "Flower Garden",
      rotation: -1.8
    }
  ],

  // =========================================================================
  // 4. RELATIONSHIP TIMELINE
  // =========================================================================
  timeline: [
    {
      id: "time-1",
      date: "October 15, 2023",
      title: "First Meeting & Saying Hello",
      description: "The first day we talked intensely. The conversation flowed naturally and comfortably.",
      tag: "Beginning",
      iconName: "Sparkles",
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "time-2",
      date: "November 12, 2023",
      title: "First Date",
      description: "Our first time going out together. Remembering sweet initial impressions.",
      tag: "First Date",
      iconName: "Coffee",
      imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "time-3",
      date: "January 01, 2024",
      title: "Officially Together",
      description: "The moment we agreed to take care of each other, complement each other, and walk side by side.",
      tag: "Special Moment",
      iconName: "HeartHandshake",
      imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "time-4",
      date: "February 14, 2024",
      title: "Moments Together",
      description: "Exchanging keepsake gifts and enjoying quality time together.",
      tag: "Sweet Memories",
      iconName: "Gift"
    },
    {
      id: "time-5",
      date: "Today",
      title: "Your 23rd Birthday",
      description: "A special day for the most precious person. Wishing you good health, happiness, and all your dreams come true.",
      tag: "Special Day",
      iconName: "Cake"
    }
  ],

  // =========================================================================
  // 5. LOVE LETTER
  // =========================================================================
  letter: {
    greeting: "To My Dearest [Sweetheart],",
    contentParagraphs: [
      "Happy birthday. On this very special day, I specially created this small website for you as a token of appreciation and gratitude for your presence in my life.",
      "Thank you for always being someone who listens, provides comfort, and brings laughter to every occasion. Every moment we have shared together has become a precious, sweet memory.",
      "May this new year of your life bring you an abundance of health, happiness, and ease in achieving your dreams. I will always be here to support and walk beside you in every step.",
      "May this simple website leave a sweet impression on your birthday."
    ],
    closing: "Sincerely,",
    signature: "Your Partner",
    secretPostscript: "Note: Don't forget to listen to our memory playlist in the Playlist section."
  },

  // =========================================================================
  // 6. MEMORY PLAYLIST (MUSIC PASS CARD & TOP 5 SONGS)
  // =========================================================================
  playlist: {
    quote: "Life is like a song recording, and every best melody always reminds me of you.",
    buddiesLabel: "Our favorite memory songs",
    
    musicCard: {
      title: "Music Gift Pass",
      name: "For My Love",
      song: "Sampai Jadi Debu",
      artist: "Banda Neira",
      album: "Sweet Memories Together",
      issuedDate: "Birthday Special",
      photoUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400&auto=format&fit=crop",
      code: "#HBD-2026-LOVE"
    },

    topSongsTitle: "Our Favorite Memory Songs",
    topSongs: [
      {
        id: "song-1",
        title: "Sampai Jadi Debu",
        artist: "Banda Neira",
        coverUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=200&auto=format&fit=crop",
        audioUrl: "/assets/sampai-jadi-debu.mp3",
        spotifyUrl: "https://open.spotify.com/search/Sampai%20Jadi%20Debu%20Banda%20Neira"
      },
      {
        id: "song-2",
        title: "Shape of My Heart",
        artist: "Sting",
        coverUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=200&auto=format&fit=crop",
        audioUrl: "/assets/shape-of-my-heart.mp3",
        spotifyUrl: "https://open.spotify.com/search/Shape%20of%20My%20Heart%20Sting"
      },
      {
        id: "song-3",
        title: "Perfect",
        artist: "Ed Sheeran",
        coverUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=200&auto=format&fit=crop",
        audioUrl: "/assets/perfect.mp3",
        spotifyUrl: "https://open.spotify.com/search/Perfect%20Ed%20Sheeran"
      },
      {
        id: "song-4",
        title: "Until I Found You",
        artist: "Stephen Sanchez",
        coverUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=200&auto=format&fit=crop",
        audioUrl: "/assets/until-i-found-you.mp3",
        spotifyUrl: "https://open.spotify.com/search/Until%20I%20Found%20You"
      },
      {
        id: "song-5",
        title: "Monokrom",
        artist: "Tulus",
        coverUrl: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=200&auto=format&fit=crop",
        audioUrl: "/assets/monokrom.mp3",
        spotifyUrl: "https://open.spotify.com/search/Monokrom%20Tulus"
      }
    ]
  }
};
