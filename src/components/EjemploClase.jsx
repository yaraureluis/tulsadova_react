// import React, { useState, useEffect } from "react";

// export default function EjempoloClase(params) {
//   const [arrayProductos, setArrayProductos] = useState([]);

//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon")
//       .then((response) => response.json())
//       .then(function (res) {
//         setArrayProductos(res.results);
//       });
//   }, []);

//   return (
//     <>
//       {arrayProductos.map((item) => {
//         return <div>{item.name}</div>;
//       })}
//     </>
//   );
// }
