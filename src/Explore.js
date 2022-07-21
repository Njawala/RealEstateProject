import React from 'react'

function Explore(){
    return (
        <div className='ExContent'>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '20px', height: '250px' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Explore The Best Sellings</h1>
              <h5 className='mb-6'>Take your time and browse different appartments of your choice</h5>
              <a
                className='btn btn-outline-light btn-lg m-2'
                Link href='/sell'
                role='button'
                rel='nofollow'
              //target='_blank'
              >
                Explore Houses
              </a>
            </div>

          </div>
        </div>
      </div>
    )
}

export default Explore