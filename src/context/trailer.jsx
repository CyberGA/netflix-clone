import React, { useState, createContext } from "react";

export const TrailerContext = createContext();

const Trailer = ({ children }) => {
  const [videoId, setVideoId] = useState("");
  return <TrailerContext.Provider value={{ videoId, setVideoId }}>{children}</TrailerContext.Provider>;
};

export default Trailer;
