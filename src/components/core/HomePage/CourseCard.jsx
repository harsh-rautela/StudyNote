import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";
function CourseCard({cardData,currentCard,setCurrentCard}){
    return (
        // <div className="w-[350px] min-h-[160px]" >
        //     <div className={`flex-col flex gap-2 border border-richblack-25 m-2 p-3 justify-center min-h-full 
        //         ${currentCard===cardData.heading?"bg-white text-black scale-110 shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]":"bg-richblack-500 text-white"} transition-all duration-200 
        //          ` } onClick={()=>setCurrentCard(cardData.heading)} >
        //         <h1>{cardData.heading}</h1>
        //         <p className="">{cardData.description}</p>
        //         <div className="flex  justify-between">
        //             {/* instructor level */}
        //             <div className="" >{cardData.level}</div>
        //             {/* instructor lesons */}
        //             <div className="">{cardData.lessionNumber}</div>
        //         </div>
            

        //     </div>

        // </div>
            <div
      className={`w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-white  shadow-yellow-50 scale-105 shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]"
          : "bg-richblack-800"
      }  text-richblack-25 h-[300px] box-border cursor-pointer w-fit`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
        <div
          className={` ${
            currentCard === cardData?.heading && "text-richblack-800"
          } font-semibold text-[20px]`}
        >
          {cardData?.heading}
        </div>

        <div className="text-richblack-400">{cardData?.description}</div>
      </div>

      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading ? "text-blue-300" : "text-richblack-300"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessionNumber} Lession</p>
        </div>
      </div>
    </div>
    )
}
export default CourseCard