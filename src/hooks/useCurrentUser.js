import React from "react";
import axios from "axios";

const useCurrentUser = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);
  return user;
};

export default useCurrentUser;
