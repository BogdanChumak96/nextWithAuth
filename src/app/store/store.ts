import { create } from "zustand";
import { getData, getDataBySearch } from "../services/getPosts";

type usePosts = {
  posts: any[];
  loading: boolean;
  getAllPosts: () => Promise<void>;
  getPostBySearch: (search: string) => Promise<void>;
};

export const useBearStore = create<usePosts>((set) => ({
  posts: [],
  loading: false,
  getAllPosts: async () => {
    set({ loading: true });
    const posts = await getData();
    set({ posts, loading: false });
  },
  getPostBySearch: async (search: string) => {
    set({ loading: true });
    const posts = await getDataBySearch(search);
    set({ posts, loading: false });
  },
}));
