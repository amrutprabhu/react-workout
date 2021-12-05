import React, { Component } from "react";
const NavBar = ({ counters }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">{counters}</span>
        </a>
      </div>
    </nav>
  );
};

// const NavBar = (props) => {
//     return (
//       <nav class="navbar navbar-light bg-light">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">
//             Navbar{" "}
//             <span className="badge badge-pill badge-secondary">
//               {props.counters}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   };

export default NavBar;
