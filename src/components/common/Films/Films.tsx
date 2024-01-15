import Carousel from 'react-bootstrap/Carousel';

function Films() {
  return (
    <Carousel >
      <Carousel.Item>
        <img src="/img/doa-thumb.png" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Dead on Arrival</h3>
          <p><a className="btn btn-primary" href="https://www.youtube.com/watch?v=iJgPmrLjkuo&t=6s" target='_blank'>Watch Now</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/safest-place.jpg" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Safest Place</h3>
          <p>(Coming Soon)</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Films;