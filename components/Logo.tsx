import Image from 'next/image';
import React from 'react'
import codingAddabrand from '../public/Logo.png';

const Logo = (props: any) => {
    const {renderDefault, title} = props;
  return (
    <div className='flex items-center
     space-x-2'>
      <Image src={codingAddabrand} alt="logo" className='rounded-full object-cover'
      height={50}
      width={50}
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo;
