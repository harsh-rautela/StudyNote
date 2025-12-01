import { FaArrowRight } from "react-icons/fa"
import Instructor from "../../../assets/Images/Instructor.png"
import CTAButton from "./Button"
import HighlightText from "./HighlightText"
function InstructorSection(){
    return (
        <div className="mt-16">
            <div className="flex gap-20 items-center md:flex-row flex-col">
                {/* left box */}
                <div className="w-[50%]">
                    <img src={Instructor} alt="Instructor Image"  className="shadow-white"/>
                </div>
                <div className="w-[50%] flex flex-col gap-10 ">
                    <div className="text-4xl font-semibold w-[50%]">
                        Become an 
                        <HighlightText text={"Instructor"}></HighlightText>
                    </div>
                    <p className="font-medium text-[16px] w-[80%]  text-richblack-300">
                        Instructors from around the world teach millions of students on StudyNotion. 
                        We provide the tools and skills to teach what you love. 
                    </p>
                    <div className="w-fit">
                        <CTAButton active={true} linkto={"/signup"}>
                     <div className="flex gap-2 items-center">
                        Start Learning Today
                        <FaArrowRight></FaArrowRight>
                     </div>

                    </CTAButton>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default InstructorSection