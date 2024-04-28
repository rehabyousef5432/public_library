import "./login.css";
import logo from "../../imagesss/logo.png";
import pexels from "../../imagesss/pexels-ena-marinkovic-3790839.jpg.png";
import google from "../../imagesss/google-removebg-preview.png";

function Login() {
  return (
    <section class="form login" style={{ height: "100vh" }}>
      <div class="container py-5">
        <div class="row justify-content-center align-items-center">
          <div class="col col-xl-10">
            <div class="card">
              <div class="row g-0 align-items-center">
                <div class="col-md-6 col-12 text-center left_side">
                  <img src={logo} class="position-absolute" />
                  <img src={pexels} class="img_form" alt="login form" />
                  <h1 class="text-light px-5">
                    Explore New wolds with a Click
                  </h1>
                </div>

                <div class="col-md-6 align-items-center right_side">
                  <div class="card-body text-black">
                    <form>
                      <h5 class="fw-bold mt-3 mb-4 pb-3">
                        login to your account
                      </h5>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example17">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Email Address"
                          id="form2Example17"
                          class="form-control"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example27">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="password"
                          id="form2Example27"
                          class="form-control"
                        />
                      </div>
                      <div class="d-flex justify-content-between">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            REMEMBER ME
                          </label>
                        </div>
                        <a class="forgot" href="#!">
                          Forgot password?
                        </a>
                      </div>
                      <button
                        class="btn sign btn-lg btn-block col-12 my-3"
                        type="button"
                      >
                        Sign in
                      </button>
                      <a
                        href="#"
                        class="btn btn-lg btn-block col-12 my-3"
                        type="button"
                      >
                        <img src={google} class="mx-2" width="30px" />
                        Continue with google
                      </a>
                      <p class="text-center">
                        Don't have an account?
                        <a href="register.html" class="sign_link">
                          sign up
                        </a>
                      </p>
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

export default Login;
