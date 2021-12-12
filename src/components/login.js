import { Formik } from "formik";
const Login = () => {
    const loginForm = {
        email: "",
        username: "",
        password: "",
      };
    
      
      const LoginSubmit = (formdata) => {
        console.log(formdata);
      };
    
     
    return(

        <div>
        <h1 className="text-center">Login Here</h1>
        <hr />
        <div className="col-md-4 mx-auto">
          <Formik initialValues={loginForm} onSubmit={LoginSubmit}>
            {({ values, handleSubmit, handleChange }) => (
               <form onSubmit={handleSubmit}>
                 
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
                
                <p className="text-center">or</p>
                <h5 className="text-center">
                {/* <NavLink to="/login">Go to Login</NavLink> */}
                </h5>
                
                
  
                <button type="submit" className="btn btn-primary w-100 mt-5">
                  Continue to Login
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
  
          );
};

export default Login;