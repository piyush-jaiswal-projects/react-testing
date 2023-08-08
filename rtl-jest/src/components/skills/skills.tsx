import { useState, useEffect } from "react"
import { setTimeout } from "timers/promises"

type SkillsProps = {
    skills: string[],
}

export const Skills = (props: SkillsProps) => {
    const { skills } = props
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  // useEffect(() => {
  //   //@ts-ignore
  //   setTimeout(() => {
  //     setIsLoggedIn(true)
  //   }, 2000)
  // }, [])

  return (
    <>
      <ul>
        {skills.map((skill: string) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}