import "./register.css";
import logo from "../../imagesss/logo.png";
import jaredd from "../../imagesss/jaredd-craig-HH4WBGNyltc-unsplash.jpg";
import google from "../../imagesss/google-removebg-preview.png";

function Register() {
  return (
    <section class="form register">
      <div class="container pt-4 pb-5">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col col-xl-10">
            <div class="card">
              <div class="row g-0 align-items-center">
                <div class="col-md-6 col-12 text-center left_side">
                  <img src={logo} class="position-absolute" />
                  <img src={jaredd} class="img_form" alt="login form" />
                  <h2 class="text-light px-lg-5 px-3 mt-1 mx-lg-3 mx-md-5 mx-2">
                    Discover Endless stories At Your Fingertips
                  </h2>
                </div>
                <div class="col-md-6 mt-3 d-flex align-items-center right_side">
                  <div class="card-body text-black">
                    <form>
                      <h5 class="fw-bold mt-3 mb-4">Create your account</h5>
                      <div class="form-outline mb-2">
                        <label class="form-label" for="form2">
                          FIRST NAME
                        </label>
                        <input
                          type="text"
                          placeholder="your first name"
                          id="form2"
                          class="form-control"
                        />
                      </div>
                      <div class="form-outline mb-2">
                        <label class="form-label" for="form3">
                          LAST NAME{" "}
                        </label>
                        <input
                          type="text"
                          placeholder="your last name"
                          id="form3"
                          class="form-control"
                        />
                      </div>
                      <div class="form-outline mb-2">
                        <label class="form-label" for="form2Example17">
                          EMAIL
                        </label>
                        <input
                          type="email"
                          placeholder="Your Email "
                          id="form2Example17"
                          class="form-control"
                        />
                      </div>

                      <div class="form-outline mb-2">
                        <label class="form-label" for="form2Example27">
                          PASSWORD
                        </label>
                        <input
                          type="password"
                          placeholder="password"
                          id="form2Example27"
                          class="form-control"
                        />
                      </div>
                      <div class="form-outline mb-2">
                        <label class="form-label" for="form2Example27">
                          CONFIRM PASSWORD
                        </label>
                        <input
                          type="password"
                          placeholder="CONFIRM PASSWORD"
                          id="form2Example27"
                          class="form-control"
                        />
                      </div>

                      <button
                        class="btn sign btn-block col-12 my-2"
                        type="button"
                      >
                        Sign in
                      </button>
                      <p class="text-center p-0 m-0 or_item">Or</p>
                      <a
                        href="#"
                        class="btn btn-block col-12 my-2"
                        type="button"
                      >
                        <img src={google} class="mx-2" width="30px" />
                        Continue with google
                      </a>
                    </form>
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

export default Register;
