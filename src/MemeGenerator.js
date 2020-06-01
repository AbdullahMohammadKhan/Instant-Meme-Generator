import React, { useState, useEffect } from "react";

export default function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState(
    "https://i.imgflip.com/1ur9b0.jpg"
  );
  const [allMemeImgs, setAllMemeImgs] = useState([]);

  //useEffect(() => {
  // code to run on component mount
  fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((response) => {
      const { memes } = response.data;
      console.log(memes[0]);
      setAllMemeImgs(memes);
    });
  /*
    //}, []); */

  const submitt = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * allMemeImgs.length);
    const randMemeImg = allMemeImgs[randNum].url;
    setRandomImg(randMemeImg);
  };

  return (
    <div>
      <form className="meme-form" onSubmit={submitt}>
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          value={topText}
          onChange={(e) => {
            setTopText(e.target.value);
          }}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => {
            setBottomText(e.target.value);
          }}
        />

        <button>Gen</button>
      </form>
      <div className="meme">
        <img src={randomImg} alt="" />
        <h2 className="top">{topText}</h2>
        <h2 className="bottom">{bottomText}</h2>
      </div>
    </div>
  );
}

/*/*
import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImg: randMemeImg });
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />

          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}
*/
