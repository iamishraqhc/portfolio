import React from "react";
import image from "../image/barbados.jpg";
import video from "../video/BlueOcean3.mp4"

export default function Home() {
  return (
    <main>
      {/* <img
        src={image}
        alt="Mauritius"
        className="absolute object-cover w-full h-full"
      /> */}
      {/* <video loop autoplay className="absolute object-cover w-full h-full VideoTag">
        <source src={video} type="video/mp4" />
      </video> */}
      <video className="absolute object-cover w-full h-full VideoTag" src={video} autoPlay loop muted> </video>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hello! I'm Ishraq.
        </h1>
      </section>
    </main>
  );
}
