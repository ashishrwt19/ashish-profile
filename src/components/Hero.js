import React from "react";
import background from "../assets/bg-hero.webp";
import profileImage from "../assets/profile.jpg";
export default function Hero() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center p-5"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div style={{ fontSize: 60, fontWeight: "600" }}>HI, I'M ASHISH</div>
      <div style={{ fontSize: 60, fontWeight: "600" }} className="text-purple">
        FRONT-END WEB DEVELOPER
      </div>
      <div
        style={{
          width: 300,
          height: 300,
        }}
        className="border-purple border rounded-circle mt-5 overflow-hidden"
      >
        <img
          style={{ objectFit: "cover" }}
          width={300}
          height={300}
          src={profileImage}
        />
      </div>

      <div className="mt-5 fw-semibold fs-5">
        I'm Ashish a front-end web developer based in India.
        <br />I create captivating, user-centered frontend experiences using
        React and Vue.js.
      </div>

      <div className="text-purple mt-5" style={{ fontFamily: "cursive", fontStyle: 'italic'}}>
        Ashish Rawat
      </div>
    </div>
  );
}
