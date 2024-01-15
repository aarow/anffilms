import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });


export default function FilmPoster() {
  return (
    <div className="background-player d-flex justify-content-center align-items-center">
      <ReactPlayer
        url="/img/cast.mp4"
        playing={true}
        loop={true}
        muted={true}
        height="100%"
        width="100%"
      />
      <div className="position-relative">
        <ReactPlayer
          url="https://www.youtube.com/embed/kdedgBKsLGk?si=7nRstBQB1_YicDFI"
        />
      </div>
    </div>
  );
}