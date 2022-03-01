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
        <div className="row pb-3 align-items-center">
          <div className="col-lg-4 col-md-6">
            <img src="./assets/potret.png" alt="" class="img-fluid" />
          </div>
          <div className="col-lg-4 offset-lg-1 col-md-6  text-end">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate necessitatibus voluptates quae eligendi at deserunt praesentium fugit modi provident esse neque numquam, totam delectus reiciendis reprehenderit pariatur
              sequi saepe explicabo distinctio laboriosam facilis tempore doloribus alias illum. Laudantium sunt aliquid, quo odio repellat nihil maiores accusamus doloribus nam repudiandae ullam.
            </p>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-12 text-center mt-3">
            <button class="btn btn-dark">Mari Mencoba</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
