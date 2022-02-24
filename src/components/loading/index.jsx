import React from "react";
import { Spinner, LockBody, Picture, ReleaseBody } from "./styles/loading";

const Loading = ({ src, ...props }) => {
  return (
    <Spinner {...props}>
      <LockBody />
      <Picture src={`/images/user/${src}.png`} />
    </Spinner>
  );
};

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

export default Loading;
