import React from "react";

const useDataSource = (getResourceFunction) => {
  const [resource, setResource] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const result = await getResourceFunction();
      setResource(result);
    })();
  }, [getResourceFunction]);
  return resource;
};

export default useDataSource;
