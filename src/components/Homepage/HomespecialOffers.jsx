import {Chip , Divider} from "@mui/material";
import {ProductThumb} from '../index.js'

import {ArrowBackIos} from '@mui/icons-material'

const HomespecialOffers = () => {
  return (
      <>
          <div className='column is-12 special-offers my-3   '>
              <Chip className='is-position-absolute shadowtwo' label={<span className='fs2 '>تخفیف دونی</span>} color='primary'  size="small" style={{transform:'translateX(-50%) translateY(-50%)' , left:'50%' }} />
              <div className='columns py-3 m-0  is-flex  borderradone' style={{overflow: 'auto'}} >







                <ProductThumb onSale={true}/>
                <ProductThumb onSale={true}/>
                <ProductThumb onSale={true}/>
                <ProductThumb onSale={true}/>
                <ProductThumb onSale={true}/>
                <ProductThumb onSale={true}/>
                <ProductThumb onSale={true}/>



                  <div className='column p-2 is-2-mobile is-flex is-justify-content-center is-align-items-center '>
                      <button className='button bgclrsix has-text-white borderradone fs1   '>
                          همه

                          <ArrowBackIos/>

                      </button>

                  </div>


              </div>



          </div>


      </>
  )
}
export default HomespecialOffers;