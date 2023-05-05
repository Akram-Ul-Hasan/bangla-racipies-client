import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {createUser, setDisplayNamePhotoUrl} = useContext(AuthContext)

    const handleRegister = event =>{
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoUrl, email, password);

        if(!/(?=.*[A-Z])/.test(password))
        {
            setError("Please add at least one upper case  letter.");
            return ;
        }
        else if(!/(?=.*[a-z])/.test(password)){
            setError("Please add at least one lower case  letter.")
            return ;
        }
        else if(!/(?=.*[0-9])/.test(password))
        {
            setError("Please add at least one number.");
            return ;
        }
        else if(password.length< 6)
        {
            setError("Password should be at least 6 character");
            return ;
        }

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            setError('');
            event.target.reset();
            setSuccess('User has been created successfully!');
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
            
        })

        setDisplayNamePhotoUrl(name, photoUrl)
        .then(()=>{
        })
        .catch(error =>{
          console.log(error.message)
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
                  type="password"
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
            <p className="text-error ms-10 mb-5">{error}</p>
            <p className="text-success ms-10 mb-5">{success}</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
