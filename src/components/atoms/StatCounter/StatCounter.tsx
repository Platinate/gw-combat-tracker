import { Button } from "antd";
import { FC } from "react";

interface IProps {
  name: string;
  stat: number;
  onChange: (v: number) => void;
}
const StatCounter: FC<IProps> = ({ name, stat, onChange }) => {
  return (
    <h2
      style={{
        border: "1px solid lightgray",
        padding: 5,
        margin: 0,
        borderRadius: 5,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "75% 25%",
          alignItems: "center",
        }}
      >
        <span>
          {name}: {stat}
        </span>
        <div>
          <Button style={{ width: 40 }} onClick={() => onChange(stat+1)}>
            +
          </Button>
          <Button style={{ width: 40 }} onClick={() => onChange(stat-1)}>
            -
          </Button>
        </div>
      </div>
    </h2>
  );
};

export default StatCounter;
