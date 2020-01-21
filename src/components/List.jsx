import React from 'react'

const List = props => {
  return (
    <div>
      <p>
        {props.Id}
      </p>
      <p>
        {props.facilityName}
      </p>
      <p>
        {props.buildingName}
      </p>
      <p>
      {props.description}
      </p>
      <p>
        {props.assignId} 
      </p>
      <p>{props.issueLocation}</p>
      <p>{props.issue}</p>
      <p>{props.status}</p>
    </div>
  )
}

export default List
