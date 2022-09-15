import React from "react";

const DataSource = ({ getDataFunc = () => {}, resourceName, children }) => {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const data = await getDataFunc();
      setState(data);
    })();
  }, [getDataFunc]);

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { [resourceName]: state });
      })}
    </>
  );
};

export default DataSource;
