export interface Category {
  id: number;
  name: string;
}

export interface Video {
  id: number;
  catIds: number[];
  name: string;
  formats: Record<string, { res: string; size: number }>;
  releaseDate: string;
}

export interface Author {
  id: number;
  name: string;
  videos: Video[];
}

export interface ProcessedAuthor {
  id: number;
  name: string;
}

export interface ProcessedVideo {
  id: number;
  name: string;
  author: string;
  authorId: number;
  categories: string[];
  categoryIds: number[];
  releaseDate: string;
  releaseDateFormatted: string;
  formatRes: number;
  formatName: string;
}

export interface VideoFormModel {
  name: string;
  categoryIds: number[];
  authorId: number;
}
