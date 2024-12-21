import React, { useEffect, useState } from "react";

const Loading = () => {
  const [text, setText] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsLoading(false);
      setText("Hello");
    }, 2000);

    return () => clearTimeout(id);
  });
  return isLoading ? <div>Loading</div> : <h1>{text}</h1>;
};

export default Loading;
