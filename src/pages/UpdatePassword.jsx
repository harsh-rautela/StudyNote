import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { resetPassword } from "../services/operations/authAPI";
import { useLocation, useNavigate } from "react-router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import {Link} from "react-router"
function UpdatePassword(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const {loading} = useSelector((state)=>state.auth);
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const [formData,setFormData]=useState({
        password:"",
        confirmPassword:"",
    });
    const {password,confirmPassword} =formData;
    const handleOnChange = (e)=>{
        setFormData((prev)=>
        ({...prev,
            [e.target.name]:e.target.value,
        }))
    };
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password,confirmPassword,token,navigate))


    }
    return (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          {
            loading ? (
              <div>
                Loading...
              </div>
            ) :(<div className="max-w-[500px] p-4 lg:p-8">
                <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
                    Choose new Password
                </h1>
                <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">All most done.Enter your new password and you are all set.</p>
                <form onSubmit={handleOnSubmit} >
                    <label className="relative">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                            New Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input type={showPassword ? "test":"password"}
                        required 
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none w-full !pr-10"
                        />
                        <span className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}>
                             {showPassword ? (
                                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                      ) : (
                                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                      )}
                        </span>
                    </label>
                    <label className="relative mt-3 block">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                            Confirm Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input type={showPassword ? "test":"password"}
                        required 
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleOnChange}
                        className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none w-full !pr-10"
                        />
                        <span
                        className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}>
                             {showConfirmPassword ? (
                                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                      ) : (
                                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                      )}
                        </span>
                    </label>                    
                    <button type="submit"
                     className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900">
                        Reset Password
                    </button>                  
                </form>
                <div className="mt-6 flex items-center justify-between">
                    <Link to={"/login"}>
                        <p className="flex items-center gap-x-2 text-richblack-5">Back to Login</p>
                    </Link>
                </div>


            </div>)
          }


        </div>
    )
}
export default UpdatePassword