import bannerImg from "../../assets/Resources/banner.jpg";
import Header from "../Header/Header";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-screen  z-10 top-0 mx-auto"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
       
        <div className=" container mx-auto absolute top-0"> <Header></Header></div>

        <div className="hero-overlay bg-opacity-60 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-5xl font-bold text-black">
              I Grow By Helping People In Need{" "}
            </h1>

            <div className="flex items-center justify-center">
              <div className="form-control ">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered border-black"
                  />
                  <div>
                    <button className="btn btn-square  w-auto px-5 text-white bg-red-600">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
