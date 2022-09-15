import React from "react";
import axios from "axios";

const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setState(response.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { [resourceName]: state });
      })}
    </>
  );
};

export default ResourceLoader;
