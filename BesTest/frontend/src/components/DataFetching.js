import React, {useState, useEffect}  from 'react'
import axios from 'axios'
import Lessons from 'pages/Lessons'

function DataFetching() {
    const [lessons, setLessons]= useState ([])

    useEffect(() =>{
        axios.get('http://localhost:3001/lesson/listL')
        .then(res => {
            console.log(res.data)
        })
    })
  return (
    <div>
        <ul>
            {
                Lessons.map(Lesson =>(
                    <li key={Lesson.id}>{Lesson.title}</li>
                ))
            }

        </ul>

    </div>
  )
}

export default DataFetching