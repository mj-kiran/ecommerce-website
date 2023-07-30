import React,{useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Products from '../Products/Products';
import Slider from '../../components/Slider/Slider';
import { listProducts } from '../../actions/ecommerceActions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
 const dispatch=useDispatch()
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch])
  const items = useSelector((state) => state.products);
  const { products } = items
  console.log(products,"products");
  return (
    <div>
      <Row className='slider_part'>
        <Col>
          {/* <Slider /> */}
        </Col>
      </Row>



      <Container  className='products_container'>
        <Row>
          {products
            ? products.map((item) => (
                <Col xs={12} sm={6} md={4} xl={3}>
                  <Products item={item} />
                </Col>
              ))
            : "error"}
        </Row>
      </Container>
    </div>
  );
}

export default Home