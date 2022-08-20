import { useEffect } from "react";
import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
const likes = () => Number(window.localStorage.getItem('like')) || 0;
  const [like, setLike] = useState(likes);

  const handleLike = () => {
        setLike(like +1)
  }

  useEffect(() => {
      window.localStorage.setItem('like' , like);
  }, [like])

  return (
    <Context.Provider
      value={{
        like,
        handleLike,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
