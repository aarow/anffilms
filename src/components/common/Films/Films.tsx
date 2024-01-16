import Carousel from 'react-bootstrap/Carousel';

function Films() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="/img/doa-thumb.png" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Dead on Arrival</h3>
          <p className="lh-1">
            <small>
            Deceptive drugs made of fentanyl are killing young people across America at an alarming rate. Fentanyl is infiltrating our communities through counterfeit pills, cocaine and any other street drug you can name. Anonymously sold through social media and delivered within minutes. Killing within minutes. Watch on YouTube
          </small>
          </p>
          <p>
            <a className="btn btn-primary btn-sm" href="https://www.youtube.com/watch?v=iJgPmrLjkuo&t=6s" target='_blank'>Watch</a>{" "}
            <a className="btn btn-primary btn-sm" href="https://www.youtube.com/watch?v=ix4l7yQfXf4" target='_blank'>Mirar</a>{" "}
            <a className="btn btn-primary btn-sm" href="https://drive.google.com/file/d/19vDRgT72Xyx-fmUUXfgWxNVRNnY-2xmb/view?usp=sharing" target='_blank'>Toolkit</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/safest-place.jpg" className="d-block w-100" />
        <Carousel.Caption>
          <h3>The Safest Place</h3>
          <p className="lh-1">
            <small>A wave of fentanyl-laced drugs makes Snapchat a game of Russian roulette, ending many young teens&apos;s lives. A growing movement of bereaved families says America values corporate profits over children&apos;s lives.</small></p>
          <p>(coming soon)</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Films;