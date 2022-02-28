import React from "react";

const Profil = () => {
  return (
    <div className="container-fluid profil">
      <div className="container">
        <div className="row py-5">
          <div className="col text-center">
            <h1>Layout website</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, obcaecati.</p>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-4">
            <img src="./assets/potret.png" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
