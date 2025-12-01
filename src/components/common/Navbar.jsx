import {Link, matchPath} from "react-router"
import logo from "../../assets/Logo/Logo-Full-Light.png"
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from "react-router"
import { useSelector } from "react-redux"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/Auth/ProfileDropDown"
import { useEffect, useState } from "react"
import { apiConnector } from "../../services/apiConnector"
import { categories } from "../../services/apis"
import { BsChevronDown } from "react-icons/bs"
function Navbar(){
    const {token} = useSelector((state)=>state.auth);
    const {user}=useSelector((state)=>state.profile);
    const {totalItems}=useSelector((state)=>state.cart);
   const [sublinks,setSubLinks]=useState([]);
   const [isMenuOpen,setIsMenuOpen]=useState(false);
   const [loading, setLoading] = useState(false)
    const fetchLinks = async ()=>{
               setLoading(true);
                try{
                    const result = await apiConnector("GET",categories.CATEGORIES_API);
                    console.log(result);
                    setSubLinks(result.data.data);
                } catch(error){
                    console.log("Could not fetch the category list")
                    console.log(error);
                }
                setLoading(false);
            }
    useEffect(()=>{
        fetchLinks();
    },[])

    const location= useLocation();
    const matchRoute=(route)=>{
        return matchPath({path:route},location.pathname);

    }
    return (
        <div className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}>
            <div className="flex w-11/12 max-w-maxContent justify-between relative">
                {/* Image */}
                <Link to="/">
                <img src={logo} alt="logo" width={160} height={42} loading="lazy" />
                </Link>
                {/* Nav links */}
                <nav className=" md:block  hidden">
                    <ul className="flex gap-x-6 text-richblack-25 md:flex-row flex-col">
                        {
                            NavbarLinks.map((link,index)=>{
                                return (
                                    <li key={index}>
                                        {
                                            link.title === "Catalog"?(
                                    <div className="flex items-center gap-2 group relative">
                                        <p>{link.title}</p>
                                        <BsChevronDown></BsChevronDown>
                                      <div className=" invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">

                            <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"> </div>
                                            {
                                               loading ? (<p className="text-center">Loading</p>):
                                               (
                                                 sublinks.length > 0 ? (
                            
                                            sublinks.map((sublink,index)=>{
                                                return (
                                                    <Link to={`/catalog/${sublink.name.split(" ").join("-").toLowerCase()}`} className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={index}>
                                                        {sublink.name}
                                                    </Link>
                                                )
                                            })                          
                                                ):(<div><p className="text-center text-black">No Courses Found</p></div>)
                                               )       
                                        }
                                        
                                        
                                        </div>

                                    </div>):(
                                            <Link to={link?.path}>
                                                <p className={`${matchRoute(link?.path) ? "text-yellow-25":"text-richblack-25"}`}>
                                                    {link.title}
                                                </p>
                                            </Link>)
                                        }
                                    </li>
                                )

                            })
                        }

                    </ul>
                </nav>
                {/* login sign up dashboard */}
                <div className="hidden items-center gap-x-4 md:flex ">
                    {
                        user && user?.accountType !=="Instructor"  &&
                        (
                            <Link to={"/dashboard/cart"} className="relative w-full">
                                <AiOutlineShoppingCart className="text-2xl text-richblack-100"></AiOutlineShoppingCart>
                                {
                                    totalItems > 0 && (
                                    <span className="bg-green-400 rounded-full  absolute -top-2 -left-2 z-[10]  text-sm w-[45%] text-center">
                                        {totalItems}

                                    </span>) 
                                }
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to={"/login"}>
                            <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 ">
                                Log in 
                            </button>
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to={"/signup"}>
                                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 ">
                                    Sign up
                                </button>
                            </Link>
                        )
                    }
                    {
                        token !== null && <ProfileDropDown></ProfileDropDown>

                    }

                </div>
                {isMenuOpen && (
                    <div className="absolute top-11 -right-4 z-50 w-[45%] h-screen bg-richblack-800 px-6 py-4 flex flex-col gap-4 md:hidden">
                        <ul className="flex flex-col gap-2 text-richblack-25" onClick={(e) => e.stopPropagation()}>
                        {NavbarLinks.map((link, index) => (
                            <li key={index} >
                            {link.title === "Catalog" ? (
                                <div className="flex items-center gap-2 group relative">
                                        <p>{link.title}</p>
                                        <BsChevronDown ></BsChevronDown>
                                      <div className=" invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">

                            <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"> </div>
                                            {
                                               loading ? (<p className="text-center">Loading</p>):
                                               (
                                                 sublinks.length > 0 ? (
                            
                                            sublinks.map((sublink,index)=>{
                                                return (
                                                    <Link onClick={()=>setIsMenuOpen(false)}
                                                    to={`/catalog/${sublink.name.split(" ").join("-").toLowerCase()}`} className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={index}>
                                                        {sublink.name}
                                                    </Link>
                                                )
                                            })                          
                                                ):(<div onClick={()=>setIsMenuOpen(false)}><p className="text-center text-black">No Courses Found</p></div>)
                                               )       
                                        }
                                        
                                        
                                        </div>

                                    </div>
                            ) : (
                                <Link to={link.path}>
                                <p className={`${matchRoute(link.path) ? "text-yellow-25" : ""}`} onClick={()=>setIsMenuOpen(false)}>
                                    {link.title}
                                </p>
                                </Link>
                            )}
                            </li>
                        ))}
                        </ul>

                        <div className="flex flex-col gap-2">
                        {user && user?.accountType !== "Instructor" && (
                            <Link to="/dashboard/cart" className="flex items-center gap-2 relative w-full">
                            <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                            {totalItems > 0 && <span className="bg-green-400 rounded-full  absolute -top-2 -left-2 z-[10]  text-sm w-[8%]  text-center">{totalItems}</span>}
                            </Link>
                        )}
                        {token === null ? (
                            <>
                            <Link to="/login">
                                <button className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100" onClick={()=>setIsMenuOpen(false)}>
                                Log in
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100" onClick={()=>setIsMenuOpen(false)}>
                                Sign up
                                </button>
                            </Link>
                            </>
                        ) : (
                            <ProfileDropDown />
                        )}
                        </div>
                    </div>
                    )
                    }

                <button className="mr-4 md:hidden">
                    <AiOutlineMenu fontSize={24}
                    fill="#AFB2BF" onClick={()=>setIsMenuOpen(prev=>!prev)}></AiOutlineMenu>
                </button>                    

            </div>

        </div>
    )
}
export default Navbar