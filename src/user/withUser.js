import React from "react";
import axios from "axios";

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    });

    return <Component {...props} user={user} />;
  };
};
