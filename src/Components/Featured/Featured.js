import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Featured() {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    axios.get(`/api/streams/featured`).then(response => {
      setFeatured({ featured: response.data.featured });
    });
  }, []);
  console.log(featured);
  return (
    <>
        {featured.featured
          ? featured.featured.map(item => {
              return (
                <div>
                  <Link to={`/player/${item.stream.channel.name}`}>
                    {" "}
                    <img
                      style={{ borderRadius: "20px",boxShadow:"2px" }}
                      src={item.image}
                    />
                  </Link>
                  <p>{item.stream.channel.game}</p>
                  <p>{item.stream.channel.name}</p>
                </div>
              );
            })
          : ""}    
    </>
  );
}
export default Featured;
