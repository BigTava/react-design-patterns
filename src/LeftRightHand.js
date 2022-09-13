export const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}> {name}!</h1>;
};

export const RightHandComponent = ({ message }) => {
  return <p style={{ backgroundColor: "red" }}>{message}!</p>;
};
