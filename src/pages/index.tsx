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
                      <strong className="fst-italic text-white">Come Back Home</strong> is a trek through the ever growing illicit drug industry that is reshaping American life, destroying people, and changing history.
                    </p>
                    <p className="text-center text-off-white">
                      A little bit of information would have gone a long way in our home. That is why we want to prepare you and your family. This may never happen in your home, but eventually you will know someone this issue has impacted. Alexander Neville Foundation is a volunteer run organization. We provide quality, low or no cost, drug prevention and social media harms awareness presentations to schools  and  communities. To continue offering these programs and services, please consider making a donation. Thank you.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="film-cast bg-gray">
              <div className="container">
                <h2 className="display-4 text-center mb-5 text-white">Youth in the Film</h2>
                <Team team={cast} />
              </div>
            </section>
            <section className="testimonials bg-black">
              <div className="container">
                <h2 className="display-4 text-center mb-5 text-white">
                  Free Resources
                </h2>
                <div className="row mb-5">
                  <div className="col-lg-8 offset-lg-2">
                    <p>These resources complement the film, <strong>Come Back Home</strong>. These are organizations that ANF personally endorses for material in the classroom and other areas of life.</p>
                  </div>
                </div>
               
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                  <div className="col">
                    <div className="card h-100 border-0">
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
                        <p className="card-text lh-sm">
                          The Alexander Neville foundation is proud to have partnered with the DEA and Discovery Education for their Virtual field trip. This education is great for the classroom.
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
                        <p className="card-text lh-sm">
                          ANF is part of the Substance abuse coalition leaders of Arizona, We are the fiscal agent for the Drug Free Communities grant recipient coalition The Southeast Valley Community Alliance. We are thrilled to bring SACLAZ education to the San Tan Valley, Queen Creek, and Florence communities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="other-movies bg-gray">
              <div className="container">
                <h2 className="display-4 text-center mb-5 text-white">
                  Our Other Films
                </h2>
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
