import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function MyPage() {
  const [info, setInfo] = useState([]);
  const [follow, setFollows] = useState([]);

  let url = document.location.hash,
    hash = url.split("&")[0];
  let splitted = hash
    .split("")
    .slice(20)
    .join("");

  useEffect(() => {
    axios
      .post(`/api/me`, {
        Id: splitted
      })
      .then(response => {
        setInfo({ info: response.data });
      });
  }, []);

  useEffect(() => {
    axios
      .post(`/api/streams/followed`, {
        Id: splitted
      })
      .then(response => {
        setFollows({ follow: response.data });
      });
  }, []);

  console.log(follow);
  return (
    <>
      <div>{info.info ? `welcome ${info.info.name}` : ""}</div>
      <div>
        <h1>Here is your follows that are online</h1>
        {follow.follow
          ? follow.follow.streams.map(item => {
              return (
                <div>
                  <p>{item.channel.display_name}</p>
                  <Link to={`/player/${item.channel.name}`}>
                    {" "}
                    <img src={item.preview.small} />
                  </Link>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}

export default MyPage;
