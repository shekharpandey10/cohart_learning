import React, { useEffect, useState } from 'react'
import { FaGlobeAfrica } from 'react-icons/fa'
import { SlLike } from 'react-icons/sl'
import { FaRegCommentDots } from 'react-icons/fa'
import { BiRepost } from 'react-icons/bi'
import { RiShareForwardFill } from 'react-icons/ri'
const icons = [
  <SlLike />,
  <FaRegCommentDots />,
  <BiRepost />,
  <RiShareForwardFill />,
]
function Post(props) {
  const [like, setlike] = useState(0)
const handleClick=(index)=>{
  setlike(prev=>prev+1)
}
  // useEffect(()=>{
  //   const interval=setInterval(()=>{
  //     setlike(prev=>prev+1)
  //   },1000)

  //   return ()=>clearInterval(interval)
  // },[])
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 5,
        boxShadow: 10,
        borderColor: 'gray',
        padding: 30,
      }}
    >
      <div style={{ display: 'flex', gap: 8 }}>
        <div>
          <img
            src={props.image}
            style={{ borderRadius: 20, width: 30, height: 30 }}
          />
        </div>
        <div>
          <div>
            <b>{props.name}</b>
            <div>{props.title}</div>
            {props.time && (
              <div>
                {props.time} <FaGlobeAfrica />
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div>
          {props.desc}{' '}
          <a href='#' style={{ color: 'gray' }}>
            more
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '1rem',
          }}
        >
          {props.linkk?.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`post-image-${index}`}
              style={{ width: '200px', height: 'auto', borderRadius: '4px' }}
            />
          ))}
        </div>
        <hr style={{ marginTop: 25 }} />
        <div style={{ display: 'flex', gap: 90 }}>
      {icons.map((icon,index)=>(
      <div key={index} onClick={()=>handleClick(index)}>{icon} {index===0?like:null}</div>
      ))}
        </div>
      </div>
    </div>
  )
}

export default Post
