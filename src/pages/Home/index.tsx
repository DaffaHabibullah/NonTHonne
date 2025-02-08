import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Image, Badge } from "react-bootstrap";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import StarIcon from "@mui/icons-material/Star";
import { getW500Images } from "../../api/tmdb";
import { getMoviesNowPlaying } from "../../api/movie";
import { getTvAiringToday } from "../../api/tv";

interface Data {
    id: number;
    backdrop_path?: string;
    overview: string;
    poster_path: string;
    vote_average: number;
}

interface Movie extends Data {
    title: string;
    release_date: string;
}

interface TvSeries extends Data {
    name: string;
    first_air_date: string;
}

const Home = () => {
    const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([]);
    const [tvAiringToday, setTvAiringToday] = useState<TvSeries[]>([]);
    const [totalMovieResults, setTotalMovieResults] = useState<number>(0);
    const [totalTvResults, setTotalTvResults] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMoviesNowPlaying = async () => {
            try {
                const response = await getMoviesNowPlaying(1);
                setMoviesNowPlaying(response.results);
                setTotalMovieResults(response.total_results);
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            }
        };

        const fetchTvAiringToday = async () => {
            try {
                const response = await getTvAiringToday(1);
                setTvAiringToday(response.results);
                setTotalTvResults(response.total_results);
            } catch (error) {
                console.error("Failed to fetch TV shows:", error);
            }
        };

        fetchMoviesNowPlaying();
        fetchTvAiringToday();
    }, []);

    const renderCard = (item: Movie | TvSeries, isMovie: boolean) => (
        <Col key={item.id} className="mb-2">
            <Card
                onClick={() =>
                    navigate(`/${isMovie ? "movie" : "tv"}/detail/${item.id}`)
                }
                style={{
                    height: "100%",
                    backgroundColor: "#121417",
                    color: "#FFFFFF",
                    cursor: "pointer",
                }}
            >
                <Image
                    src={getW500Images(item.poster_path)}
                    alt={"title" in item ? item.title : item.name}
                    style={{
                        height: "384px",
                        width: "100%",
                        boxShadow: "0px 0px 100px 0px #343A40",
                    }}
                    rounded
                />
                <div>
                    <p className="mt-2 mb-2 p-0" style={{ fontSize: "16px" }}>
                        {"title" in item ? item.title : item.name}
                    </p>
                    <span style={{ color: "#CED4DA", fontSize: "14px" }}>
                        {
                            ("release_date" in item
                                ? item.release_date
                                : item.first_air_date
                            ).split("-")[0]
                        }
                    </span>
                </div>
                <span
                    style={{
                        position: "absolute",
                        top: "12px",
                        right: "0px",
                        padding: "2px 6px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        borderRadius: "4px 0px 0px 4px",
                        fontSize: "14px",
                    }}
                >
                    <StarIcon
                        fontSize="small"
                        style={{ marginBottom: "2px", color: "gold" }}
                    />
                    {item.vote_average.toFixed(1)}
                </span>
            </Card>
        </Col>
    );

    return (
        <Container style={{ marginTop: "32px", marginBottom: "128px" }}>
            <section>
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="mb-3">
                        <LocalFireDepartmentIcon
                            style={{ marginRight: "6px", color: "red" }}
                            fontSize="large"
                        />
                        Movie Now Playing
                    </h2>
                    <Badge
                        pill
                        bg="danger"
                        style={{ fontSize: "14px", marginBottom: "16px" }}
                    >
                        {totalMovieResults} results
                    </Badge>
                </div>
                <Row xs={1} sm={2} md={2} lg={4} className="g-4">
                    {moviesNowPlaying
                        .slice(0, 16)
                        .map((movie) => renderCard(movie, true))}
                </Row>
            </section>

            <section style={{ marginTop: "48px" }}>
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="mb-3">
                        <LocalFireDepartmentIcon
                            style={{ marginRight: "6px", color: "red" }}
                            fontSize="large"
                        />
                        TV Airing Today
                    </h2>
                    <Badge
                        pill
                        bg="danger"
                        style={{ fontSize: "14px", marginBottom: "16px" }}
                    >
                        {totalTvResults} results
                    </Badge>
                </div>
                <Row xs={1} sm={2} md={2} lg={4} className="g-4">
                    {tvAiringToday
                        .slice(0, 16)
                        .map((tv) => renderCard(tv, false))}
                </Row>
            </section>
        </Container>
    );
};

export default Home;
