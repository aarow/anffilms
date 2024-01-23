import Image from "next/image";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface TeamMemberProps {
  id: string;
  name: string;
  imagePath: string;
  bio: string;
}

export default function TeamMember({
  id, name, imagePath, bio,
}: TeamMemberProps) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="card text-white hover-brightness">
        <img src={imagePath} alt={name} className="card-img" />
        <div
          className="card-img-overlay d-flex flex-column justify-content-end mb-1 text-center"
        >
          <h5 className="card-title m-0">{name}</h5>
          <p className="card-text">
            <Button onClick={() => setShow(true)} variant="link" className="text-white"><small><i>See Bio</i></small></Button>
          </p>
        </div>
      </div>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="display-6">
            {name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <Image src={imagePath} alt={name} width={128} height={128} />
              </div>
              <div className="col-lg-8 ">
                <div dangerouslySetInnerHTML={{ __html: bio }} />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}