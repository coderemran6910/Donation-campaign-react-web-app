import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";


const Card = ({ card }) => {
  const {id, title, category, image, colors} = card;

const navigate = useNavigate()
const handleClick = () => {
    navigate(`/donationDetails/${id}`)

   
}


  return (
    <div onClick={handleClick}>
      <div>
        <div className="card card-compact w-96 md:w-80  h-72 shadow-xl">
          <figure>
            <img
            className="w-full h-48 rounded-lg  object-cover overflow-hidden"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div style={{background: `${colors.background}`, color: `${colors.text}`}} className="card-body">
            <div className="card-actions justify-start">
              <button style={{background: `${colors.category}`}} className="btn ">{category}</button>
            </div>
            <h2 className="card-title">{title}</h2>
            
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
}

export default Card;
