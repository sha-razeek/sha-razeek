export interface FavoriteItem {
  title: string;
  creator: string;
  type: 'book' | 'movie' | 'tv' | 'music';
  year?: string;
  description?: string;
  coverImage?: string;
}

export const favorites: FavoriteItem[] = [
  // Books
  {
    title: 'Secrets of Divine Love',
    creator: 'A. Helwa',
    type: 'book',
    year: '2020',
    description: 'A spiritual journey that leverages the secrets of the Qur’an and ancient poetry to help readers reconnect with their faith and Divine Love.',
  },
  {
    title: 'Krakatoa',
    creator: 'Simon Winchester',
    type: 'book',
    year: '2003',
    description: 'A riveting account of the 1883 volcanic eruption that changed the world, masterfully blending geology, history, and the birth of the global village.',
  },
  
  // Movies
  {
    title: 'Shinobi: Heart Under Blade',
    creator: 'Ten Shimoyama',
    type: 'movie',
    year: '2005',
    description: 'A visually stunning adaptation of "Basilisk", depicting the tragic love story between two rival ninjas during the Tokugawa shogunate.',
  },
  {
    title: 'Wonderful Nightmare',
    creator: 'Kang Hyo-jin',
    type: 'movie',
    year: '2015',
    description: 'A successful lawyer dies in a clerical error and must live as a housewife and mother for a month before returning to her own life.',
  },
  {
    title: 'The Golden Cane Warrior',
    creator: 'Ifa Isfansyah',
    type: 'movie',
    year: '2014',
    description: 'A stylish Indonesian martial arts epic featuring breathtaking cinematography and classic wuxia-inspired storytelling.',
  },

  // TV Shows
  {
    title: 'Mad Men',
    creator: 'Matthew Weiner',
    type: 'tv',
    year: '2007 - 2015',
    description: 'A stunningly accurate portrayal of 1960s advertising culture and the shift in American social norms.',
  },
  {
    title: 'The Twilight Zone',
    creator: 'Rod Serling',
    type: 'tv',
    year: '1959 - 1964',
    description: 'Anthology of science fiction and suspense that challenged the boundaries of television storytelling.',
  },

  // Music
  {
    title: 'Kind of Blue',
    creator: 'Miles Davis',
    type: 'music',
    year: '1959',
    description: 'The definitive modal jazz album, essential listening for any mid-century enthusiast.',
  },
  {
    title: 'Pet Sounds',
    creator: 'The Beach Boys',
    type: 'music',
    year: '1966',
    description: 'A revolutionary pop album that pushed the boundaries of studio production and composition.',
  },
];
