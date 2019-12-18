import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function TopStreams() {
  const [items, changeData] = useState([]);
  useEffect(() => {
    axios.get(`/api/livestreams`).then(results => {
      changeData({ items: results.data });
    });
  }, []);
  return (
    <>  
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

    </>
  );
}
export default TopStreams;
