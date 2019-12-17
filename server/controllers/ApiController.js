const axios = require("axios");
const { KEY } = process.env;

let getLogin = async (req, res) => {
  let client_id = KEY;
  let redirect_uri = "http://localhost:3000/#/mine";
  let scopes =
    "channel_check_subscription channel:read:subscriptions user_subscriptions analytics:read:games user_follows_edit user_read user_subscriptions user:read:email user:read:broadcast";
  let token = `token`;
  res.redirect(
    "https://id.twitch.tv/oauth2/authorize" +
      "?response_type=" +
      token +
      "&client_id=" +
      client_id +
      (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" +
      encodeURIComponent(redirect_uri)
  );
};

let getUser = async (req, res) => {
  let { Id } = req.body;
  console.log(req.body);
  req.session.user.push(Id);
  let info = await axios.get(`https://api.twitch.tv/kraken/user`, {
    headers: {
      "Client-ID": KEY,
      Authorization: `OAuth ${Id}`,
      Accept: `application/vnd.twitchtv.v5+json`
    }
  });

  let results = info.data;
  if (results) {
    res.status(200).json(results);
  }
};
let getTopTwitchGames = async (req, res) => {
  let info = await axios.get(
    `https://api.twitch.tv/kraken/games/top?&limit=5`,
    {
      headers: {
        "Client-ID": KEY,
        Accept: `application/vnd.twitchtv.v5+json`
      }
    }
  );
  let results = info.data;
  if (results) {
    res.status(200).json(results);
  }
};

let getLiveStreams = async (req, res) => {
  let info = await axios.get(`https://api.twitch.tv/kraken/streams/?&limit=5`, {
    headers: {
      "Client-ID": KEY,
      Accept: `application/vnd.twitchtv.v5+json`
    }
  });
  let results = info.data.streams;
  if (results) {
    res.status(200).json(results);
  }
};

let getMyFollowedStreams = async (req, res) => {
  let { Id } = req.body;
  let info = await axios.get(`https://api.twitch.tv/kraken/streams/followed`, {
    headers: {
      "Client-ID": KEY,
      Authorization: `OAuth ${Id}`,
      Accept: `application/vnd.twitchtv.v5+json`
    }
  });
  let results = info.data;
  if (results) {
    res.status(200).json(results);
  }
};

let getSearchChannels = async (req, res) => {
  let { search } = req.body;
  let info = await axios.get(
    `https://api.twitch.tv/kraken/search/channels?query=${search}`,
    {
      headers: {
        "Client-ID": KEY,
        Accept: `application/vnd.twitchtv.v5+json`
      }
    }
  );
  let results = info.data;
  if (results) {
    res.status(200).json(results);
  }
};

let followChannel = async (req, res) => {
  let { channelId } = req.body;
  let { userId } = req.body;
  let info = await axios.put(
    `https://api.twitch.tv/kraken/users/${userId}/follows/channels/${channelId}`,
    {
      headers: {
        "Client-ID": KEY
      }
    }
  );
  let results = info.data;
  if (results) {
    res.status(200).json(results);
  }
};

let unfollowChannel = async (req, res) => {
  let { Id } = req.body;
  let { channelId } = req.body;
  let { userId } = req.body;
  console.log(channelId);
  console.log(Id);
  console.log(userId);
  let info = await axios.delete(
    `https://api.twitch.tv/kraken/users/${userId}/follows/channels/${channelId}`,
    {
      headers: {
        "Client-ID": KEY,
        Authorization: `OAuth ${Id}`,
        Accept: `application/vnd.twitchtv.v5+json`
      }
    }
  );
  let results = info.data;
  if (results) {
    res.status(200).json(results);
  }
};

let getFeaturedStreams = async (req, res) => {
  let info = await axios.get(
    `https://api.twitch.tv/kraken/streams/featured?&limit=5`,
    {
      headers: {
        "Client-ID": KEY,
        Accept: `application/vnd.twitchtv.v5+json`
      }
    }
  );
  let results = info.data;
  if (results) {
    res.status(200).json(results);
  }
};

module.exports = {
  getTopTwitchGames,
  getLiveStreams,
  getMyFollowedStreams,
  getSearchChannels,
  followChannel,
  unfollowChannel,
  getUser,
  getFeaturedStreams,
  getLogin
};
