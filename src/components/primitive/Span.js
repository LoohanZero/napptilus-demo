import React from "react";

const Span = ({ children, ...props }) => {
  return <span {...props}>{children}</span>;
};

export default Span;
