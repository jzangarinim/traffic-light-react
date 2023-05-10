import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
  return (
    <div className="container m-auto bg-dark col-2 mt-5 rounded pt-5 pb-5 text-white d-flex flex-column align-items-center h-auto">
      <div className="rounded-circle street-light red-light selected"></div>
      <div className="rounded-circle street-light yellow-light mt-2"></div>
      <div className="rounded-circle street-light green-light mt-2"></div>
    </div>
  );
};

export default Home;
