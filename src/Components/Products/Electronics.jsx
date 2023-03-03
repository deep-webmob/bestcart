import React from "react";

const SideBar = () => {
  return <div>Sidebar</div>;
};

const Electronics = () => {
  return (
    <div className="bg-slate-800">
      <div className="h-screen">
        <div className="bg-white">
          <h2>Filters</h2>
          <label>Price</label>
          <div>
            <input type="range" />
          </div>
        </div>
        <div className="">List</div>
      </div>
    </div>
  );
};

export default Electronics;
