import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyAllDataContext } from "../../Layout/Layout";
import { setDataInLocalStorage } from "../../utility/Utility";
import Swal from "sweetalert2";

const DonationDetails = () => {
  const [donationData, setDonationData] = useState({});
  const { id } = useParams();
  const cardData = useContext(MyAllDataContext);

  useEffect(() => {
    const selectedDonationData = cardData.find((card) => card.id == id);
    setDonationData(selectedDonationData);
  }, [cardData, id]);

  const handleDonation = () => {
    setDataInLocalStorage("donation", donationData.id);

    Swal.fire("Thanks!", "You Successfuly done your Donation!", "success");
  };

  return (
    <div className=" w-96 md:w-3/4 mt-10 container mx-auto mb-10">
      <div className="flex justify-center flex-col relative">
        <img
          className="w-full h-[450px] object-cover rounded-lg"
          src={donationData.image}
          alt=""
        />
        <div className="absolute bottom-0 left-0 w-full py-12 bg-black opacity-50 flex items-center justify-center z-0"></div>
          <button
            onClick={handleDonation}
            className="absolute left-5 bottom-5 btn bg-red-600 font-extrabold text-slate-50 border-none hover:bg-red-500 z-auto"
          >
            Donate ${donationData.price}
          </button>
        


      </div>
      <h1 className="text-5xl font-bold mt-6">{donationData.title}</h1>
      <p className="mt-6 text-base font-normal">{donationData.description}</p>
    </div>
  );
};

export default DonationDetails;
