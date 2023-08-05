import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  useEffect(() => {
    // setTimeout(() => {
    //   console.log("timmout");
    //   navigate("/men");
    // }, 3000);
  }, []);
  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          console.log("logo click");
          navigate("/men");
        }}
      >
        <h1>Home</h1>
      </div>
    </>
  );
}

export default Home;
