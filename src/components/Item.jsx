import React, { useState } from "react";

function Item(props) {
  const [state, setState] = useState({
    level: props.level,
  });

  const className = "item level" + props.level;

  return <div className={className}>{props.id}</div>;
}

export default Item;
