import dynamic from "next/dynamic";
import { useState } from "react";
import { Button, CloseButton, Modal } from "react-bootstrap";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });


export default function FilmPoster() {
  const [show, setShow] = useState(false);
  return (
    <div className="background-player d-flex justify-content-center align-items-center">
      <ReactPlayer
        url="/img/intro.mp4"
        playing={true}
        loop={true}
        muted={true}
        height="100%"
        width="100%"
      />
      <div className="position-relative text-center">
        <h1 className="display-1 text-white bg-black p-3 filmTitle">Come Back Home</h1>
        <Button size="lg" onClick={() => setShow(true)} style={{ border: '2px solid black'}}>Watch Film</Button>
        <Modal show={show} fullscreen={true} data-bs-theme="dark">
          <Modal.Header className="bg-black border-0">
            <CloseButton onClick={() => setShow(false)} />
          </Modal.Header>
            <ReactPlayer
              url="https://www.youtube.com/embed/kdedgBKsLGk?si=7nRstBQB1_YicDFI"
              width="100%"
              height="100%"
            />
        </Modal>
      </div>
    </div>
  );
}

/*
<ReactPlayer
          url="https://www.youtube.com/embed/kdedgBKsLGk?si=7nRstBQB1_YicDFI"
        />
        */