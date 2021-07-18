import React from "react";
import { NotFoundContainer } from "./NotFounfStyled";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h2 className="title">404 Not Found</h2>
      <p className="text">Whoops... Something went wrong!</p>
    </NotFoundContainer>
  );
};

export default NotFound;
