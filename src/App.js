import React, { useState } from "react";
import "./styles.css";

var emojis = {
  Mumbai: ["Vada Pav - 4.5/5", "Pav Bhaji - 4/5", "Sev Puri 4/5"],
  Delhi: ["Momos - 4.5/5", "Chaat - 4/5", "Kulcha - 4/5"],
  Chennai: ["Idli Dosai - 4.5/5", "Vada - 4/5", "Rasam 4/5"],
  Kolkata: ["Rolls - 4.5/5", "Rosogolla - 4/5", "Biryani 4/5"]
};

export default function App() {
  var [meaning, setuserMeaning] = useState("");

  // make an array of object keys

  var myemojiList = Object.keys(emojis);

  //ClickHandler function

  function clickHandler(emoji) {
    var meaning = emojis[emoji];
    setuserMeaning(meaning);
  }
  //

  return (
    <div className="App">
      <h1>🍔Foodie</h1>
      <h3>Discover top street food in each city</h3>

      {myemojiList.map(function (emoji) {
        return (
          <button
            onClick={() => clickHandler(emoji)}
            key={emoji}
            style={{
              fontSize: "large",
              padding: "0.5rem",
              cursor: "pointer",
              marginRight: "1rem",
              borderRadius: "0.5rem"
            }}
          >
            {emoji}
          </button>
        );
      })}

      <hr></hr>
      <div>
        {meaning.map(function (dish) {
          return <li>{dish}</li>;
        })}
      </div>
    </div>
  );
}
