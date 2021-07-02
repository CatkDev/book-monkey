export interface BOOK {
  isbn: string;
  title: string;
  authors: string[];
  published: Date;
  subtitle?: string;
  rating?: number;
  thumbnails?: THUMBNAIL[];
  description?: string;
}

export interface THUMBNAIL {
  url: string;
  title?: string;
}
