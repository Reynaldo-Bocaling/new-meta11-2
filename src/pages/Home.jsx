import React from "react";

const Home = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col md:flex-row">
      <div
        className="w-full h-[27vh] bg-cover bg-center bg-no-repeat md:w-[42%] md:h-screen"
        style={{ backgroundImage: "url('/mobile.png')" }}
      ></div>
      <div className="flex-1 p-8 bg-white flex flex-col items-center relative z-10 px-10 md:px-8">
        <img src="/blue_tick.png" alt="Meta Logo" className="w-16 h-16 mb-6" />
        <h1 className="text-[2em] mb-4 text-center font-bold">
          Become <br /> Meta Verified
        </h1>
        <a
          href="https://activition--subscription--beutiful--premium-features-service.vercel.Home/Request.html"
          className="bg-[#0064e0] text-white py-2 px-9 rounded-full mt-4 text-base no-underline"
        >
          Homely
        </a>
        <p className="text-lg mt-4 text-center">
          Grow your social presence with Meta Verified – a new subscription
          <br />
          bundle available for creators and businesses on Instagram and
          <br />
          Facebook.
        </p>
        <p className="text-[17px] pt-12 pb-4 text-center">
          Sign up now for creators
        </p>
        <p className="text-center mt-4 ">
          <span>Are you a business?</span> Get more information on
        </p>
        <a
          href="#"
          className="text-sm text-center mt-2 text-blue-600 underline"
        >
          Meta support for businesses
        </a>
        <p className="text-[13px] italic mt-4 text-center">
          Features, availability, and pricing may vary by region.
        </p>
      </div>
    </div>
  );
};

export default Home;
