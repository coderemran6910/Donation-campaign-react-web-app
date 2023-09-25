import { useContext, useEffect, useState } from "react";
import { MyAllDataContext } from "../Layout/Layout";
import { getDataFromLocalStorage } from "../utility/Utility";
import SingleDonationItem from "../components/SingleDonationItem";

const Donation = () => {
  const [donationData, setDonationData] = useState([]);
  const [displayDonationData, setDisplayDonationData] = useState(4);

  const cardData = useContext(MyAllDataContext);

  //   const { title, category, image, colors} = cardData;
  useEffect(() => {
    const localStoredData = getDataFromLocalStorage("donation");
    const findcardDataByLocalStoredData = cardData.filter((card) => {
      return localStoredData.includes(card.id);
    });

    setDonationData(findcardDataByLocalStoredData) || {};
  }, [cardData]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-10 mt-20 container mx-auto   mb-20">
        {donationData &&
          donationData
            .slice(0, displayDonationData)
            .map((singleData) => (
              <SingleDonationItem
                key={singleData.id}
                singleData={singleData}
              ></SingleDonationItem>
            ))}
      </div>

      <div className="flex justify-center ">
        {donationData.length > 4 ? (
          <button
            onClick={() => setDisplayDonationData(donationData.length)}
            className={`btn px-3 py-2  bg-green-700 text-white hover:bg-green-600 ${
              displayDonationData === donationData.length && "hidden"
            } `}
          >
            {" "}
            See All{" "}
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Donation;
