import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Room from "../Room/Room";
import "./Rooms.css";

const Rooms = () => {
  const [roomType, setRoomType] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRoomType(data);
        console.log(data);
      });
  }, []);

  return (
    <Container>
      {/* section header start from here */}
      <header className="section-header">
        <h1>OUR FAVORITE ROOMS</h1>
        <h6>
          CHECK OUT NOW OUR BEST <span style={{ color: "#328ca8" }}>ROOMS</span>
        </h6>
      </header>
      {/* section header end here */}

      {/* Row start from here */}
      <div className="card-container mt-3">
        {roomType.map((room) => (
          <Room room={room} key={room._id}></Room>
        ))}
      </div>
      {/* Row end here */}
    </Container>
  );
};

export default Rooms;
