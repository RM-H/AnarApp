import React, { useState} from "react";
import { Dialog, DialogTitle, Slide,Divider} from "@mui/material";
import {ProductThumb} from '../index.js'
import {KeyboardArrowUp} from '@mui/icons-material'





const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide  direction="down" ref={ref} {...props} />;
});
const Searchpopup = () => {

    const [openSearch, setOpenSearch] = useState(false);


    const handleClickOpen = () => {
        setOpenSearch(true);
    };

    const handleClose = () => {
        setOpenSearch(false);
    };




  return(
      <>
          <img src="/asset/icons/search.png" alt="" className='topnav-icons' onClick={handleClickOpen}/>

          <Dialog
              open={openSearch}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              transitionDuration={600}
              aria-describedby="alert-dialog-slide-description"
              sx={{
                  '& .MuiDialog-container': {flexDirection: 'column', justifyContent: 'flex-start'},
                  '& .MuiDialog-paper': {m: 0, width: 1}
              }}
          >
              <DialogTitle variant='caption'>

                  جستجو بین کالا ها


                  <span className='is-float-left yekan'>
                      یافت شده : 0
                  </span>


              </DialogTitle>

              <div className="field has-addons px-3   ">
                  <div className="control w100 yekan ">
                      <input className="input"
                             onChange={(event) => setTimeout(() => setSearch(event.target.value), 1600)}
                             type="text" placeholder="نام کالا"/>
                  </div>

              </div>


              {/*results*/}
              <Divider/>

              <div className='columns is-flex  m-0 is-multiline py-5' style={{overflow: 'auto'}}>
                  <ProductThumb/>
                  <ProductThumb/>
                  <ProductThumb/>
                  <ProductThumb/>
                  <ProductThumb/>
                  <ProductThumb/>
                  <ProductThumb/>
                  <ProductThumb/>
                  <ProductThumb/>
                  <ProductThumb/>
                  <ProductThumb/>
                  <ProductThumb/>


              </div>

              {/*results*/}


              <span className='is-position-absolute  bgclrtwo has-text-white w100 is-flex is-justify-content-center is-align-items-center'
                    style={{left: '0%', bottom: '0%'}} onClick={handleClose}>
                      <KeyboardArrowUp />
                  </span>
          </Dialog>


      </>
  )
}
export default Searchpopup;