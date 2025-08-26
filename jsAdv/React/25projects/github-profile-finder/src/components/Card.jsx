import React from 'react'

function Card({ data }) {
  return (
    <div>
      {data && (
        <div>
          <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
            <div>
              <img
                src={data.avatar_url}
                style={{ width: '200px', borderRadius: '50%' }}
              />
            </div>
            <div>
              <h2>{data.name || data.login}</h2>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span>followers: {data.followers}</span>
                <span>following: {data.following}</span>
              </div>
              <span>
                <a href={data.html_url}>{data.name || data.login}</a>
              </span>
            </div>
          </div>
          <div></div>
        </div>
      )}
    </div>
  )
}

export default Card
