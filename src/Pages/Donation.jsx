import { useContext, useEffect, useState } from "react";
import { MyAllDataContext } from "../Layout/Layout";
import { getDataFromLocalStorage } from "../utility/Utility";

const Donation = () => {
  const [donationData, setDonationData] = useState([]);


  const cardData = useContext(MyAllDataContext);
  const localStoredData = getDataFromLocalStorage("donation");
  
//   const { title, category, image, colors} = cardData;
  useEffect(() => {
    const findcardDataByLocalStoredData = cardData.find((card) => {
      return localStoredData.includes(card.id);
    });
    setDonationData(findcardDataByLocalStoredData) || {};
  }, [cardData, localStoredData]);

  console.log(donationData.title);
  return (
    <div>
      {/* <div>
        <div>
          <div className="card card-compact  w-80  h-72 shadow-xl">
            <figure>
              <img
                className="w-full h-48 rounded-lg  object-cover overflow-hidden"
                src={image}
                alt="Shoes"
              />
            </figure>
            <div
              style={{
                background: `${colors.background}`,
                color: `${colors.text}`,
              }}
              className="card-body"
            >
              <div className="card-actions justify-start">
                <button
                  style={{ background: `${colors.category}` }}
                  className="btn "
                >
                  {category}
                </button>
              </div>
              <h2 className="card-title">{title}</h2>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Donation;
