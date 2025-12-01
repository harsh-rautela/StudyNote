import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimeLineImage.png"
const timeline =[
    {
        Logo:Logo1,
        heading:"Leadership",
        description:"Fully commited to the success company",
    },
    {
        Logo:Logo2,
        heading:"Leadership",
        description:"Fully commited to the success company",
    },
    {
        Logo:Logo3,
        heading:"Leadership",
        description:"Fully commited to the success company",
    },
    {
        Logo:Logo4,
        heading:"Leadership",
        description:"Fully commited to the success company",
    }
]
function TimelineSection(){
    return (
        <div>
            <div className="flex gap-15 items-center md:flex-row flex-col">
                 {/* left */}
                 <div className="w-[45%] flex flex-col gap-5">
                    {
                        timeline.map((element,index)=>{
                            return (
                                <div className="flex gap-6 " key={index}>
                                    <div className="w-[50px] h-[50px] bg-white flex items-center ">
                                        <img src={element.Logo} />
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[18px] ">{element.heading}</h2>
                                        <p className="text-base ">{element.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                {/* right */}
                <div className="relative shadow-blue-700">
                        <img src={timelineImage} alt="timelineimage"
                        className="shadow-white object-cover h-fit "/>
                        <div className="absolute bg-caribbeangreen-700 flex text-white uppercase py-7 md:flex-row flex-col
                        left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <div className="flex gap-5 items-center border-r border-caribbeangreen-300 px-7 ">
                                <p className="text-3xl font-bold ">10</p>
                                <p className="text-caribbeangreen-300 text-sm ">Years of experience</p>
                            </div>
                            <div className="flex gap-5 items-center px-7">
                                <p className="text-3xl font-bold ">250</p>
                                <p className="text-caribbeangreen-300 text-sm ">Type of Courses</p>

                            </div>

                        </div>
                </div>

            </div>

        </div>
    )
}
export default TimelineSection