import React from 'react';
import { Table } from 'react-bootstrap';
import '../../Shared/Header/Header.css'

const BookingTable = ({ booking }) => {
     const { bedType, price } = booking;
     return (
          <section style={{ textAlign: 'center' }}>
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
                              <td><button className='authentication-btn'>Book</button></td>
                         </tr>
                    </tbody>
               </Table>
          </section>
     );
};

export default BookingTable;