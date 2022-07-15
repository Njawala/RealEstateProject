import React from 'react'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';

class Content extends React.Component{
  render(){
    return(
        
     <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
           <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL+"images/Explore/House5.jpg"}
            height="210px"
            alt='House5'
            position='top'
          />
         <MDBCardBody>
          <MDBCardText style={{background:'linear-gradient( #00b4db,#0083b0 )',color:'white'}}>Listing For Sale</MDBCardText>
            <MDBCardTitle>MK 300, 000 </MDBCardTitle>
            <MDBCardText>
              <b>2</b>Beds | <b>2</b>baths | BrickFenced<br></br>
              Lilongwe, Area 47
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Posted 3 hr ago</small>
          </MDBCardFooter>
        </MDBCard>
    </MDBCol> 
    <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL+"images/Explore/House6.jpg"}
            height="210px"
            alt='House6'
            position='top'
          />
         <MDBCardBody>
          <MDBCardText style={{background:'linear-gradient( #00b4db,#0083b0 )',color:'white'}}>Listing For Sale</MDBCardText>
            <MDBCardTitle>MK 300, 000 </MDBCardTitle>
            <MDBCardText>
              <b>2</b>Beds | <b>2</b>baths | BrickFenced<br></br>
              Lilongwe, Area 47
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Posted 3 hr ago</small>
          </MDBCardFooter>
        </MDBCard>
    </MDBCol> 
    <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL+"images/Explore/House7.jpg"}
            height="210px"
            alt='House7'
            position='top'
          />
         <MDBCardBody>
          <MDBCardText style={{background:'linear-gradient( #00b4db,#0083b0 )',color:'white'}}>Listing For Sale</MDBCardText>
            <MDBCardTitle>MK 300, 000 </MDBCardTitle>
            <MDBCardText>
              <b>2</b>Beds | <b>2</b>baths | BrickFenced<br></br>
              Lilongwe, Area 47
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Posted 3 hr ago</small>
          </MDBCardFooter>
        </MDBCard>
    </MDBCol> 
    <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={process.env.PUBLIC_URL+"images/Explore/House8.jpg"}
            height="210px"
            alt='House8'
            position='top'
            
          />
           
        {/*<MDBCardBody>
          <MDBCardText style={{background:'linear-gradient( #00b4db,#0083b0 )',color:'white'}}>Listing For Sale</MDBCardText>
            <MDBCardTitle>MK 300, 000 </MDBCardTitle>
            <MDBCardText>
              <b>2</b>Beds | <b>2</b>baths | BrickFenced<br></br>
              Lilongwe, Area 47
            </MDBCardText>
    </MDBCardBody>
    */}
          <MDBCardFooter>
            <small className='text-muted'>Posted 3 hr ago</small>
          </MDBCardFooter>
        </MDBCard>
    </MDBCol> 

    </MDBRow>
    

      )
      
  }
  
}

export default Content