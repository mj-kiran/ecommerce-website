// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { productDetail } from "../../actions/ecommerceActions";
// import { Link, useParams } from "react-router-dom";
// import { Col, Image, ListGroup, Row }from 'react-bootstrap'

// const Productdetails = () => {
//   const { productId } = useParams();
//   const productDetails = useSelector((state) => state.productDetails);
//     const { image, title, description, price, category } = productDetails;

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(productDetail(productId));
//   }, [dispatch, productId]);
//   // if (!productDetails) {
//   //   return <div>Loading...</div>; // You can show a loading indicator here
//   // }
  

//   return (
//     <>
      
//       {Object.keys(productDetails).length === 0 ? (<div>Loading...</div>)
//         : (
//           <>
//      <Link className="btn btn-outline-dark ms-2 my-3 rounded bt-sm" to="/">
//         Back
//       </Link>
//       <Row className="my-2">
//         <Col md={3}>
//           <Image className="img ms-2 " src={image} alt={title} fluid />
//         </Col>
//         <Col md={4}>
//           <ListGroup.Item>
//             <h2>{title}</h2>
//           </ListGroup.Item>
//           <ListGroup.Item>
//             <p>Category: {category}</p>
//           </ListGroup.Item>
//           <ListGroup.Item>
//             <p>Price : {price}</p>
//           </ListGroup.Item>
//         </Col>
//         <Col md={4}>
//           <ListGroup.Item>
//             <h4>Description : {description}</h4>
//           </ListGroup.Item>
//         </Col>
//             </Row>
//             </>
//         )
// }
//     </>
//   );
// };

// export default Productdetails;