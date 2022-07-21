import React from 'react';
import { 
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon } from 'mdb-react-ui-kit';

  
export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
     

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>RealEstate
              </h6>
              <p>
                RealEstate has brought you, our values customers, the best and Easy way to find ,rent, as well as buy your own house or land.
                With just simple steps , you can own a land or buy a house or even renting one.
               
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='www.example.com' className='text-reset'>
                  Land/Plot selling
                </a>
              </p>
              <p>
              <a href='www.example.com' className='text-reset'>
                  Land Renting
                </a>
              </p>
              <p>
              <a href='www.example.com' className='text-reset'>
                  House Selling
                </a>
              </p>
              <p>
              <a href='www.example.com' className='text-reset'>
                  House Renting
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
             
              <p>
              <a href='www.example.com' className='text-reset'>
                  Rent
                </a>
              </p>
              <p>
              <a href='www.example.com' className='text-reset'>
                  Buy
                </a>
              </p>
              <p>
              <a href='www.example.com' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Blantyre, Box2022, Malawi
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                realestate@info.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> +265 993859471
              </p>
              <p>
                <i className='fas fa-print me-3'></i> +265 888589526
              </p>
            </div>
          </div>
        </div>
      </section>
     

      <div className='container p-4 pb-0'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
      </section>
        <section className='mb-4'>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </a>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright
        <a className='text-white' href='https://RealEstate.com/'>
          RealEstate. 
        </a>
        All rights reserved.
      </div>
    </MDBFooter>
  );
}