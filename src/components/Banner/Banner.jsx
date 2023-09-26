import bannerImg from "../../assets/Resources/banner.png";
import Header from "../Header/Header";
import PropTypes from "prop-types";
const Banner = ({ handleInput, handleSearchBtn }) => {
  const handleSearchBar = (e) => {
    e.preventDefault();
    // Instead of capturing the input value here, pass it to the parent component
    handleInput(e);
  };

  return (
    <div>
      <div
        className="hero h-screen  z-10 top-0 mx-auto"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",

        }}
      >
        <div className=" container mx-auto absolute top-0">
          <Header></Header>
        </div>

        <div className="hero-overlay bg-opacity-60 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-5xl font-bold text-black">
              I Grow By Helping People In Need{" "}
            </h1>

            <div className="flex items-center justify-center">
              <form onSubmit={handleSearchBar}>
                <div className="form-control ">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search…"
                      className="input input-bordered border-black text-black"
                      name="searchInput"
                    />
                    <div>
                      <button onClick={handleSearchBtn} className="btn btn-square  w-auto px-5 text-white bg-red-600 hover:bg-red-500">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSearchBtn: PropTypes.func.isRequired,
}

export default Banner;