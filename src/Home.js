import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from './Content'
import Explore from './Explore'

  export default function HeaderImg() {
  return (
    <header>

      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/carousel/image3.png'})` , height:500}}>

        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Let Us Guide You Home</h1>
              <h5 className='mb-4'>Best &amp; Reality</h5>
              <a
                className='btn btn-outline-light btn-lg m-2'
                Link href='/Buy'
                role='button'
                rel='nofollow'
                //target='_blank'
              >
                Buy
              </a>
              <a
                className='btn btn-outline-light btn-lg m-2'
                Link href='/register'
                role='button'
                rel='nofollow'
                //target='_blank'
              >
                Rent
              </a>
              <a
                className='btn btn-outline-light btn-lg m-2'
                Link href='/login'
                role='button'
                rel='nofollow'
                //target='_blank'
              >
                Sold
              </a>
            </div>
          </div>
        </div>
      </div>
  

      <div className='NewContent'>
        <h2>New Listings</h2>
         
              <h5 className='mb-4'><a href="#"> View all 300 New Listings</a></h5>
            </div>
            <Content />
            <Explore />
            
    </header>
  );
}

 

 