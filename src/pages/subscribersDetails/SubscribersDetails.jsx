import "./subscribersDetails.css";
import Basic from "../../components/basic/Basic";
import Navbar from "../../components/basic/Navbar";

import search from "../../images/Icons/search.svg";

function SubscribersDetails() {
  const component = "Subscribers Details";

  return (
    <section className="container-xll container-fluid">
      <div className="row basic-row">
        <Navbar />

        <div className="datails">
          <div className="d-flex flex-column">
            <Basic component={component} />

            <div className="add-categor px-3 d-flex align-items-center justify-content-between">
              <h2>{component}</h2>
              <button className="btn">ADD</button>
            </div>
          </div>

          <div className="categor-menu py-2 myDesign">
            <div className="myLeft">
              <div className="subInfo">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="userImage"
                  className="userImg"
                />
                <div
                  style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}
                >
                  Test
                </div>
                <div
                  style={{
                    color: "#ccc",
                    fontSize: "17px",
                    fontWeight: "bold",
                  }}
                >
                  Test@gmail.com
                </div>
              </div>
              <div className="subDetails">
                <div
                  style={{
                    color: "tomato",
                    fontSize: "17px",
                    fontWeight: "bold",
                  }}
                >
                  Details
                </div>
                <div
                  style={{
                    backgroundColor: "teal",
                    color: "white",
                    fontSize: "16px",
                    borderRadius: "7px",
                    padding: "3px",
                  }}
                >
                  Inactive Subscriber
                </div>
              </div>

              <hr />

              <div className="accountInfo">
                <div
                  style={{
                    color: "red",
                    fontSize: "17px",
                    fontWeight: "bold",
                  }}
                >
                  Account ID
                </div>
                <div
                  style={{
                    color: "gray",
                    fontSize: "15px",
                  }}
                >
                  ID-156
                </div>
                <div
                  style={{
                    color: "red",
                    fontSize: "17px",
                    fontWeight: "bold",
                  }}
                >
                  Mobile NO
                </div>
                <div
                  style={{
                    color: "gray",
                    fontSize: "15px",
                  }}
                >
                  01133335592
                </div>
              </div>
            </div>

            <div className="myRight">
              <div className="myHead">
                <h5
                  style={{
                    marginRight: "20px",
                    fontStyle: "italic",
                    color: "teal",
                    fontWeight: "bold",
                  }}
                >
                  Overview
                </h5>
                <h5 style={{ fontStyle: "italic", color: "GrayText" }}>
                  Rentals
                </h5>
              </div>
              <div className="myTwo">
                <div className="myTwoLeft">
                  <h5 style={{ fontStyle: "italic" }}>Number of Rentals</h5>
                  <h5>0</h5>
                  <div
                    style={{
                      color: "#ccc",
                      fontSize: "17px",
                      fontWeight: "bold",
                      marginTop: "20px",
                    }}
                  >
                    Total Number Of Copies
                  </div>
                </div>
                <div className="myTwoLeftRight">
                  <img src="" alt="ICON" />
                  <h5 style={{ fontStyle: "italic" }}>Inactive Subscribers</h5>
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                  >
                    Subscriber Since In 16/OCT
                  </div>
                </div>
              </div>

              <div className="myEnd">
                <div className="categor-menu py-2 ">
                  <div className="menu-search px-2 py-3 d-flex justify-content-between">
                    <h5
                      style={{
                        fontStyle: "italic",
                        fontWeight: "bold",
                        color: "gray",
                      }}
                    >
                      Renewal History
                    </h5>
                    <div>
                      <button className="btn">Renew</button>
                    </div>
                  </div>

                  {/* *************** */}
                  <div className="overflow-x-auto">
                    <div className="menu-items overflow-x-auto">
                      <div
                        className=" d-flex align-items-center w-100 grid-container p-2"
                        style={{ backgroundColor: "darkgray" }}
                      >
                        <div className="col-3 nav-menu">Start date</div>
                        <div className="col-3 nav-menu">End Date</div>
                        <div className="col-2 nav-menu px-3">Status</div>
                        <div className="col-3 nav-menu mx-5">Add On</div>
                      </div>

                      <div className=" d-flex align-items-center w-100 grid-container grid-container-data p-2">
                        <div className="col-3">16 jul,2024</div>
                        <div className="col-3">16 jul,2024</div>
                        <div className="col-2">
                          <button className="btn" style={{ color: "white" }}>
                            Expired
                          </button>
                        </div>
                        <div className="col-3 mx-5">7/21/2024 4:05:48 pm</div>
                      </div>
                      <div className=" d-flex align-items-center w-100 grid-container grid-container-data p-2">
                        <div className="col-3">16 jul,2024</div>
                        <div className="col-3">16 jul,2024</div>
                        <div className="col-2">
                          <button className="btn" style={{ color: "white" }}>
                            Expired
                          </button>
                        </div>
                        <div className="col-3 mx-5">7/21/2024 4:05:48 pm</div>
                      </div>
                      <div className=" d-flex align-items-center w-100 grid-container grid-container-data p-2">
                        <div className="col-3">16 jul,2024</div>
                        <div className="col-3">16 jul,2024</div>
                        <div className="col-2">
                          <button className="btn" style={{ color: "white" }}>
                            Expired
                          </button>
                        </div>
                        <div className="col-3 mx-5">7/21/2024 4:05:48 pm</div>
                      </div>
                      <div className=" d-flex align-items-center w-100 grid-container grid-container-data p-2">
                        <div className="col-3">16 jul,2024</div>
                        <div className="col-3">16 jul,2024</div>
                        <div className="col-2">
                          <button className="btn" style={{ color: "white" }}>
                            Expired
                          </button>
                        </div>
                        <div className="col-3 mx-5">7/21/2024 4:05:48 pm</div>
                      </div>
                    </div>
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

export default SubscribersDetails;
