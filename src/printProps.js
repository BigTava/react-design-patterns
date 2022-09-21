import React from "react";

// We never display HOC as jsx
const printProps = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};

export default printProps;
