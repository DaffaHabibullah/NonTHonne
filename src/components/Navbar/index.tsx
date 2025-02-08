// import { useState, useEffect } from "react";
import { Container, Navbar, Nav, Form, InputGroup } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

const NavbarComponent = () => {
    // const [currentDateTime, setCurrentDateTime] = useState("");

    // useEffect(() => {
    //     const updateDateTime = () => {
    //         const date: Date = new Date();
    //         const userLocale: string = navigator.language || "en-US";

    //         const todayPrefix: string = userLocale.startsWith("id")
    //             ? "Hari ini: "
    //             : "Today: ";

    //         const formattedDate: string = new Intl.DateTimeFormat(userLocale, {
    //             weekday: "long",
    //             day: "numeric",
    //             month: "long",
    //             year: "numeric",
    //         }).format(date);

    //         const formattedTime: string = new Intl.DateTimeFormat(userLocale, {
    //             hour: "2-digit",
    //             minute: "2-digit",
    //             hour12: false,
    //             timeZoneName: "short",
    //         }).format(date);

    //         setCurrentDateTime(
    //             `${todayPrefix}${formattedDate} | ${formattedTime}`
    //         );
    //     };

    //     updateDateTime();
    //     const intervalId: number = setInterval(updateDateTime, 1000);

    //     return () => clearInterval(intervalId);
    // }, []);

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">NonTHonne</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/movie/list">Movies</Nav.Link>
                            <Nav.Link href="/tv/list">TV</Nav.Link>
                            <Nav.Link href="/favorite">Favorite</Nav.Link>
                        </Nav>

                        {/* <Navbar.Text>{currentDateTime}</Navbar.Text> */}

                        <Form className="d-flex">
                            <InputGroup>
                                <InputGroup.Text>
                                    <SearchIcon />
                                </InputGroup.Text>
                                <Form.Control
                                    type="search"
                                    placeholder="Search..."
                                    aria-label="Search"
                                    style={{ width: "256px" }}
                                />
                            </InputGroup>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;
