import { Layout } from "antd";
import { FC } from "react";
import CardBoard from "../../organisms/CardBoard/CardBoard";
import INpc from "../../../models/Npc";

const { Content } = Layout;
const NPCS: INpc[] = [{
    armor: 0,
    ch: 0,
    cn: 0,
    dx: 0,
    hitPoints: 10,
    in: 0,
    morale: 4,
    ms: 0,
    name: "Blob",
    number: 0,
    ps: 0,
    totalHitPoints: 10
}];
const CombatTracker: FC = () => {
  return (
    <Layout>
      <Content>
        <CardBoard npcs={NPCS} />
      </Content>
    </Layout>
  );
};
export default CombatTracker;
