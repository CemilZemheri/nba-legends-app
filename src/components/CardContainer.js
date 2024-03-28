
import PlayerCard from "./PlayerCard";
import "../App.css";

const CardContainer = ({ Data, search }) => {
 
  return (
    <div className="card-container">
      <PlayerCard players={Data} search={search} />
    </div>
  );
};

export default CardContainer;
