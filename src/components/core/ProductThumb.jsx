import {NumericFormat} from "react-number-format";
import {useEffect, useState} from 'react'
import {Add, Remove, DeleteForever, Percent} from "@mui/icons-material";
import {IconButton} from "@mui/material";


const ProductThumb = ({onSale}) => {

    const [hasproduct, setHasProduct] = useState(false);


    return (
        <>
            <div className='column is-4-mobile is-4-tablet p-2 '>


                <div className='borderradone p-1 productThumbcard is-position-relative '>

                    {/*off*/}
                    {

                        onSale && (
                            <span className='is-position-absolute clronetext yekan borderradone px-1 off'>
                    10
                   %
                </span>
                        )

                    }

                    {/*off*/}


                    {/*buttons*/}

                    <div
                        className={`ATC-buttons  is-flex is-align-items-center ${hasproduct && 'ATC-buttons--show'}  `}>
                        <button className='hidden has-radius-rounded  textclrsix  '
                                onClick={() => setHasProduct(!hasproduct)}>
                            <Add/>
                        </button>
                        <div className='hidden-content   '>
                            <button className='textclrsix has-radius-rounded  '>
                                <Add/>
                            </button>

                            <span className='yekan fs2 '>
                            20
                          </span>


                            <button className='textclrone has-radius-rounded '>
                                <Remove/>
                            </button>

                            <button className=' has-radius-rounded ' onClick={() => setHasProduct(!hasproduct)}>
                                <DeleteForever/>

                            </button>


                        </div>


                    </div>
                    {/*buttons*/}


                    <img src="/asset/images/product-temp.jpg" alt=""/>


                    <p className='fs1'>
                        شیرین‌کننده کتو اریتریتول و استویا مخصوص آشپزی بیلو - 210 گرم
                    </p>

                    <p className='has-text-centered'>
                        <NumericFormat className='yekan fs1 has-text-weight-bold ' displayType='text'
                                       value='  90000000 '
                                       suffix='    تومان' thousandSeparator=','/>
                    </p>


                </div>

            </div>


        </>
    )
}
export default ProductThumb;