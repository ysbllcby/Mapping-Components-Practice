import React from "react";
import emojipedia from "../emojipedia";

function Emoji(props) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.emoji}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>{props.meanings}</dd>
      </div>
    </dl>
  );
}

export default Emoji;
