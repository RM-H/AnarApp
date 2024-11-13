import {Backdrop} from '@mui/material'

const Loader = () => {
  return(
      <>
          <Backdrop open={true}>

              <img src="/asset/images/loader.png" className='loaderanimation' alt=""/>
              
          </Backdrop>
          



      </>
  )
}
export default Loader;