import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SingleDonationItem = ({ singleData }) => {
  const navigate = useNavigate();
  const { title, category, image, colors, price } = singleData;

  return (
    <div>
      <div>
        <div className=" w-96 md:w-[600px] mx-auto h-48 shadow-xl flex rounded-xl">
          <figure className="  w-32 md:w-[200px] h-48">
            <img
              className=" w-full h-full rounded-lg  object-cover overflow-hidden"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div
            style={{
              background: `${colors.background}`,
              color: `${colors.text}`,
            }}
            className="card-body w-48 md:w-80 "
          >
            <div>
              <span
                style={{ background: `${colors.category}` }}
                className=" px-3 py-2 rounded-lg"
              >
                {category}
              </span>
            </div>
            <h2 className=" md:card-title text-black">{title}</h2>
            <div className="flex justify-center mt-5 md:mt-0 gap-5 md:gap-0 md:flex-col items-center md:items-start">
              <h3
                style={{ color: `${colors.text}` }}
                className=" font-semibold "
              >
                ${price}
              </h3>
              <button
                onClick={() => navigate(`/donationDetails/${singleData.id}`)}
                style={{ background: `${colors.text}` }}
                className="btn py-2 md:py-4 px-2 md:px-4 text-white  w-32  text-xs md:text-md font-normal"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleDonationItem.propTypes = {
  singleData: PropTypes.object.isRequired,
};

export default SingleDonationItem;
