import React from "react";
import axios from "axios";

const useResource = (resourceUrl) => {
  const [resource, setResource] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);
  return resource;
};

export default useResource;
