const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen p-8">
      <div className="card bg-base-100 w-96 max-w-full shadow-sm">
        <figure>
          <img className="w-72 px-4 py-2 bg-white" src="/assets/banner.jpg" alt="Buyanihan Banner" />
        </figure>
        <div className="card-body flex flex-col gap-4 items-center">
          <h2 className="card-title text">SELLER PORTAL</h2>
          <div className="flex flex-col gap-2 w-full">
            <label className="input">
              <input type="input" className="grow" placeholder="Username" />
            </label>
            <label className="input">
              <input type="password" className="grow" placeholder="Password" />
            </label>
          </div>
          <div className="card-actions flex flex-row gap-2 w-full">
            <button className="btn btn-primary flex-1">Log In</button>
            <button className="btn btn-accent flex-1">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
