import React from 'react'

const List = props => {
  return (
    <div className="work-items-all">
      <p>
        Facility: {props.facilityId} | {props.facilityName}
      </p>
      <p>
        Building: {props.buildingId} | {props.buildingName}
      </p>
      <p>
        {props.scopeId} | {props.description}
      </p>
      <p>
        {props.assignId} | {props.assignRole}
      </p>
      <p>{props.issueLocation}</p>
      <p>{props.issue}</p>
      <p>{props.status}</p>
    </div>
  )
}

export default List
