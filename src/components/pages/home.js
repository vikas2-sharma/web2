import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenSection from "./men";

function Home(props) {
  const imageList = [
    { productURL: require("../../images/shirt.jpg"), productName: "Shirt" },
    { productURL: require("../../images/hoodie.jpg"), productName: "Hoodie" },
    { productURL: require("../../images/shirts.jpg"), productName: "Shirt" },
  ];
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);
  const nextImage = () => {
    setImageIndex((imageIndex + 1) % imageList.length);
  };
  const preImage = () => {
    setImageIndex((imageList.length + imageIndex - 1) % imageList.length);
  };
  useEffect(() => {
    // setTimeout(() => {
    //   console.log("timmout");
    //   navigate("/men");
    // }, 3000);
  }, []);
  const pURL = imageList[imageIndex];
  // console.log(pURL);

  return (
    <>
      <div>
        <div>
          <div className="banner-container">
            <div className="banner-button">
              <div
                style={{
                  left: "0px",
                }}
                onClick={preImage}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div
                style={{
                  right: "0px",
                }}
                onClick={nextImage}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
            {/* <div className="banner-button"></div> */}
            <img
              className="product-banner"
              src={imageList[imageIndex].productURL}
            />
          </div>
          <div>
            <MenSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
