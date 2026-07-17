import api from "./client";

export const getBlogPosts = async () => {
  const response = await api.get("/blog");
  return response.data;
};

export const getBlogPostBySlug = async (slug) => {
  const response = await api.get(`/blog/${slug}`);
  return response.data;
};
