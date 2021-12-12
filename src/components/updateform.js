import { Formik } from "formik";
import { Button, Card, CardContent } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import "./signup.css";
import app_config from "../config";
import Swal from "sweetalert2";

const Signup = () => {
  const url = app_config.api_url;

  // Two important thing to use with Formik
  // 1. formObject
 
  // 2. submit callback function
  const UpdateSubmit = (formdata) => {
    console.log(formdata);

    // three things are required to request
    // 1. address
    // 2. http request method
    // 3. data and its format

    const reqOpt = {
      method: "PUT",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/update/"+props.updateFormData._id, reqOpt)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "You have registered successfully!",
        });
      });
  };

  return (
    <div className="update-bg">
      <h1 className="text-center">Update Form</h1>
      <hr />
      <div className="col-md-4 mx-auto">
        <Card>
          <CardContent>
            <Formik initialValues={signupForm} onSubmit={SignupSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <label className="mt-3">Email</label>
                  <input
                    placeholder="email"
                    className="form-control"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />

                  <label className="mt-3">Username</label>
                  <input
                    placeholder="username"
                    className="form-control"
                    id="username"
                    value={values.username}
                    onChange={handleChange}
                  />

                  <label className="mt-3">Password</label>
                  <input
                    type="password"
                    placeholder="password"
                    className="form-control"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    className=" mt-5 float"
                    variant="contained"
                    color="secondary"
                    startIcon={<GoogleIcon />}
                  >
                    Update
                  </Button>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;