export interface MovieListNowPlaying {
    dates: MovieListDates;
    page: number;
    results: MovieListResults[];
    total_pages: number;
    total_results: number;
}

export interface MovieListPopular {
    page: number;
    results: MovieListResults[];
    total_pages: number;
    total_results: number;
}

export interface MovieListTopRated {
    page: number;
    results: MovieListResults[];
    total_pages: number;
    total_results: number;
}

export interface MovieListUpcoming {
    dates: MovieListDates;
    page: number;
    results: MovieListResults[];
    total_pages: number;
    total_results: number;
}

export interface MovieListDates {
    maximum: string;
    minimum: string;
}

export interface MovieListResults {
    backdrop_path?: string;
    genre_ids: number[];
    id: number;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieDetails {
    backdrop_path?: string;
    genres: MovieDetailsGenre[];
    id: number;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieDetailsGenre {
    id: number;
    name: string;
}
