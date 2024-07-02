import React from 'react'

function Questionbadge({ques ,onClick}) {
  return (
    <div className='m-1 bg-gray-200 px-1 text-sm cursor-pointer hover:text-white mb-2 text-black rounded-lg' onClick={onClick}>
  
      {ques}
    </div>
  )
}

export default Questionbadge

