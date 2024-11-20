import {Paper , Divider , Button} from '@mui/material'
import {NumericFormat} from "react-number-format";


const SuppermarketProfileWidget = () => {
  return (
      <>
          <div className='column is-12'>

              <Paper elevation={3} className='borderradtwo'>


                  <div className='columns is-flex fs1 m-0 is-multiline'>
                      <div className='column is-12-mobile is-12-tablet'>
                          <p className='fs1 has-text-weight-bold'>
                              کاربر عزیز وقت بخیر
                          </p>
                      </div>


                      <div className='column is-8-mobile is-8-tablet '>


                      {/*addresses*/}

                          <div>
                              <p className='my-1 mt-2 fs1'>
                                 ثبت آدرس جدید
                              </p>
                              <Divider/>
                              <div className="control my-2  ">
                                  <label className="radio fs1 has-text-weight-bold is-flex is-align-items-center">
                                      <input type="radio" className='ml-1' name='address'/>
                                      خانه
                                  </label>
                                  <p className='fs1 has-text-justified'>
                                      فلان خیابان فلان کوچه فلان جا
                                  </p>

                              </div>

                              <div className="control my-2  ">
                                  <label className="radio fs1 has-text-weight-bold is-flex is-align-items-center">
                                      <input type="radio" className='ml-1' name='address'/>
                                      محل کار
                                  </label>
                                  <p className='fs1 has-text-justified'>
                                      فلان خیابان فلان کوچه فلان جا
                                      فلان خیابان فلان کوچه فلان جا
                                      فلان خیابان فلان کوچه فلان جا
                                  </p>

                              </div>




                          </div>
                          {/*addresses*/}


                      </div>


                      <div className='column is-4-mobile is-4-tablet  '>
                          <p className='my-1 mt-2 fs1'>
                             موجودی کیف پول
                          </p>
                          <Divider/>
                          <p >
                              <NumericFormat className='yekan fs1 has-text-weight-bold ' displayType='text' value='  900000000 '
                                             suffix='    تومان' thousandSeparator=','/>
                          </p>





                      </div>

                      <div className='column is-12-mobile is-12-tablet has-text-centered is-flex is-justify-content-space-evenly is-align-items-center'>
                          <Button variant='contained' color='success' size='small' className='borderradtwo w100 '>
                              پرداخت
                          </Button>


                      </div>


                  </div>
              </Paper>


          </div>


      </>
  )
}
export default SuppermarketProfileWidget;