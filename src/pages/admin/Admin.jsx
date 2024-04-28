import "./admin.css";
import Basic from "../../components/basic/Basic";
import Navbar from "../../components/basic/Navbar";
import DisplayImage from "../../components/Books/UploadImage";

function Admin() {
  const component = "Admin";

  return (
    <section className="container-xll container-fluid">
      <div className="row basic-row">
        <Navbar />

        <div className="datails">
          <div className="d-flex flex-column">
            <Basic component={component} />

            <div className="add-categor px-3 d-flex align-items-center">
              <div>
                <img
                  src="https://media.istockphoto.com/id/1475470389/photo/phone-city-and-trendy-woman-on-mobile-app-chatting-or-texting-for-5g-networking-young-fashion.webp?b=1&s=170667a&w=0&k=20&c=L7HcQUfJa0PScIHHZAN0KZw0E6icH_gWnhaYUx6jhRw="
                  alt="userImage"
                  style={{ width: "55px", height: "55px", borderRadius: "50%" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  maxHeight: "content",
                  marginTop: "5px",
                  marginLeft: "5px",
                }}
              >
                <h6>Laila</h6>
                <p style={{ fontSize: "12px" }}>laila@gmail.com</p>
              </div>
            </div>

            <div className="addbook-menu py-2 ">
              <div className="addbook">
                <h3>Profile Details</h3>
              </div>

              <div className="addbook-date ">
                <div className=" d-flex align-items-center my-4">
                  <div className="date-name">
                    <p>image</p>
                  </div>
                  <div className="date-input d-flex justify-content-center">
                    <div className="mx-2 img-upload">
                      {/* <img className='w-100' src={bookAdd} alt="" /> */}
                      <DisplayImage />
                    </div>
                  </div>
                </div>
                <div className=" d-flex align-items-center my-4">
                  <div className="date-name">
                    <p>full name</p>
                  </div>
                  <div className="date-input">
                    <input type="text" name="" id="" />
                  </div>
                </div>
                <div className=" d-flex align-items-center my-4">
                  <div className="date-name">
                    <p>phone number</p>
                  </div>
                  <div className="date-input">
                    <input type="text" name="" id="" />
                  </div>
                </div>
              </div>

              <div className="addbook-button">
                <button className="btn addbook-button-1">Save</button>
                <button className="btn addbook-button-2">cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
