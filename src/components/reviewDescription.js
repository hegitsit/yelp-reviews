import React from 'react'

export function ReviewDescription({ restaurant }) {
  const { name, alias, image_url, url, location } = restaurant;
  return (
    <div>
      <h1><a href={url}> {name} </a></h1>
      <img src={image_url} height="150" width="150" alt={alias} />
      <div>{location.address1} - {location.city} - {location.zip_code}</div>
    </div>
  )
}
