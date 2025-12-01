import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiConnector";
import { contactusEndpoint } from "../../services/apis";
import countryCode from "../../data/countrycode.json"

function ContactUsForm(){
    const [loading,setLoading]=useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors,isSubmitSuccessful},
    } = useForm();
    const submitContactForm = async (data)=>{
        console.log("logging Data");
        try{
            setLoading(true);
            const response = await apiConnector("POST",contactusEndpoint.CONTACT_US_API,data)
            console.log("logging response",response);
            setLoading(false);
        } catch(error){
            console.log("error",error.message);
            setLoading(false);



        }
    }
    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                email:"",
                firstName:"",
                lastName:"",
                message:"",
                phonenumber:"",
            })
        }
    },[isSubmitSuccessful,reset])
    return (
            <form
            className="flex flex-col gap-7"
             onSubmit={handleSubmit(submitContactForm)}>
               
                 <div className="flex flex-col gap-5 lg:flex-row">       
                    {/* first name */}
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                      <label  htmlFor="firstname" className="text-[14px] text-richblack-5">First Name</label>
                      <input type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Enter your first name" 
                      className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none"
                      {...register("firstname",{required:true})}
                      />{
                        errors.firstname && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Please Enter your Name
                            </span>
                        )
                      }
                    </div>
                    {/* last name */}
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                      <label  htmlFor="lastname" className="text-[14px] text-richblack-5">Last Name</label>
                      <input type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Enter your last name" 
                      {...register("lastname")}
                      className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none"
                      />
                    </div>               
                </div>
                {/* email */}
                <div className="flex flex-col gap-2">
                    <label  htmlFor="email" className="text-[14px] text-richblack-5">Email Address</label>
                    <input type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email" 
                    {...register("email",{required:true})}
                    className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none"
                    />
                    {
                    errors.email && <span className="-mt-1 text-[12px] text-yellow-100">
                        Please Enter your email address
                    </span>
                    }


                </div>   
                    {/* phone number  */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="phonenumber" className="text-[14px] text-richblack-5">
                        Phone Number
                    </label>
                    <div className="flex gap-5">
                        {/* dropdown */}
                        <div className="flex w-[81px] flex-col gap-2">
                            <select name="dropdown" id="dropdown" 
                            className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none"
                            {...register("countrycode",{required:true})}>
                                {
                                    countryCode.map((ele,index)=>{
                                        return (
                                            <option value="" key={index}>
                                                { ele.country} - {ele.code}

                                            </option>
                                        )
                                    })


                                }

                            </select>


                        </div>
                        <div className="flex w-[calc(100%-90px)] flex-col gap-2">
                            <input type="number" name="phonenumber" id="phonenumber"
                             
                            placeholder="123456789" 
                            className=" no-spinner  rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none"
                            {...register("phonenumber",{
                                required:{value:true,message:"please enter phone number"},
                                maxLength:{value:10,message:"Invalid Phone number"},
                                minLength:{value:8,message:"Invalid Phone number"}
                            },)}/>
                            {
                    errors.phonenumber && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            {errors.phonenumber.message}
                        </span>
                    )
                }
                        </div>

                </div>


                </div>
                     {/* message box  */}
                <div className="flex flex-col">
                    <label  htmlFor="message" className="text-[14px] text-richblack-5">Message</label>
                    <textarea name="message" 
                    id="message"
                    cols={"30"}
                    rows={"7"}
                    placeholder="Enter your message here"
                    className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none"
                    {...register("message",{required:true})}></textarea>
                        {
                            errors.message && <span className="-mt-1 text-[12px] text-yellow-100">
                                Please enter your messaged
                            </span>
                            
                        }
                </div>

                <button type="submit"
                disabled={loading}
                className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
                >
                    Send Message

                </button>
               
                
            </form>
    )
}
export default ContactUsForm