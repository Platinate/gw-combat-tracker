import { FC } from "react";
import INpc from "../../../models/Npc";
import EnnemyCard from "../../molecules/EnnemyCard/EnnemyCard";

interface IProps {
  npcs: INpc[];
}
const CardBoard: FC<IProps> = ({ npcs }) => {
  return (
    <div style={{display:" grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 5}}>
      {npcs.map((npc) => (
        <EnnemyCard npc={npc} />
      ))}
    </div>
  );
};

export default CardBoard;
