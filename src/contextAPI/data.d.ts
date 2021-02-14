export interface ContextData {
  photoArray: image[] | any[];
  doesDataExists: boolean;
  isFetching: boolean;
  handleFetchByQuery: (term: string) => void;
  addFav: (newFav:image) => void;
  favs:image[] | any[];
}

export interface image {
  alt_description: string;
  blur_hash: string;
  categories: any[];
  color: string;
  created_at: string;
  current_user_collections: any[];
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: any;
  promoted_at: string;
  sponsorship: any;
  tags: { type: string; title: string }[];
  updated_at: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: any;
  width: number;
}

// interface ApiRequest {
//     results: image[];
//     total:number;
//     total_pages:number;
// }
