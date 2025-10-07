import api from "@/config/api";

export async function exampleAction() {
  async function list(params?: { page?: number; page_size?: number; [key: string]: unknown}) {
    return await api.get("/example", { params });
  }
  return {
    list,
  };
}
