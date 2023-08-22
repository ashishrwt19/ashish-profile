import React from "react";
import hImage from "../assets/html-5.png";
import jImage from "../assets/js.png";
import rImage from "../assets/react.png";
import vImage from "../assets/vue.png";
import nuImage from "../assets/nuxt.png";
import neImage from "../assets/next.png";
import reImage from "../assets/redux.png";
import tImage from "../assets/tailwind.png";
import boImage from "../assets/next.png";

export default function Skills() {
  return (
    <div className="px-5">
      <div className="d-flex gap-5 container px-5">
        <div className="w-100 mt-5 d-flex flex-column align-items-center">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: 55,
              height: 55,
              backgroundColor: "#f6f6f9",
            }}
          >
            <img src={hImage} width={36} height={36} alt="HTML 5" />
          </div>
          <div className="fw-semibold small mt-1 mb-4">HTML 5</div>
          <div className="small fw-bold text-center">100%</div>
          <input
            type="range"
            className="slider"
            value={100}
            readOnly
            style={{
              transform: "rotate(90deg),",
            }}
          />
        </div>
        <div className="w-100 mt-5 d-flex flex-column align-items-center">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: 55,
              height: 55,
              backgroundColor: "#f6f6f9",
            }}
          >
            <img src={jImage} width={32} height={32} alt="javascript" />
          </div>
          <div className="fw-semibold small mt-1 mb-4">Javascript</div>
          <div className="small fw-bold text-center">100%</div>
          <input
            value={100}
            readOnly
            type="range"
            className="slider"
            style={{
              transform: "rotate(90deg),",
            }}
          />
        </div>
        <div className="w-100 mt-5 d-flex flex-column align-items-center">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: 55,
              height: 55,
              backgroundColor: "#f6f6f9",
            }}
          >
            <img src={vImage} width={32} height={32} alt="Vue JS" />
          </div>
          <div className="fw-semibold small mt-1 mb-4">Vue JS</div>

          <div className="small fw-bold text-center">90%</div>
          <input
            type="range"
            value={90}
            readOnly
            className="slider"
            style={{
              transform: "rotate(90deg),",
            }}
          />
        </div>
        <div className="w-100 mt-5 d-flex flex-column align-items-center">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: 55,
              height: 55,
              backgroundColor: "#f6f6f9",
            }}
          >
            <img src={rImage} width={32} height={32} alt="React JS" />
          </div>
          <div className="fw-semibold small mt-1 mb-4">React JS</div>
          <div className="small fw-bold text-center">70%</div>
          <input
            type="range"
            readOnly
            value={70}
            className="slider"
            style={{
              transform: "rotate(90deg),",
            }}
          />
        </div>
        <div className="w-100 mt-5 d-flex flex-column align-items-center">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: 55,
              height: 55,
              backgroundColor: "#f6f6f9",
            }}
          >
            <img src={nuImage} width={32} height={32} alt="Nuxt JS" />
          </div>
          <div className="fw-semibold small mt-1 mb-4">Nuxt JS</div>
          <div className="small fw-bold text-center">100%</div>
          <input
            type="range"
            value={100}
            readOnly
            className="slider"
            style={{
              transform: "rotate(90deg),",
            }}
          />
        </div>
        <div className="w-100 mt-5 d-flex flex-column align-items-center">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: 55,
              height: 55,
              backgroundColor: "#f6f6f9",
            }}
          >
            <img src={tImage} width={32} height={32} alt="Tailwind" />
          </div>
          <div className="fw-semibold small mt-1 mb-4">Tailwind</div>
          <div className="small fw-bold text-center">70%</div>
          <input
            type="range"
            value={70}
            readOnly
            className="slider"
            style={{
              transform: "rotate(90deg),",
            }}
          />
        </div>
      </div>
    </div>
  );
}
