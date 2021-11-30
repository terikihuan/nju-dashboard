import React from "react"
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri"
import * as BiIcons from "react-icons/bi"
import * as CgIcons from "react-icons/cg"
import * as MdIcons from "react-icons/md"

const navData = [
  {
    title: "User",
    path: "/user",
    icon: <FaIcons.FaRegUser />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Student Info",
        path: "/user/studentInfo",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Transcript",
        path: "/user/transcript",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Course Retake",
        path: "/user/courseRetake",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Academic Review",
        path: "/user/review",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Exam Retake",
        path: "/user/examRetake",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Change Password",
        path: "/user/changePass",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Dissertation",
        path: "/user/dissertation",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Course Evaluation",
        path: "/user/evaluation",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Courses Info",
    path: "/course",
    icon: <MdIcons.MdOutlineSchool />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "My Courses",
        path: "/course/myCourses",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "All Courses",
        path: "/course/allCourses",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Exam Delay",
        path: "/course/examDelay",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Courses Select",
    path: "/select",
    icon: <BiIcons.BiSelectMultiple />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Major courses",
        path: "/select/majorSelect",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Cross-major courses",
        path: "/select/crossSelect",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Common courses",
        path: "/select/commonSelect",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Public courses",
        path: "/select/publicSelect",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Course Exemption",
        path: "/select/exemption",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Course Withdrawal",
        path: "/select/withdrawal",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Exchange",
    path: "/exchange",
    icon: <CgIcons.CgArrowsExchangeAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Exchange Records",
        path: "/exchange/records",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "National Program",
        path: "/exchange/nationalExchange",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Exchange Transcript",
        path: "/exchange/exchangeTranscipt",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
]

export default navData
