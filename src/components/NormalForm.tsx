const NormalForm = () => {
  return (
    <form className="border border-red-700 max-w-5xl p-5 mx-auto">
      <div className="border border-green-500">
        <div>
          <label htmlFor="">Name</label>
          <input className="block" type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input className="block" type="text" id="name" name="email" />
        </div>
        <div>
          <label htmlFor="">Phone No</label>
          <input className="block" type="text" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input className="block" type="text" id="password" name="password" />
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
