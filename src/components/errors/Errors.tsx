import React from 'react'

import { ErrorProps } from '../../App'

const Errors = ({ message, type }: ErrorProps) => {
  return (
    <div className="big-container flex_middle">
        <div className="errors">
            {message === "Too many results." ? (
          <>
            <div className='flex_column'>
              <div>{message}</div>
              <div>Try improving your search string</div>
            </div>
          </>
        ) : (
          message
        )}
        </div>
    </div>
  )
}

export default Errors