import { Routes, Route } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./contexts/AuthContext"

// Import Components
import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"

// All pages
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import HomePage from "./pages/homepage/HomePage.jsx"
import AllCoursesPage from "./pages/course/allCourses/AllCourses.jsx"
import MyCoursesPage from "./pages/course/myCourses/MyCourses.jsx"
import MajorCoursesSelectPage from "./pages/select/majorSelect/MajorSelect"
import CourseWithdrawalPage from "./pages/select/courseWithdrawal/CourseWithdrawal"
import TranscriptPage from "./pages/user/transcript/Transcript"
import StudentInfoPage from "./pages/user/studentInfo/StudentInfo"
import NotDevelopedPage from "./pages/utils/notDeveloped/NotDeveloped.jsx"

// Helpers components
import ProtectedRoute from "./helpers/ProtectedRoute"

function App() {
  // State variables
  const { tempUser } = useContext(AuthContext)

  return (
    <div className="App">
      <Topbar />
      {tempUser && <Sidebar />}

      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          exact="true"
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/course/allCourses"
          element={
            <ProtectedRoute>
              <AllCoursesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/course/myCourses"
          element={
            <ProtectedRoute>
              <MyCoursesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/select/majorSelect"
          element={
            <ProtectedRoute>
              <MajorCoursesSelectPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/select/withdrawal"
          element={
            <ProtectedRoute>
              <CourseWithdrawalPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/transcript"
          element={
            <ProtectedRoute>
              <TranscriptPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/studentInfo"
          element={
            <ProtectedRoute>
              <StudentInfoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <NotDevelopedPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
