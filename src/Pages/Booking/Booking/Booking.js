import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./Booking.css";
import Complimentary from "./Complimentary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPerson } from "@fortawesome/free-solid-svg-icons";
import BookingTable from "./BookingTable";
import Footer from "../../Shared/Footer/Footer";

const Booking = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/rooms/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
        console.log("dataaaaaa", data);
      });
  }, [id]);

  return (
    <section>
      {/* section header start from here */}
      <header className="booking-header mt-2">
        <div className="container alignment">
          <div className="mt-4">
            <h1>{booking.roomTitle}</h1>
            <Link className="homePage-option" to="/">Home</Link> / <span className="active-page">Room-Details</span>
          </div>
        </div>
      </header>
      {/* section header end here */}
      <Container className="d-flex justify-content-center">
        {/* Row start from here */}
        <Row className="w-100">
          {/* col-1 start from here */}
          <Col xs={12} md={7}>
            <img
              style={{ width: "100%", marginTop: "70px" }}
              src={`data:image/jpeg;base64,${booking.photo}`}
              alt=""
            />
            <div className="room-element-container">
              <span className="room-element">
                Price in BDT: {booking.price}৳
              </span>
              <span className="room-element">
                <FontAwesomeIcon icon={faBed} /> Bed-Type: {booking.bedType}
              </span>
              <span className="room-element">
                <FontAwesomeIcon icon={faPerson} /> Bed-Capacity:{" "}
                {booking.bedCapacity}
              </span>
            </div>
            <div
              style={{
                fontSize: "medium",
                fontFamily: "font-family:Arial, Helvetica, sans-serif",
              }}
            >
              <p>
                {booking.description} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptates distinctio tenetur, non
                consequuntur provident sapiente et ullam natus quos perferendis.{" "}
              </p>
            </div>
          </Col>
          {/* col-1 end here */}
          {/* col-2 start from here */}
          <Col
            xs={12}
            md={5}
            className="d-flex justify-content-center align-items-center"
          >
            <Complimentary />
          </Col>
          {/* col-2 end here */}
        </Row>
        {/* Row end here */}
      </Container>
      {/* Booking table section start here */}
      <section style={{ marginTop: "30px" }}>
        <Container>
          <BookingTable booking={booking}></BookingTable>
        </Container>
      </section>
      {/* Booking table section end here */}
      <section style={{ marginTop: "80px" }}>
        <hr />
        {/* footer start from here */}
        <Footer></Footer>
        {/* footer end here */}
      </section>
    </section>
  );
};

export default Booking;
