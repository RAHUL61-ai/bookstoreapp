import { Link } from "react-router-dom";
import Login from "./login";
import { useForm } from 'react-hook-form';
const Signup = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Log the form data
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box relative">
            {/* Close Button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>

            {/* Signup Form */}
            <h3 className="font-bold text-lg">Signup</h3>
            <form     onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 border rounded-md outline-none"

                  required
                  {...register('name', { required: 'name is required' })}
                />
                 {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 border rounded-md outline-none"
                  required
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 border rounded-md outline-none"
                  required
                  {...register('password', { required: 'password is required' })}
                />
                  {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
                >
                  Signup
                </button>
                <p>
                  Have an account?{" "}
                  <button 
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Login Component */}
      <Login />
    </>
  );
};

export default Signup;
