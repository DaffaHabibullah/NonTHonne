import axios from "axios";
import { API_BASE_URL } from "./config";
import { AuthHeader } from "../utils/auth";
import {
    MovieListNowPlaying,
    MovieListPopular,
    MovieListTopRated,
    MovieListUpcoming,
    MovieDetails,
    MovieDetailsGenre,
} from "../types/movie";

export const getMoviesNowPlaying = async (
    page: number
): Promise<MovieListNowPlaying> => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/movie/now_playing?page=${page}`,
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

export const getMoviesPopular = async (
    page: number
): Promise<MovieListPopular> => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/movie/popular?page=${page}`,
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

export const getMoviesTopRated = async (
    page: number
): Promise<MovieListTopRated> => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/movie/top_rated?page=${page}`,
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

export const getMoviesUpcoming = async (
    page: number
): Promise<MovieListUpcoming> => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/movie/upcoming?page=${page}`,
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

export const getMovieDetails = async (id: number): Promise<MovieDetails> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movie/${id}`, {
            headers: AuthHeader(),
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getMovieGenres = async (): Promise<MovieDetailsGenre[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/genre/movie/list`, {
            headers: AuthHeader(),
        });

        return response.data.genres;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
