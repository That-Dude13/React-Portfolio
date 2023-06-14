// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
// //   MDBCol,
// //   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
//       <MDBContainer className='pt-4'>
//         <section className='mb-4'>
//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fab fa-facebook-f' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-twitter' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-google' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-instagram' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-linkedin' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-github' />
//           </MDBBtn>
//         </section>
//       </MDBContainer>

//       <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2020 Copyright:
//         <a className='text-dark' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }

import React, { Component } from "react";
 
class Footer extends Component {
  render() {
    return (
      <div>
        <h2>STUFF</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}
 
export default Footer;