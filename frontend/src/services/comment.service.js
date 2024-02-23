import { axiosApi } from "../config";

const PATHS = {
  create: "/comment",
  fetch: "/comment/",
};

export const create = async (payload) => await axiosApi.post(PATHS.create, payload);
export const fetch = async (payload) => await axiosApi.get(PATHS.fetch, payload);
