import { Card, Progress } from "antd";
import { FC, useState } from "react";
import INpc from "../../../models/Npc";
import LifeBar from "../../atoms/LifeBar/LifeBar";
import StatCounter from "../../atoms/StatCounter/StatCounter";

interface IProps {
  npc: INpc;
}
const EnnemyCard: FC<IProps> = ({ npc }) => {
  const [state, setState] = useState<INpc>(npc);
  return (
    <Card title={<h1>{npc.name}</h1>}>
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%", gap: 5 }}>
        <StatCounter
          name="MS"
          stat={state.ms}
          onChange={(v) => setState((s) => ({ ...s, ["ms"]: v }))}
        />
        <StatCounter
          name="PS"
          stat={state.ps}
          onChange={(v) => setState((s) => ({ ...s, ["ps"]: v }))}
        />
        <StatCounter
          name="IN"
          stat={state.in}
          onChange={(v) => setState((s) => ({ ...s, ["in"]: v }))}
        />
        <StatCounter
          name="DX"
          stat={state.dx}
          onChange={(v) => setState((s) => ({ ...s, ["dx"]: v }))}
        />
        <StatCounter
          name="CH"
          stat={state.ch}
          onChange={(v) => setState((s) => ({ ...s, ["ch"]: v }))}
        />
        <StatCounter
          name="CN"
          stat={state.cn}
          onChange={(v) => setState((s) => ({ ...s, ["cn"]: v }))}
        />
      </div>
      <LifeBar npc={state} onChange={(v) => setState((s) => ({ ...s, hitPoints: v }))} />
    </Card>
  );
};

export default EnnemyCard;
