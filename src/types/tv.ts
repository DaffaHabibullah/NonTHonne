export interface TvSeriesListAiringToday {
    page: number;
    results: TvSeriesListResults[];
    total_pages: number;
    total_results: number;
}

export interface TvSeriesListOnTheAir {
    page: number;
    results: TvSeriesListResults[];
    total_pages: number;
    total_results: number;
}

export interface TvSeriesListPopular {
    page: number;
    results: TvSeriesListResults[];
    total_pages: number;
    total_results: number;
}

export interface TvSeriesListTopRated {
    page: number;
    results: TvSeriesListResults[];
    total_pages: number;
    total_results: number;
}

export interface TvSeriesListResults {
    backdrop_path?: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export interface TvSeriesDetails {
    backdrop_path?: string;
    episode_run_time: number[];
    first_air_date: string;
    genres: TvSeriesDetailsGenre[];
    id: number;
    last_air_date: string;
    name: string;
    number_of_episodes: number;
    number_of_seasons: number;
    overview: string;
    popularity: number;
    poster_path: string;
    status: string;
    vote_average: number;
    vote_count: number;
}

export interface TvSeriesDetailsGenre {
    id: number;
    name: string;
}
