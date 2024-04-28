import "./rentalDetails.css";
import Basic from "../../components/basic/Basic";
import Navbar from "../../components/basic/Navbar";

function RentalDetails() {
  const component = "Rental Details";

  return (
    <section className="container-xll container-fluid">
      <div className="row basic-row">
        <Navbar />

        <div className="datails">
          <div className="d-flex flex-column">
            <Basic component={component} />

            <div className="add-categor px-3 d-flex align-items-center justify-content-between">
              <h2>{component}</h2>
              <button className="btn">Edit</button>
            </div>

            <div className="categor-menu py-2 ">
              <div className="menu-search px-2 py-3 d-flex justify-content-between">
                <h2>Books</h2>
                <div>
                  <button className="btn">export</button>
                </div>
              </div>

              {/* *************** */}
              <div className="overflow-x-auto">
                <div className="menu-items overflow-x-auto">
                  <div
                    className=" d-flex align-items-center w-100 grid-container p-2"
                    style={{ backgroundColor: "#ccc" }}
                  >
                    <div className="col-2 nav-menu">Book</div>
                    <div className="col-3 nav-menu">Start-Date</div>
                    <div className="col-3 nav-menu">End-Date</div>
                    <div className="col-3 nav-menu">Total-Delay(Days)</div>
                    <div className="col-3 nav-menu">Extend-Date</div>
                    <div className="col-3 nav-menu">Return-Date</div>
                  </div>

                  <div className=" d-flex align-items-center w-100 grid-container grid-container-data p-2">
                    <div className="col-2" style={{ display: "flex" }}>
                      <img
                        style={{ width: "60px", height: "100px" }}
                        src="https://media.istockphoto.com/id/1367474419/photo/cup-of-coffee-and-book-on-wooden-pier-on-summer-lake.webp?b=1&s=170667a&w=0&k=20&c=7ap-bZ8M3vN2W_9frim3EFKX0o2aV--ZueWDCb2fPIM="
                      />
                      <p>Book Name</p>
                    </div>
                    <div className="col-3">17/Oct/2023</div>
                    <div className="col-3">17/Oct/2023</div>
                    <div className="col-3">17/Oct/2023</div>
                  </div>
                  <div className=" d-flex align-items-center w-100 grid-container grid-container-data p-2">
                    <div className="col-2" style={{ display: "flex" }}>
                      <img
                        style={{ width: "60px", height: "100px" }}
                        src="https://media.istockphoto.com/id/1367474419/photo/cup-of-coffee-and-book-on-wooden-pier-on-summer-lake.webp?b=1&s=170667a&w=0&k=20&c=7ap-bZ8M3vN2W_9frim3EFKX0o2aV--ZueWDCb2fPIM="
                      />
                      <p>Book Name</p>
                    </div>
                    <div className="col-3">17/Oct/2023</div>
                    <div className="col-3">17/Oct/2023</div>
                    <div className="col-3">17/Oct/2023</div>
                  </div>
                  <div className=" d-flex align-items-center w-100 grid-container grid-container-data p-2">
                    <div className="col-2" style={{ display: "flex" }}>
                      <img
                        style={{ width: "60px", height: "100px" }}
                        src="https://media.istockphoto.com/id/1367474419/photo/cup-of-coffee-and-book-on-wooden-pier-on-summer-lake.webp?b=1&s=170667a&w=0&k=20&c=7ap-bZ8M3vN2W_9frim3EFKX0o2aV--ZueWDCb2fPIM="
                      />
                      <p>Book Name</p>
                    </div>
                    <div className="col-3">17/Oct/2023</div>
                    <div className="col-3">17/Oct/2023</div>
                    <div className="col-3">17/Oct/2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RentalDetails;
