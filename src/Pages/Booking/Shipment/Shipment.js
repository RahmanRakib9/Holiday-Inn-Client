import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShipmentForm from './ShipmentForm';

const Shipment = () => {
     const { id } = useParams();
     const [shipment, setShipment] = useState({});



     useEffect(() => {
          fetch(`http://localhost:5000/shipment/${id}`)
               .then(res => res.json())
               .then(data => {
                    setShipment(data)
                    console.log(data);
               })
     }, [])


     return (
          <div>
               {/* <h1>hi shipment {id}</h1> */}
               <ShipmentForm />
          </div>
     );
};

export default Shipment;