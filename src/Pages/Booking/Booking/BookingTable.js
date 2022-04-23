import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../Shared/Header/Header.css'

const BookingTable = ({ booking, handleBookingData }) => {
     const { bedType, price, _id } = booking;

     return (
          <section style={{ textAlign: 'center', fontFamily: 'Arial, Helvetica, sans-serif' }}>
               <Table striped bordered hover>
                    <thead>
                         <tr>
                              <th>Room Type</th>
                              <th>Price in BDT</th>
                              <th>Book Online</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr>
                              <td>{bedType}</td>
                              <td>{price}৳</td>
                              <td><Link to={`/shipment/${_id}`}>
                                   <Button className='authentication-btn' >Book</Button>
                              </Link></td>
                         </tr>
                    </tbody>
               </Table>
          </section>
     );
};

export default BookingTable;