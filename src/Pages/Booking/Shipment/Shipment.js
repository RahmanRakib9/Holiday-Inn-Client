import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
               <h1>hi shipment {id}</h1>
          </div>
     );
};

export default Shipment;