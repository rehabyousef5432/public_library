import "./users.css";
import Basic from "../../components/basic/Basic";
import Navbar from "../../components/basic/Navbar";

import search from "../../images/Icons/search.svg";

function Users() {
  const component = "Users";

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

            <div className="categor-menu py-2 ">
              <div className="menu-search px-2 py-3 d-flex justify-content-between">
                <div className="menu-search-search d-flex justify-content-between">
                  <img className=" w-25" src={search} alt="" />
                  <input name="search" type="search" placeholder="Search" />
                </div>
                <div>
                  <button className="btn">export</button>
                </div>
              </div>

              {/* *************** */}
              <div className="overflow-x-auto">
                <div className="menu-items overflow-x-auto">
                  <div className=" d-flex align-items-center w-100 grid-container p-2">
                    <div className="col-2 nav-menu">FullName</div>
                    <div className="col-2 nav-menu">Username</div>
                    <div className="col-2 nav-menu">Email</div>
                    <div className="col-2 nav-menu px-3">Status</div>
                    <div className="col-3 nav-menu">Created on</div>
                    <div className="col-3 nav-menu">last Updated</div>
                    <div className="col-2 nav-menu d-flex justify-content-end">
                      <button className="btn">Action</button>
                    </div>
                  </div>

                  <div className=" d-flex align-items-center w-100 grid-container grid-container-data p-2">
                    <div className="col-2">Laila Ahmed</div>
                    <div className="col-2">laila</div>
                    <div className="col-2">laila@gmail.com</div>
                    <div className="col-2">
                      <button className="btn">Available</button>
                    </div>
                    <div className="col-3">2/20/2024 10:50:49 pm</div>
                    <div className="col-3">2/29/2024 5:50:49 pm</div>
                    <div className="col-2 d-flex justify-content-end">
                      <button className="btn">Action</button>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center w-100 grid-container grid-container-data p-2">
                    <div className="col-2">Laila Ahmed</div>
                    <div className="col-2">laila</div>
                    <div className="col-2">laila@gmail.com</div>
                    <div className="col-2">
                      <button className="btn">Available</button>
                    </div>
                    <div className="col-3">2/20/2024 10:50:49 pm</div>
                    <div className="col-3">2/29/2024 5:50:49 pm</div>
                    <div className="col-2 d-flex justify-content-end">
                      <button className="btn">Action</button>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center w-100 grid-container grid-container-data p-2">
                    <div className="col-2">Laila Ahmed</div>
                    <div className="col-2">laila</div>
                    <div className="col-2">laila@gmail.com</div>
                    <div className="col-2">
                      <button className="btn">Available</button>
                    </div>
                    <div className="col-3">2/20/2024 10:50:49 pm</div>
                    <div className="col-3">2/29/2024 5:50:49 pm</div>
                    <div className="col-2 d-flex justify-content-end">
                      <button className="btn">Action</button>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center w-100 grid-container grid-container-data p-2">
                    <div className="col-2">Laila Ahmed</div>
                    <div className="col-2">laila</div>
                    <div className="col-2">laila@gmail.com</div>
                    <div className="col-2">
                      <button className="btn">Available</button>
                    </div>
                    <div className="col-3">2/20/2024 10:50:49 pm</div>
                    <div className="col-3">2/29/2024 5:50:49 pm</div>
                    <div className="col-2 d-flex justify-content-end">
                      <button className="btn">Action</button>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center w-100 grid-container grid-container-data p-2">
                    <div className="col-2">Laila Ahmed</div>
                    <div className="col-2">laila</div>
                    <div className="col-2">laila@gmail.com</div>
                    <div className="col-2">
                      <button className="btn">Available</button>
                    </div>
                    <div className="col-3">2/20/2024 10:50:49 pm</div>
                    <div className="col-3">2/29/2024 5:50:49 pm</div>
                    <div className="col-2 d-flex justify-content-end">
                      <button className="btn">Action</button>
                    </div>
                  </div>
                  <div className=" d-flex align-items-center w-100 grid-container grid-container-data p-2">
                    <div className="col-2">Laila Ahmed</div>
                    <div className="col-2">laila</div>
                    <div className="col-2">laila@gmail.com</div>
                    <div className="col-2">
                      <button className="btn">Available</button>
                    </div>
                    <div className="col-3">2/20/2024 10:50:49 pm</div>
                    <div className="col-3">2/29/2024 5:50:49 pm</div>
                    <div className="col-2 d-flex justify-content-end">
                      <button className="btn">Action</button>
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

export default Users;
