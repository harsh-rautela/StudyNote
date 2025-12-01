import { Route,Routes } from "react-router";
import { useEffect } from "react";
import Home from "./pages/Home";
import "./App.css"
import Navbar from "./components/common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword"
import UpdatePassword from "./pages/UpdatePassword"
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About"
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./pages/Error";
import Settings from "./components/core/Dashboard/Settings/Settings"
import Contact from "./pages/Contact";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart/Cart";
import { ACCOUNT_TYPE } from "./utils/constants";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router";
import AddCourse from "./components/core/Dashboard/AddCourses/AddCourse";
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse/EditCourse";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import { getUserDetails } from "./services/operations/profileAPI";
import Instructor from "./components/core/Dashboard/Instructor";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./components/core/viewCourse/VideoDetails";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.profile)
      useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar></Navbar>
      <Routes>
         <Route
              path="/signup"
          element={
          
                <OpenRoute>
                  <Signup></Signup>
                </OpenRoute>      }
             >
         </Route>
         <Route
               path="/login"
          element={
            <OpenRoute>
              <Login></Login>
            </OpenRoute>
          } >

        </Route>
        <Route path="/" element={<Home></Home>}>        
        </Route>
        <Route path="catalog/:catalogName" element={<Catalog></Catalog>}>        
        </Route>
        <Route path="courses/:courseId" element={<CourseDetails></CourseDetails>}>        
        </Route>

        <Route path="/forgot-password" element={
          <OpenRoute>
            <ForgotPassword></ForgotPassword>
          </OpenRoute>}></Route>
         <Route path="/update-password/:id" element={
          <OpenRoute>
            <UpdatePassword></UpdatePassword>
          </OpenRoute>}></Route>
           <Route path="verify-email" element={
          <OpenRoute>
            <VerifyEmail></VerifyEmail>
          </OpenRoute>}></Route>
             <Route path="/about" element={
          
             <About></About>
          }></Route>
         
          
          <Route
          element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }>
            <Route
          path="dashboard/my-profile"
          element={
            <MyProfile></MyProfile>
          }>
          </Route>
          <Route
          path="dashboard/settings"
          element={
            <Settings></Settings>
          }>
         </Route>
         {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="dashboard/cart" element={<Cart></Cart>} />
          <Route path="dashboard/enrolled-courses" element={<EnrolledCourses></EnrolledCourses>} />
          </>
        )
          }         
          {
        user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
          <Route path="dashboard/instructor" element={<Instructor></Instructor>}></Route>
          <Route path="dashboard/add-course" element={<AddCourse></AddCourse>} />
          <Route path="dashboard/my-courses" element={<MyCourses ></MyCourses>} ></Route>
          <Route path="dashboard/edit-course/:courseId" element={<EditCourse ></EditCourse>} ></Route>
          </>
        )
          } 
         </Route>
          <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              ></Route>
            </>
          )}
        </Route>
          <Route path="*" element={<Error></Error>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
