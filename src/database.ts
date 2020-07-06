import database, { ITag, IPost } from "./db.yml";

export const tagsById = database.tags.reduce((map, tag) => {
  map.set(tag.id, tag);
  return map;
}, new Map<string, ITag>());

export const tagIds = Array.from(tagsById.keys());

export const postsById = database.posts.reduce((map, post) => {
  map.set(post.url, post);
  return map;
}, new Map<string, IPost>());

export const postIds = Array.from(postsById.keys());

export const tagPostMap = postIds.reduce((map, postId) => {
  const post = postsById.get(postId)!;
  post.tags.forEach((tagId) => {
    const tag = tagsById.get(tagId);
    if (tag == null) {
      console.error(`Unknown tag: ${tagId}`);
      return;
    }

    if (!map.has(tag.id)) {
      map.set(tag.id, new Set());
    }

    map.get(tag.id)!.add(postId);
  });
  return map;
}, new Map<string, Set<string>>());
