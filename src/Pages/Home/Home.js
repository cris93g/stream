import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { StyledHome } from "./Home.styled";
function Home() {
  const [items, changeData] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    axios.get(`/api/livestreams`).then(results => {
      changeData({ items: results.data });
    });
  }, []);

  useEffect(() => {
    axios.get(`/api/streams/featured`).then(response => {
      setFeatured({ featured: response.data });
    });
  }, []);
  console.log(featured);
  return (
    <>
      <StyledHome>
        {items.items
          ? items.items.map(item => {
              return (
                <div>
                  <Link to={`/player/${item.channel.name}`}>
                    {" "}
                    <img
                      style={{ borderRadius: "20px" }}
                      src={item.preview.medium}
                    />
                  </Link>
                  <p>{item.game}</p>
                  <p>{item.channel.name}</p>
                </div>
              );
            })
          : ""}
      </StyledHome>
    </>
  );
}
export default Home;
