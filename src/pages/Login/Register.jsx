import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoUrl, email, password);

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error => {
            console.log(error.message);
        })
    }  


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Please Register !!!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            {/* from */}
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text" name="name"
                  placeholder="Enter name"
                  className="input input-bordered" required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text" name="photoUrl"
                  placeholder="Enter Photo URL"
                  className="input input-bordered" required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email" name="email"
                  placeholder="Enter email"
                  className="input input-bordered" required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered" required
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <label className="label text-left">
                <p className="label-text-alt">
                Already have an Account?
                <Link to="/login/login" className="link link-hover"> Login</Link></p>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
