const NormalForm = () => {
  const double = true;

  return (
    <form
      className={`w-full  border border-gray-300  shadow-sm ${
        double ? "max-w-5xl" : "max-w-md"
      } p-6 mx-auto`}
    >
      <div
        className={` grid grid-cols-1 justify-items-center  gap-5 ${
          double ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        <div className="w-full max-w-md">
          <label htmlFor="">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="">Email</label>
          <input type="text" id="name" name="email" />
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="">Phone No</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="">Password</label>
          <input type="text" id="password" name="password" />
        </div>
      </div>
      <div
        className={` grid grid-cols-1 mt-6 justify-items-center  gap-5 ${
          double ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        <div className={`w-full max-w-md col-start-1 ${double?"md:col-start-2 flex  md:justify-end":''}`}>
          <button className="px-3 py-1 bg-violet-600 hover:bg-violet-700  rounded-lg text-white">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
