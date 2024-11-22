import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="tutor" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Tutor</h2>
          <p>
           We offer classes, but note that we are not oparating as a full class. It cost <b>R380.00</b> pm. for TWO subjects ONLY
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
