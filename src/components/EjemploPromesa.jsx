// import React, { useState, useEffect } from "react";

// export default function EjemploPromesa() {
//   const [prod, setProd] = useState([]);

//   useEffect(() => {
//     const promesaProductos = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(["pan", "leche", "carne", "pollo"]);
//       }, 2000);
//     });
//     promesaProductos.then((res) => {
//       console.log(promesaProductos);
//       setProd(res);
//     });
//   });
//   return (
//     <>
//       <p>Hola</p>
//       {prod.map((item) => {
//         return <p>{item}</p>;
//       })}
//     </>
//   );
// }
