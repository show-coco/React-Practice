/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

type InjectProps = { log: string };

type Props = {
  log: string;
  component: React.ComponentType<InjectProps>;
};

const LoggerWithProps: React.FC<Props> = ({ log, component }) => {
  React.useEffect(() => {
    console.log(`${log} mount`);

    return () => console.log(`${log} unmount`);
  }, []);

  const Component = component;
  return <Component log={log} />;
};

export default LoggerWithProps;
