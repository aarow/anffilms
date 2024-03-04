import React from "react";

export type Film = {
  id: string;
  title: string;
  imagePath: string;
  Description: React.JSX.Element;
};

const filmData: Film[] = [
  {
    id: '0',
    imagePath: '/img/doa-thumb.png',
    title: 'dead on arrival',
    Description: (
      <>
        <h3>Dead on Arrival</h3>
        <p>
          Deceptive drugs made of fentanyl are killing young people across America at an alarming rate. Fentanyl is infiltrating our communities through counterfeit pills, cocaine and any other street drug you can name. Anonymously sold through social media and delivered within minutes. Killing within minutes. Watch on YouTube
        </p>
        <p>
          <a className="btn btn-primary btn-sm" href="https://www.youtube.com/watch?v=iJgPmrLjkuo&t=6s" target='_blank'>Watch</a>{" "}
          <a className="btn btn-primary btn-sm" href="https://www.youtube.com/watch?v=ix4l7yQfXf4" target='_blank'>Mirar</a>{" "}
          <a className="btn btn-primary btn-sm" href="https://drive.google.com/file/d/19vDRgT72Xyx-fmUUXfgWxNVRNnY-2xmb/view?usp=sharing" target='_blank'>Toolkit</a>
        </p>
      </>
    ),
  }, {
    id: '1',
    imagePath: '/img/safest-place.jpg',
    title: 'The Safest Place',
    Description: (
      <>
        <h3>The Safest Place</h3>
        <p>
          A wave of fentanyl-laced drugs makes Snapchat a game of Russian roulette, ending many young teens&apos;s lives. A growing movement of bereaved families says America values corporate profits over children&apos;s lives.</p>
        <p>
          <a className="btn btn-primary btn-sm" href="https://www.youtube.com/watch?v=egfPrwygpbQ" target='_blank'>Watch</a>
        </p>
      </>
    ),
  }
];

export default filmData;