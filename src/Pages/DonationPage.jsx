import { useContext, useEffect, useState } from "react";
import { MyAllDataContext } from "../Layout/Layout";
import { getDataFromLocalStorage } from "../utility/Utility";
import Card from "../components/Card";
import SingleDonationItem from "../components/SingleDonationItem";

const Donation = () => {
  const [donationData, setDonationData] = useState([]);


  const cardData = useContext(MyAllDataContext);
 
  
//   const { title, category, image, colors} = cardData;
  useEffect(() => {
    const localStoredData = getDataFromLocalStorage("donation");
    const findcardDataByLocalStoredData = cardData.filter((card) => {
      return localStoredData.includes(card.id);
    });

    setDonationData(findcardDataByLocalStoredData) || {};
  }, [cardData]);
  console.log(donationData);

  return (
   <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-10 mt-20 container mx-auto   mb-20">
    {
     donationData && donationData.map(singleData => <SingleDonationItem key={singleData.id} singleData={singleData}></SingleDonationItem>)
    }
   </div>
  );
};

export default Donation;
