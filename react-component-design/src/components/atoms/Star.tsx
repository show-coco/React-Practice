import React from "react";
import { ReactComponent as FaStar } from "../../icons/FaStar.svg";

type Props = {
  selected: boolean;
  onSelect: () => void;
};

const Star: React.FC<Props> = ({ selected, onSelect }) => (
  <FaStar fill={selected ? "yellow" : "gray"} onClick={onSelect} />
);

export default Star;
