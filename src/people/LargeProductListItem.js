import React from "react";

const LargePersonListItem = ({ person }) => {
  const { name, age, haircolor, hobbies } = person;

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Hari Color:: {haircolor}</p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};

export default LargePersonListItem;
