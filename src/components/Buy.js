import { MDBRipple } from 'mdb-react-ui-kit';


function Buy() {
  return (

    <header>

    <div id='intro-example' className='p-5 text-center bg-image'
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/House4.jpg'})` ,height:500, color:'white'}}>
       
          <h1 className='mb-3' style={{marginTop:'10%', fontSize:'70px'}} >Get yourself a New Home</h1>
          <h5 className='mb-4' style={{fontSize:'50px', color:'black'}}>Best &amp; Quality</h5>
  </div>

  <div className="Newintro" style={{marginTop:40, marginRight:1100}}>
         <h3 className='mb-5'  >Homes</h3>

  <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' style={{ maxWidth: '24rem' }}>
<img src='https://mdbootstrap.com/img/new/fluid/city/113.webp' className='w-100' />
<a href='#!'>
  <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
</a>
</MDBRipple>
  
  </div>


</header>

  )
}

export default Buy
    
 

