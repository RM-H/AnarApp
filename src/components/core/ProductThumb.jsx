import {NumericFormat} from "react-number-format";
import {Button} from "@mui/material";
import {AddBox} from "@mui/icons-material";


const ProductThumb = () => {
  return(
      <>
          <div className='column is-4-mobile is-4-tablet p-2'>
              <div className='borderradone p-1 ' style={{border:'1px solid black'}}>
                  <img src="/asset/images/product-temp.jpg" alt=""/>
                 <p className='fs1'>
                     شیرین‌کننده کتو اریتریتول و استویا مخصوص آشپزی بیلو - 210 گرم
                 </p>

                  <p className='has-text-centered'>
                      <NumericFormat className='yekan fs1 has-text-weight-bold ' displayType='text' value='  90000000 '
                                     suffix='    تومان' thousandSeparator=','/>
                  </p>
                  <Button className='w100' variant='contained' color='success'>
                      <AddBox/>
                  </Button>

              </div>

          </div>



      </>
  )
}
export default ProductThumb;