import { useEffect, useState } from "react";

export const EffectExample = () => {
  const [data, setData] = useState([]);
  const [showState, setShowState] = useState(false)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response.json().then((json) => setData(json))
    );
  }, []);

  useEffect(() => {
    console.log("State change");
  }, [showState]);

  return (
    <div>
      <button onClick={() => setShowState((prev) => !prev)}>Toggle</button>
      <h1>Posts</h1>
      <ul>
        {data.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
