import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
} from "reactstrap";
import "./NasaCard.css";
import Wrapper from "./styleComponents";
import { findByLabelText } from "@testing-library/react";

const NasaCard = (props) => {
    return (
        <Col>
            <div className='wrapper'>
                <Card className='container' style={{ width: "45%" }}>
                    <CardImg
                        className='image'
                        top
                        width='100%'
                        src={props.picture}
                        alt='Nasa picture of the day'
                    />
                    <CardBody>
                        <CardTitle>{props.nasaData.title}</CardTitle>
                        <CardSubtitle>{props.nasaData.date}</CardSubtitle>
                        <CardText>{props.nasaData.explanation}</CardText>
                    </CardBody>
                </Card>
            </div>
        </Col>
    );
};
export default NasaCard;
