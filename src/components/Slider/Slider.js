import React from 'react'
import { Carousel, Container, Row } from 'react-bootstrap';

const Slider = () => {
  return (
    <Container fluid className="slider">
      <Row>
        <Carousel className="main_page_slider">
          <Carousel.Item interval={900}>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img
              className="slider_image"
              src="https://mobirise.com/extensions/commercem4/assets/images/galleries-1-1200x800.png
"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item interval={900}>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img
              className="slider_image"
              src="https://i.pinimg.com/1200x/b6/89/96/b68996b0aeb13339740f961ada455a77.jpg"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item interval={900}>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img
              className="slider_image"
              src="https://4.imimg.com/data4/TX/JE/GLADMIN-30141012/wp-content-uploads-2016-05-indiabbazaar-e-commerce.jpg"
              alt=""
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}

export default Slider