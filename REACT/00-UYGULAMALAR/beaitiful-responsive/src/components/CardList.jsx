import { useContext } from "react";
import { CardContext } from "../contexts/CardContext";
import Card from "./Card";

function CardList() {
  const {cardInfos} = useContext(CardContext);
  return (
    <>
      <div className="w3-row-padding w3-center w3-margin-top">
        {
          cardInfos.map(info => <Card key={info.id} info={info} />)
        }
      </div>
    </>
  );
}

export default CardList;
