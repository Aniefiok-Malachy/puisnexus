import { POSTS as SEED_POSTS } from "./blogData";

const KEY = "puis_blog_posts";

// first load: use localStorage, if empty seed with SEED_POSTS
export function getPosts() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (Array.isArray(saved) && saved.length) return saved;

    localStorage.setItem(KEY, JSON.stringify(SEED_POSTS));
    return SEED_POSTS;
  } catch {
    localStorage.setItem(KEY, JSON.stringify(SEED_POSTS));
    return SEED_POSTS;
  }
}

export function savePosts(posts) {
  localStorage.setItem(KEY, JSON.stringify(posts));
}

export function addPost(post) {
  const current = getPosts();
  const next = [post, ...current];
  savePosts(next);
  return next;
}

export function updatePost(id, patch) {
  const current = getPosts();
  const next = current.map((p) => (p.id === id ? { ...p, ...patch } : p));
  savePosts(next);
  return next;
}

export function deletePost(id) {
  const current = getPosts();
  const next = current.filter((p) => p.id !== id);
  savePosts(next);
  return next;
}
