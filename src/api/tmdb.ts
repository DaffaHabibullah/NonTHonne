import { API_IMAGE_BASE_URL } from "./config";

export const getOriginalImages = (path: string): string =>
    `${API_IMAGE_BASE_URL}/original${path}`;

export const getW500Images = (path: string): string =>
    `${API_IMAGE_BASE_URL}/w500${path}`;
