import React from "react";
import axios from "axios";

const useUser = (userId) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);
  return user;
};

export default useUser;
