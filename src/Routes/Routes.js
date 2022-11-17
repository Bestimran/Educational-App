import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Shared/Blog/Blog";
import Course from "../Shared/Courses/Course";
import FAQ from "../Shared/FAQ/FAQ";
import Home from "../Shared/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/Course',
                element:<Course></Course>
                
            }
  
        ]
    }
]);