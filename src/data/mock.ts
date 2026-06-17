export interface Post {
  id: string;
  imageUrl: string;
  commentsCount: number;
  likesCount: number;
}

export interface Comment {
  id: string;
  username: string;
  text: string;
  mentions: string[];
}

export const getMockPosts = (username: string): Post[] => {
  // Generate 12 random posts
  return Array.from({ length: 12 }).map((_, i) => {
    // Determine random number of comments to simulate big vs small posts
    const commentsCount = Math.floor(Math.random() * 2000) + 10;
    
    return {
      id: `post_${username}_${i}`,
      imageUrl: `https://picsum.photos/seed/${username}_${i}/400/400`,
      commentsCount,
      likesCount: commentsCount * (Math.floor(Math.random() * 5) + 2),
    };
  });
};

const RANDOM_NAMES = [
  'juanperez', 'maria_gm', 'carlos.dev', 'lucia_88', 'matias_ok',
  'agus.tin', 'sofi_lopez', 'pedro.x', 'laura_m', 'tomas_g',
  'valeria_123', 'nico_bz', 'camila_x', 'rodrigo_m', 'flor_p',
];

const RANDOM_COMMENTS = [
  '¡Lo quiero! 😍',
  'Participando 🙌 @amigo1 @amigo2',
  'Ojalá gane 🙏',
  'Qué buen sorteo @test',
  '🔥🔥🔥',
  'Yo lo necesitooo',
  'Suerte a todos',
  'Me encanta',
  'Participo 🤞',
  '@juan vení a ver esto',
];

export const getMockComments = (postId: string, count: number): Comment[] => {
  return Array.from({ length: Math.min(count, 500) }).map((_, i) => {
    const text = RANDOM_COMMENTS[Math.floor(Math.random() * RANDOM_COMMENTS.length)];
    const mentions = text.match(/@[\w.]+/g) || [];
    
    return {
      id: `comment_${postId}_${i}`,
      username: RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)] + Math.floor(Math.random() * 100),
      text,
      mentions,
    };
  });
};
