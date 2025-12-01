import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import IconBtn from "../../common/IconBtn"
import { RiEditBoxLine } from "react-icons/ri"
import {formattedDate} from "../../../utils/dateFormatter"

function MyProfile(){
    const {user} = useSelector((state)=>state.profile);
    console.log(user);
    const navigate = useNavigate();
    return (
           <div>
            <h1 className="mb-14 text-3xl font-medium text-[#BEC3FF] text-center">
                My Profile
            </h1>
            {/* section 1 */}
            <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 md:flex-row flex-col">
                <div className="flex items-center md:gap-x-4 md:flex-row flex-col gap-y-2 md:mb-0 mb-2">
                    <img src={user?.image} 
                    alt={`profile-${user?.firstName}`} 
                    className="aspect-square w-[78px] rounded-full object-cover"/>
                    <div className="space-y-1">
                        <p className="text-lg font-semibold text-richblack-5 text-center">{user?.firstName + " "+ user?.lastName}</p>
                        <p className="text-sm text-richblack-300">{user?.email}</p>
                    </div>
                </div>
                <IconBtn
                text={"Edit"}
                onclick={()=>{navigate("/dashboard/settings")}}>
                    <RiEditBoxLine></RiEditBoxLine>
                </IconBtn>
            </div>
            {/* section 2 */}
            <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
                <div className="flex w-full items-center justify-between">
                    <p className="text-lg font-semibold text-[#BEC3FF]">About</p>
                    <IconBtn
                    text={"Edit"}
                    onclick={()=>(navigate("/dashboard/settings"))}>
                        <RiEditBoxLine></RiEditBoxLine>
                    </IconBtn>
                </div>
                <p
                className={`${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } text-sm font-medium`}>{user?.additionalDetails?.about ??
                 "Write something about yourself"}</p>
            </div>
            {/* section 3 */}
            <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
                <div className="flex w-full items-center justify-between">
                    <p className="text-lg font-semibold text-[#BEC3FF] ">Personal details</p>
                    <IconBtn
                    text={"Edit"}
                onclick={()=>{navigate("/dashboard/settings")}}>
                    <RiEditBoxLine></RiEditBoxLine>
                </IconBtn>
                </div>
                <div className="md:flex md:min-w-[500px] justify-between  ">
                    <div className="flex flex-col  justify-between items-center gap-4 border-[#BEC3FF] border p-1">
                        <p className=" text-sm text-[#BEC3FF] font-medium">First Name</p>
                        <p className="text-sm font-medium text-richblack-5">{user?.firstName}</p>
                    </div>
                    
                    <div className="flex flex-col   justify-between items-center gap-4 border-[#BEC3FF] border p-1">
                        <p className="text-sm text-[#BEC3FF] mx-auto">email</p>
                        <p className="text-sm font-medium text-richblack-5 px-2 ">{user?.email}</p>
                    </div>
                    
                    <div className="flex flex-col   justify-between items-center  gap-4 border-[#BEC3FF] border p-1">
              <p className=" text-sm text-[#BEC3FF]">Gender</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
                   </div>
                    
                     <div className="flex flex-col   justify-between items-center  gap-4 border-[#BEC3FF] border p-1">
              <p className=" text-sm text-[#BEC3FF]">Last Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
                   </div>
                    
                    <div className="flex flex-col  justify-between items-center  gap-4 border-[#BEC3FF] border p-1">
              <p className=" text-sm text-[#BEC3FF]">Phone Number</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
                   </div>
                    
                     <div className="flex flex-col   justify-between items-center  gap-4 border-[#BEC3FF] border p-1">
              <p className=" text-sm text-[#BEC3FF]">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-5">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p>
                   </div>
                </div>
            </div>
           </div>
           
           
    )
}
export default MyProfile