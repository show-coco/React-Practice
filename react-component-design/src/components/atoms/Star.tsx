import React from "react";
import { ReactComponent as FaStar } from "../../icons/FaStar.svg";

type Props = {
  selected: boolean;
};

const Star: React.FC<Props> = ({ selected }) => (
  <FaStar fill={selected ? "yellow" : "gray"} />
);

export default Star;
