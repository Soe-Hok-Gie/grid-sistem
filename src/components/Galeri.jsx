import React from "react";

const Galeri = () => {
  return (
    <div className="container-fluid galeri py-5">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>Galeri</h1>
            <p>koleksi foto</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
            <img src="./assets/1.png" alt="" class="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
            <img src="./assets/1.png" alt="" class="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
            <img src="./assets/1.png" alt="" class="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
            <img src="./assets/1.png" alt="" class="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
            <img src="./assets/1.png" alt="" class="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
            <img src="./assets/1.png" alt="" class="img-fluid" />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-lg-3 col-md-6 mt-3">
            <img src="./assets/2.png" alt="" class="img-fluid" />
          </div>
          <div className="col-lg-3 col-md-6 mt-3">
            <img src="./assets/2.png" alt="" class="img-fluid" />
          </div>
          <div className="col-lg-3 col-md-6 mt-3">
            <img src="./assets/2.png" alt="" class="img-fluid" />
          </div>
          <div className="col-lg-3 col-md-6 mt-3">
            <img src="./assets/2.png" alt="" class="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-1">
            <img src="./assets/3.png" alt="" class="img-fluid" />
          </div>
          <div className="col-lg-4 col-md-5">
            <img src="./assets/3.png" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeri;
