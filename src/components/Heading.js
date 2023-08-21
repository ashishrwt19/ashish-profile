import React from "react";

export default function Heading({heading, description}) {
  return (
    <div>
      <div
        style={{
          fontSize: 150,
          fontWeight: "bold",
          background:
            "linear-gradient(to bottom, #5b46af60 0%, transparent 70%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {heading}
      </div>
      <div className="container px-5 text-center">
        {description}
      </div>
    </div>
  );
}
