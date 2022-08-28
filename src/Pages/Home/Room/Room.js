import React from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Room.css";
import "../../Shared/Header/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Room = ({ room }) => {
  const {
    roomTitle,
    description,
    photo,
    bed,
    bedCapacity,
    bedType,
    price,
    _id,
  } = room;

  const navigate = useNavigate();
  const handleBooking = (ID) => {
    navigate(`/book/${ID}/`);
  };

  return (
    <Col
      className="d-flex justify-content-center mt-4"
      style={{ border: "2px solid green" }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="image"
          variant="top"
          src={`data:image/jpeg;base64,${photo}`}
        />
        <Card.Body
          style={{ textAlign: "center", backgroundColor: "rgb(232,232,232)" }}
        >
          <Card.Title className="room-title">{roomTitle}</Card.Title>
          <Card.Text>
            <Button
              className="authentication-btn"
              onClick={() => handleBooking(_id)}
            >
              View {roomTitle} <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Room;
