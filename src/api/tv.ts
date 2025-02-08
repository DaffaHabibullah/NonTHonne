import axios from "axios";
import { API_BASE_URL } from "./config";
import { AuthHeader } from "../utils/auth";
import {
    TvSeriesListAiringToday,
    TvSeriesListOnTheAir,
    TvSeriesListPopular,
    TvSeriesListTopRated,
    TvSeriesDetails,
    TvSeriesDetailsGenre,
} from "../types/tv";

export const getTvAiringToday = async (
    page: number
): Promise<TvSeriesListAiringToday> => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/tv/airing_today?page=${page}`,
            {
                headers: AuthHeader(),
            }
        );

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getTvOnTheAir = async (
    page: number
): Promise<TvSeriesListOnTheAir> => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/tv/on_the_air?page=${page}`,
            {
                headers: AuthHeader(),
            }
        );

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getTvPopular = async (
    page: number
): Promise<TvSeriesListPopular> => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/tv/popular?page=${page}`,
            {
                headers: AuthHeader(),
            }
        );

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getTvTopRated = async (
    page: number
): Promise<TvSeriesListTopRated> => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/tv/top_rated?page=${page}`,
            {
                headers: AuthHeader(),
            }
        );

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getTvDetails = async (id: number): Promise<TvSeriesDetails> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tv/${id}`, {
            headers: AuthHeader(),
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getTvGenres = async (): Promise<TvSeriesDetailsGenre[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/genre/tv/list`, {
            headers: AuthHeader(),
        });

        return response.data.genres;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
