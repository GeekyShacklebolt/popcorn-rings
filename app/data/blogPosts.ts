export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  rating: number;
  boxOffice: {
    total: string;
    domestic: string;
    international: string;
    uptoWeek: number;
  };
  releaseDate: string;
  genre: string;
  director: string;
  runtime: string;
  image: string;
  excerpt: string;
  fullReview: string;
  videoUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mahavatar Narsimha",
    slug: "mahavatar-narsimha-2025",
    rating: 9.6,
    boxOffice: {
      total: "44.5 Cr",
      domestic: "44.5 Cr",
      international: "TBD",
      uptoWeek: 1
    },
    releaseDate: "2025-07-25",
    genre: "Action/Animation/Drama/Fantasy",
    director: "Ashwin Kumar",
    runtime: "130 min",
    image: "https://m.media-amazon.com/images/M/MV5BNzhkMjFhOTItMTczNi00YWM1LTlhZjItOTc4OTA0OWVhZTIzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    // image: "https://www.sacnilk.com/image/bunnyimagenews.php?newsid=1000023171",  // alternate image
    excerpt: "The demon Hiranyakashyap seeks revenge on Vishnu and declares himself a god. His son Prahlad remains devoted to Vishnu. Vishnu manifests as Narsimha to defeat the demon and restore balance.",
    fullReview: "Mahavatar Narsimha is a groundbreaking animated film that brings the sacred story of Lord Narsimha to life with stunning visuals and emotional depth. Rooted in the teachings of the Srimad Bhagavatam, this film is not just cinema—it's a divine experience. The animation style, voice performances, and background score create an immersive journey of bhakti, dharma, and divine grace. The transformation scene where Narasimha emerges from the pillar is a cinematic masterpiece that sends shivers down the spine.",
    videoUrl: "https://www.youtube.com/embed/0yLQKJXkGFU?si=99SnnGB7VViBF3aQ"
  },
  // Add more blog posts here
  // {
  //   id: 2,
  //   title: "Next Movie Title",
  //   rating: 8.5,
  //   boxOffice: {
  //     total: "$10M",
  //     domestic: "$5M",
  //     international: "$5M",
  //     uptoWeek: 2
  //   },
  //   releaseDate: "2025-08-15",
  //   genre: "Action/Drama",
  //   director: "Director Name",
  //   runtime: "120 min",
  //   image: "https://example.com/image.jpg",
  //   excerpt: "Movie description...",
  //   fullReview: "Full review text..."
  // }
];

// Helper functions
export const getFeaturedPosts = (count: number = 3) => {
  return blogPosts.slice(0, count);
};

export const getAllPosts = () => {
  return blogPosts;
};

export const getPostById = (id: number) => {
  return blogPosts.find(post => post.id === id);
};

export const getPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};
