import React from "react";
import TextButton from "../molecules/TextButton";
import LoggerWithProps from "../helper/LoggerWithProps";

type Props = {
  log: string;
};

const LogTextButton: React.FC<Props> = ({ log }) => (
  <TextButton
    onClick={(text) => {
      console.log(log);
      console.log(text);
    }}
  />
);

const LogicPage: React.FC = () => {
  return <LoggerWithProps log="with props" component={LogTextButton} />;
};

export default LogicPage;
