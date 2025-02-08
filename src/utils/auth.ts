import { API_BEARER_TOKEN } from "../api/config";

export const AuthHeader = () => {
    return API_BEARER_TOKEN
        ? {
              Authorization: `Bearer ${API_BEARER_TOKEN}`,
              "Content-Type": "application/json",
          }
        : {};
};
