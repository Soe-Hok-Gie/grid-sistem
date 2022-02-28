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
          <div className="col-2">
            <img src="./assets/1.png" alt="" class="img-fluid" />
          </div>
          <div className="col-2">
            <img src="./assets/1.png" alt="" class="img-fluid" />
          </div>
          <div className="col-2">
            <img src="./assets/1.png" alt="" class="img-fluid" />
          </div>
          <div className="col-2">
            <img src="./assets/1.png" alt="" class="img-fluid" />
          </div>
          <div className="col-2">
            <img src="./assets/1.png" alt="" class="img-fluid" />
          </div>
          <div className="col-2">
            <img src="./assets/1.png" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeri;
