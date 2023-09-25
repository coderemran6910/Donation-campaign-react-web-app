import PropTypes from 'prop-types'

const SingleDonationItem = ({ singleData }) => {
    const { title, category, image, colors, price} = singleData;
    return (
        <div>
        <div>
          <div className="h-48 shadow-xl flex rounded-xl">
            <figure className='w-[200px] h-48'>
              <img
              className=" w-full h-full rounded-lg  object-cover overflow-hidden"
                src={image}
                alt="Shoes"
              />
            </figure>
            <div style={{background: `${colors.background}`, color: `${colors.text}`}} className="card-body w-80 ">
              <div>
                <span style={{background: `${colors.category}`}} className=" px-3 py-2 rounded-lg">{category}</span>
              </div>
              <h2 className="card-title text-black">{title}</h2>
              <h3 style={{color: `${colors.text}`}} className=" font-semibold "> ${price}</h3>
              <button style={{background: `${colors.text}`}}  className='btn py-4 px-4 text-white  w-32 h-5 text-md font-normal'>View Details </button>
              
            </div>
          </div>
        </div>
      </div>
    );
};

SingleDonationItem.propTypes = {
    singleData: PropTypes.object.isRequired
}

export default SingleDonationItem;