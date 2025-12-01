import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchInstructorCourses } from "../../../services/operations/courseDetails"
import IconBtn from "../../common/IconBtn"
import CourseTable from "./InstructorCourses/CourseTable"
function MyCourses(){
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token)
      if (result) {
        setCourses(result)
      }
    }
    fetchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="h-screen ">
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-[#BEC3FF]">My Courses</h1>
        <IconBtn
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd ></VscAdd>
        </IconBtn>
      </div>
      {courses && <CourseTable courses={courses} setCourses={setCourses} ></CourseTable>}
    </div>
  )
  

}
export default MyCourses