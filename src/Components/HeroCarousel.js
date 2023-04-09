import Carousel from 'react-bootstrap/Carousel';

const HeroCarousel = () => (
  <Carousel fade>
    <Carousel.Item>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      <button type="button" className="click1">click</button>
    </Carousel.Item>
    <Carousel.Item>
      <button type="button" className="click1">click</button>
    </Carousel.Item>
    <Carousel.Item>
      <button type="button" className="click1">click</button>
    </Carousel.Item>

  </Carousel>
);

export default HeroCarousel;
