import React from "react";

const Navbar = () => {
  return (
    <div className="container-fluid bgnavbar py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Belajar Grid Sistem</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 text-end">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis autem tenetur dolorum distinctio labore qui, minima maiores molestias voluptatem, voluptatum velit, laudantium numquam. Suscipit magnam vitae quasi rem, sed
              dolorum itaque sint temporibus repellat architecto porro eos soluta velit fugit.
            </p>
          </div>
          <div className="col-5 offset-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quo commodi et explicabo, aspernatur sunt veniam, illo unde deleniti voluptates aut dolorum repellat magnam tempore velit consequuntur corrupti cum ab
              reprehenderit facilis rerum, alias saepe!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
