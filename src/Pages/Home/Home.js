import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { StyledHome } from "./Home.styled";
import Featured from "../../Components/Featured/Featured"
import TopStreams from "../../Components/TopStreams/TopStreams"
function Home() {
  console.log(props)
  return (
    <>
      <StyledHome>
        <TopStreams/>
        <Featured/>
      </StyledHome>
    </>
  );
}
export default Home;
