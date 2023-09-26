import { useContext } from "react";
import { FilterdataContext } from "../../Layout/Layout";
import Card from "./../Card/Card";

const Cards = () => {
    const filterdData = useContext(FilterdataContext)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center  gap-10 mt-20 container mx-auto   mb-20">
            {
                filterdData.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;