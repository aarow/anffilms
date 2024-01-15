import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AppGuides from "@/components/AppGuides";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ExampleComponents from "@/components/ExampleComponents";
import Team from "@/components/common/Team/Team";
import cast from "@/data/cast";
import FilmPoster from "@/components/FilmPoster";
import Films from "@/components/common/Films/Films";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Head>
        <title>Come Back Home (Film)</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <header></header>
        <main>
          <article className="main-film">
            <section className="film-poster bg-gray">
              <FilmPoster />
            </section>
            <section className="about-film bg-black">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-xl-8 offset-lg-2 offset-xl-2">
                    <h2 className="display-4 text-center mb-5 text-white">
                      A Quick Note
                    </h2>
                    <p className="text-center text-off-white">
                      <strong className="fst-italic text-white">Come Back Home</strong>
                      Delves into...
                    </p>
                    <p className="text-center text-off-white">
                      The Alexander Neville Foundation is an volunteer run
                      organization, we pride ourselves on providing quality low cost
                      or no cost drug prevention and social media harms awareness
                      presentations to schools and communities. This education ins
                      incredibly omportant and we would never want money to be the
                      reason someone does not have us speak. A little bit of
                      information would have gone a long way in our home, our goal
                      is to prepare you and your family for the worst. This issue my
                      not happen in your home but the reality that you/your child
                      will know some one this has impacted. For those that can
                      donate we greatly appreciate it, your generosity help us
                      provide the education for free
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* <section className="watch-film bg-black">
              <div className="container">
                <h2 className="display-4 text-center mb-5 text-white">
                  Come Back Home
                </h2>
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="iframe-container">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/kdedgBKsLGk?si=7nRstBQB1_YicDFI"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            <section className="film-cast bg-gray">
              <div className="container">
                <h2 className="display-4 text-center mb-5 text-white">Youth in the Film</h2>
                <Team team={cast} />
              </div>
            </section>
            <section className="testimonials bg-black">
              <div className="container">
                <h2 className="display-4 text-center mb-5 text-white">
                  Film Resources
                </h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                  <div className="col">
                    <div className="card h-100">
                      <a
                        href="https://operationprevention.com/virtual-field-trip"
                      >
                        <div className="d-flex align-items-center h-100 w-100">
                          <img
                            src="/img/resources/ounce-of-prevention-virtual-field-trip.png"
                            className="w-100 m-auto"
                            alt="Operation Prevention - Discovery Education"
                          />
                        </div>
                      </a>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is a
                          little bit longer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <a href="https://saclaz.org">
                        <div className="d-flex align-items-center h-100 w-100 p-5">
                          <img
                            src="/img/resources/saclaz.png"
                            className="w-100 m-auto"
                            alt="Substance Abuse Coalition Leaders of America"
                          />
                        </div>
                      </a>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is a
                          little bit longer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="other-movies bg-gray">
              <div className="container">
                <h2 className="display-4 text-center mb-5 text-white">Other Films</h2>
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                  <Films />
                  </div>
                </div>
              </div>
            </section>
          </article>
        </main>
        <footer>
          <section className="contact-us">
            <h2 className="mb-5 text-center">Contact Us</h2>
          </section>
          <section className="colophon">
            &copy; 2024 Alexander Neville Foundation
          </section>
        </footer>
      </>
    </>
  );
}
