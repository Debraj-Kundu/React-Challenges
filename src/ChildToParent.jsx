import React, { useState } from "react";

export const Parent = () => {
  const [childData, setChildData] = useState("");

  const handelInputChange = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h2>Parent</h2>
      <h3>{childData}</h3>
      <Child handelInputChange={handelInputChange} />
    </div>
  );
};

export const Child = (props) => {
  return (
    <div>
      <h2>Child</h2>
      <input
        type="text"
        onChange={(e) => props.handelInputChange(e.target.value)}
      />
    </div>
  );
};
