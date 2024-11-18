import {NumericFormat} from "react-number-format";
import React, {useEffect, useState} from 'react'
import {Add, Remove, DeleteForever, Percent, Close} from "@mui/icons-material";
import {Button, Dialog, DialogTitle, IconButton, Slide} from "@mui/material";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProductThumb = ({onSale}) => {

    const [hasproduct, setHasProduct] = useState(false);


    // dialoge
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='column is-4-mobile is-4-tablet p-2 '>


                <div className='borderradone p-1 productThumbcard is-position-relative  '>

                    {/*off*/}
                    {

                        onSale && (
                            <span className='is-position-absolute clronetext yekan borderradone px-1 fs1 off'>
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


                    <div className='' onClick={handleClickOpen}>

                        <img src="/asset/images/product-temp.jpg" alt=""/>


                        <p className='fs1'>
                            شیرین‌کننده کتو اریتریتول و استویا مخصوص آشپزی بیلو - 210 گرم

                        </p>

                        <p className='has-text-centered'>
                            <NumericFormat className='yekan fs1 has-text-weight-bold ' displayType='text'
                                           value='  90000000 '
                                           suffix='    تومان' thousandSeparator=','/>
                        </p>


                        {/*off*/}

                        {
                            onSale &&
                            <p className='has-text-centered '>
                                <NumericFormat className='yekan fs1  linethroughRed ' displayType='text'
                                               value='  100000000 '
                                               suffix='    تومان' thousandSeparator=','/>
                            </p>
                        }
                    </div>


                </div>

            </div>


            {/*dialoge*/}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                transitionDuration={600}
                keepMounted
                onClose={handleClose}
                fullWidth
                aria-describedby="alert-dialog-slide-description"
                sx={{
                    '& .MuiDialog-container': {flexDirection: 'column', justifyContent: 'flex-end'},
                    '& .MuiDialog-paper': {m: 0, width: 1}
                }}
            >
                <DialogTitle fontSize='0.6rem'>

                    شیرین‌کننده کتو اریتریتول و استویا مخصوص آشپزی بیلو - 210 گرم


                    <Close onClick={handleClose} className='is-float-left is-size-4'/>
                </DialogTitle>


                <div className='columns is-flex is-multiline m-0 p-3'>
                    <div
                        className='column is-3-mobile is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>

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

                    <div className='column is-6-mobile '>
                        <img src="/asset/images/product-temp.jpg" alt="" style={{width: '9rem'}}/>
                    </div>

                    <div className='column px-0 is-3-mobile is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>


                        <p className='has-text-white bgclrone p-1 has-text-centered yekan borderradone px-1 fs1  '>
                            10
                            %
                        </p>
                        <p className='has-text-centered'>
                            <NumericFormat className='yekan fs1 has-text-weight-bold ' displayType='text'
                                           value='  90000000 '
                                           suffix='    تومان' thousandSeparator=','/>
                        </p>


                        {/*off*/}

                        {
                            onSale &&
                            <>

                                <p className='has-text-centered '>
                                    <NumericFormat className='yekan fs1  linethroughRed ' displayType='text'
                                                   value='  100000000 '
                                                   suffix='    تومان' thousandSeparator=','/>
                                </p>

                            </>

                        }
                    </div>

                    <div className='column is-12-mobile'>

                        <p className='fs1 has-text-justified'>
                            توضیحات مربوط به محصول در این قسمت قرار میگیرد.
                            توضیحات مربوط به محصول در این قسمت قرار میگیرد.
                            توضیحات مربوط به محصول در این قسمت قرار میگیرد.
                        </p>
                    </div>


                </div>


            </Dialog>


        </>
    )
}
export default ProductThumb;