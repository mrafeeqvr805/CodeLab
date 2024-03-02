import React from 'react'
import { infoCardDetails } from '../utils/constants'
import InfoSubCard from './InfoSubCard'

const InfoCard = ({data}) => {
  const details = [data?.category,data?.published_date,data?.last_updated,data?.frameworks_used,data?.db_used]
  return (
    <div className='bg-white p-3 my-3'>
        <span className='font-medium text-lg'>Information</span>
        <hr className='my-2'></hr>
        <div className=''>
            {infoCardDetails.map((item,index) => <InfoSubCard key={index} name={item.name} value={details[index]}/>)}
        </div>
    </div>
  )
}

export default InfoCard