import { useSelector } from "react-redux"
import { Outlet } from "react-router";
import {BeatLoader} from "react-spinners"
import Sidebar from "../components/core/Dashboard/Sidebar";
function Dashboard() {
    const {loading:authLoading} = useSelector((state)=>state.auth);
    const {loading:profileLoading} = useSelector((state)=>state.profile);
    if(profileLoading || authLoading){
        return (
             <div >
                <BeatLoader
                color="#004080" size={44} margin={8}></BeatLoader>
             </div>
        )
    }

    return (
        <div className="relative flex min-h-[calc(100vh - 3.5rem)] w-full md:flex-row flex-col ">
            <Sidebar></Sidebar>
            <div className="min-h-[calc(100vh - 3.5rem)] overflow-auto flex justify-center items-center w-full">
                <div className="flex justify-center items-center flex-col w-11/12 max-w-[1000px] py-10 ">
                    <Outlet></Outlet>
                </div>


            </div>

        </div>
    )
}
export default Dashboard