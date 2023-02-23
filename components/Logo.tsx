import React from 'react'

const Logo = (props: any) => {
    const {renderDefault, title} = props;
  return (
    <div className='flex items-ce
     space-x-2'>
      <img src="https://links.papareact/com/ln3" alt="logo" className='rounded-full object-cover'
      height={50}
      width={50}
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo;
