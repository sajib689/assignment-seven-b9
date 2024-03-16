const Banner = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: "url(https://i.ibb.co/2YCnGvd/bg.jpg)",
        borderRadius: "20px",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content rounded-lg text-center text-neutral-content">
        <div className="p-2">
          <h1 className="mb-5 text-[40px] md:text-[52px] font-bold">
            Discover an exceptional cooking  class <br /> tailored for you!
          </h1>
          <p className="mb-5">
            Discover your culinary passion with tailored cooking classes <br />{" "}
            just for you! Unleash your inner chef today!
          </p>
          <button className="btn bg-[#0BE58A] border-0 text-[#150B2B]">
            Explore Now
          </button>
          <button className="border-solid border-2 text-[#FFF] border-[#ffffff] p-2 rounded-lg ms-2">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
