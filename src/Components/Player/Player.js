import React, { Component } from "react";
const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetID: "twitch-embed",
      width: "100%",
      height: "100%",
      theme: "dark",
      channel: ""
    };
  }
  componentDidMount() {
    let embed;
    const script = document.createElement("script");
    script.setAttribute("src", EMBED_URL);
    script.addEventListener("load", () => {
      embed = new window.Twitch.Embed(this.state.targetID, { ...this.state });
      console.log(this.props);
    });
    document.body.appendChild(script);

    this.setState({
      channel: this.props.match.params.id
    });
  }

  render() {
    return (
      <div>
        <div
          style={{ width: "100vw", height: "100vh" }}
          id={this.state.targetID}
        ></div>
      </div>
    );
  }
}
