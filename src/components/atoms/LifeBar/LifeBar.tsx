import { FC, useState } from "react";
import INpc from "../../../models/Npc";
import { Button, Progress } from "antd";

interface IProps {
  npc: INpc;
  onChange: (v:number) => void;
}
const LifeBar: FC<IProps> = ({ npc, onChange }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        {npc.hitPoints}/{npc.totalHitPoints}
      </h2>
      <div
        style={{ display: "grid", gridTemplateColumns: "10% 80% 10%", gap: 5 }}
      >
        <Button
          style={{ backgroundColor: "#A00", color: "white" }}
          onClick={() => onChange(npc.hitPoints - 1)}
        >
          -
        </Button>
        <Progress
          percent={(npc.hitPoints / npc.totalHitPoints) * 100}
          showInfo={false}
          status={
            (npc.hitPoints / npc.totalHitPoints) * 100 > 25
              ? "active"
              : "exception"
          }
        />
        <Button
          style={{ backgroundColor: "#0A0", color: "white" }}
          onClick={() => onChange(npc.hitPoints + 1)}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default LifeBar;
