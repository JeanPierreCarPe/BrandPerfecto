import React from 'react'
import Button from './Button'

const ServiceCard = (props) => {
    const { icon, title, text } = props;
  return (
    <div className='relative overflow-hidden flex flex-col justify-center items-center p-8 w-96 h-fit gap-7 bg-white drop-shadow-card rounded-xl'>
        <div className=''></div>
        <h4 className='text-xl font-semibold text-center text-black-primary z-10'>{title}</h4>
        <p className='text-base text-center font-normal text-black-secondary leading-8 z-10'>{text}</p>
        <Button text="Learn more" />
        <div className="absolute top-[-25%] left-[-25%] h-2/4 w-2/4 flex justify-center items-center z-[-1] hidden">
          <svg className="overflow-visible absolute w-full h-full">
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              strokeWidth="8"
              fill="none"
              className='stroke-orange-custom-500'
            />
          </svg>
          <svg className="overflow-visible absolute" width="100%" height="100%">
            <circle
              cx="50%"
              cy="50%"
              r="35%"
              strokeWidth="8"
              fill="none"
              className='stroke-orange-custom-500'
            />
          </svg>
          <svg className="overflow-visible absolute" width="100%" height="100%">
            <circle
              cx="50%"
              cy="50%"
              r="20%"
              strokeWidth="8"
              fill="none"
              className='stroke-orange-custom-500'
            />
          </svg>
        </div>
    </div>
  )
}

export default ServiceCard