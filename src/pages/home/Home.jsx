import "./home.css";
import logo from "../../imagesss/logo.png";
import capture from "../../imagesss/Capture.PNG";
import login from "../../imagesss/Sign_in.jpg";
import book from "../../imagesss/Find_a_book.jpg";
import bookOne from "../../imagesss/Book_1.jpg";
import bookTwo from "../../imagesss/Book_2.jpg";
import bookThree from "../../imagesss/Book_3.jpg";
import bookFour from "../../imagesss/Book_4.jpg";
import bookFive from "../../imagesss/Book_5.jpg";

function Home() {
  return (
    <div className="container-fluid primary_bg min-vh-100">
      <div className="row main align-items-center min-vh-100">
        <div className="col-xl-9 col-lg-8 col-sm-12 col-10 m-auto text-center select_one">
          <img src={logo} width="200px" alt="logo" />

          <div className="row my-3">
            <div className="col-sm-4 col-12">
              <a href="login.html">
                <h2>BOOKIFY STAFF</h2>
                <p>GO TO DASHBOARD</p>
                <img src={capture} width="200px" />
              </a>
            </div>
            <div className="col-sm-4 col-12">
              <a href="login.html">
                <h2>SIGN IN</h2>
                <p>GO TO BOOKIFY</p>
                <img src={login} width="200px" />
              </a>
            </div>
            <div className="col-sm-4 col-12">
              <a href="#">
                <h2>FIND A BOOK</h2>
                <p>GO TO BOOK FINDER</p>
                <img src={book} width="200px" />
              </a>
            </div>
          </div>
          <h2 className="d-lg-block d-none welcom_text">
            Welcome To our Digital World
          </h2>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-10 m-auto">
          <div className="newly_books">
            <h2 className="text-center py-2">Newly Added Books</h2>
            <a href="#" className="d-flex align-items-center">
              <img src={bookOne} />
              <div>
                <h3>THE BOOK THIEF</h3>
                <p>MARKUS ZUSAK</p>
              </div>
            </a>
            <a href="#" className="d-flex align-items-center">
              <img src={bookTwo} />
              <div>
                <h3>THE ANGEL'S GAME</h3>
                <p>CARLOS RULZ ZAFON</p>
              </div>
            </a>
            <a href="#" className="d-flex align-items-center">
              <img src={bookThree} />
              <div>
                <h3>THE LITTLE STRANGER</h3>
                <p>SARAH WATERS</p>
              </div>
            </a>
            <a href="#" className="d-flex align-items-center">
              <img src={bookFour} />
              <div>
                <h3>GYPSY BOY</h3>
                <p>MIKEY WALSH</p>
              </div>
            </a>
            <a href="#" className="d-flex align-items-center">
              <img src={bookFive} />
              <div>
                <h3>EATS,SHOOTS&LEAVES</h3>
                <p>LYNNE TRUSS</p>
              </div>
            </a>
            <a href="#" className="d-flex align-items-center">
              <img src={bookThree} />
              <div>
                <h3>ADRIAN MOLE</h3>
                <p>SUE TOWNSEND</p>
              </div>
            </a>
            <a href="#" className="d-flex align-items-center">
              <img src={book} />
              <div>
                <h3>WHAT YOU SEE IS WHAT YOU GET</h3>
                <p>ALAN SUGER</p>
              </div>
            </a>
            <a href="#" className="d-flex align-items-center">
              <img src={bookTwo} />
              <div>
                <h3>THE HELP</h3>
                <p>KATHRYN STOCKET</p>
              </div>
            </a>
          </div>
        </div>
        <h2 className="d-lg-none d-block mt-3 mb-5 welcom_text text-center">
          Welcome To our Digital World
        </h2>
      </div>
    </div>
  );
}

export default Home;
