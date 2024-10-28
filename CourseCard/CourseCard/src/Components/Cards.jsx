import React from 'react'
import Card from './Card';

function Cards({ course }) {
  let allCourses=[];
 const getCourses = ()=>{
  Object.values(course).forEach((getCourseDetail) => {
    getCourseDetail.forEach((course)=>{
      allCourses.push(course);
      // console.log(allCourses);
      
    })
  })
  return allCourses;
 }
return (
  <div>
    {
    getCourses().map((course) =>{
    return <Card course={course}/>
})
    }
    
  </div>
)
}

export default Cards
