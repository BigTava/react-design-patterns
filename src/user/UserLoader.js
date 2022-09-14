import React from "react";
import axios from "axios";

const UserLoader = ({ userId, children }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { user });
      })}
    </>
  );
};

export default UserLoader;
