import "./user.css";
import Basic from "../../components/basic/Basic";
import Navbar from "../../components/basic/Navbar";
import DisplayImage from "../../components/Books/UploadImage";

function User() {
  const component = "Subscribers";

  return (
    <section className="container-xll container-fluid">
      <div className="row basic-row">
        <Navbar />

        <div className="datails">
          <div className="d-flex flex-column">
            <Basic component={component} />

            <div className="categor-menu py-2 ">
              <h5>Subscribers Update</h5>

              <div className="addbook-date ">
                <div className=" d-flex align-items-center my-4">
                  <div className="date-name">
                    <p>PHOTO</p>
                  </div>
                  <div className="date-input d-flex justify-content-center">
                    <div className="mx-2 img-upload">
                      <DisplayImage />
                    </div>
                  </div>
                </div>
                <div className=" d-flex align-items-center my-4">
                  <div className="date-name">
                    <p>Full-Name</p>
                  </div>
                  <div className="date-input">
                    <input type="text" name="" id="" />
                  </div>
                </div>
                <div className=" d-flex align-items-center my-4">
                  <div className="date-name">
                    <p>Date Of Birth</p>
                  </div>
                  <div className="date-input">
                    <input type="date" name="" id="" />
                  </div>
                </div>
                <div className=" d-flex align-items-center my-4">
                  <div className="date-name">
                    <p>National Id</p>
                  </div>
                  <div className="date-input">
                    <input type="text" name="" id="" />
                  </div>
                </div>
                <div className=" d-flex align-items-center my-4">
                  <div className="date-name">
                    <p>Contact</p>
                  </div>
                  <div className="date-input">
                    <input type="text" name="" id="" />
                  </div>
                </div>
                <div className=" d-flex align-items-center my-4">
                  <div className="date-name">
                    <p>Governate Area</p>
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

export default User;
