import React from "react";
import axios from "axios";

const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { user });
      })}
    </>
  );
};

export default CurrentUserLoader;
