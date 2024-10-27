import React from 'react'

function Cards({course}) {
  let alldata =[];
  const getdata =()=>{
    object.value(course).forEach((getCoursedetail)=> {
      getCoursedetail.forEach((courses)=>{
        alldata.push(courses)
    });
    return alldata;

  }
  return (
    <div>
      
    </div>
  )
}

export default Cards
