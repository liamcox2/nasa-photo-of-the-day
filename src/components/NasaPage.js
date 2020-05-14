import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import { Container, Row } from "reactstrap";

let NasaPage = () => {
    let [nasaPicture, setNasaPicture] = useState([]);
    let [nasaData, setNasaData] = useState([]);

    let apiKey = "4JvTaNIPf7rTFeFiwsuKroz9oDItZ0CtKI1Q5bRL";
    let url =
        "https://api.nasa.gov/planetary/apod?api_key=4JvTaNIPf7rTFeFiwsuKroz9oDItZ0CtKI1Q5bRL";

    useEffect(() => {
        axios
            .get(
                "https://api.nasa.gov/planetary/apod?api_key=4JvTaNIPf7rTFeFiwsuKroz9oDItZ0CtKI1Q5bRL",
            )
            .then((response) => {
                const data = response.data;
                let picture = response.data.hdurl;
                console.log(data);
                console.log(picture);
                setNasaPicture(picture);
                setNasaData(data);
            })
            .catch((error) => {
                console.log("Sorry no nasa picture", error);
            });
    }, []);

    console.log(nasaPicture);

    return (
        <Container>
            <Row>
                <NasaCard picture={nasaPicture} nasaData={nasaData} />;
            </Row>
        </Container>
    );
};

export default NasaPage;
