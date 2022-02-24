import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import Youtube from "react-youtube";
import { Container, Button, Overlay, Inner, Close } from "./styles/player";

export const PlayerContext = createContext();

export default function Player({ children, ...props }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...props}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...props }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  const opts = {
    height: `${window.innerHeight * 0.6}`,
    width: `${window.innerWidth * 0.8}`,
    playerVars: { autoplay: 1, origin: window.location.origin.toString() },
  };

  //& Popup to play video with youtube player
  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...props}>
          <Inner>
            <Youtube videoId={src} opts={opts} onError={() => setShowPlayer(false)} />
            <Close>
              <img src="/images/icons/close-slim.png" alt="close" />
            </Close>
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...props }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>Play</Button>;
};
