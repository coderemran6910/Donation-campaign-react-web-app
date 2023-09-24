import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyAllDataContext } from "../Layout/Layout";
import {setDataInLocalStorage} from "../utility/Utility";

const DonationDetails = () => {
    const [donationData, setDonationData] = useState({});
    const { id } = useParams();
    const cardData = useContext(MyAllDataContext);

    useEffect(() => {
        const selectedDonationData = cardData.find(card => card.id == id);
        setDonationData(selectedDonationData);

    }, [cardData, id]);

    const handleDonation = () => {
        setDataInLocalStorage("donation", donationData.id);
    };

    return (
        <div className="mt-10 container mx-auto">
            <div className="flex justify-center flex-col relative">
                <img className="w-full h-[450px] object-cover rounded-lg" src={donationData.image} alt="" />
                <button onClick={handleDonation} className="btn bg-red-600 absolute left-5 font-extrabold text-slate-50 border-none bottom-5 ">Donate ${donationData.price}</button>
            </div>
            <h1 className="text-5xl font-bold mt-14">{donationData.title}</h1>
            <p className="mt-6 text-base font-normal">{donationData.description}</p>
        </div>
    );
};

export default DonationDetails;
