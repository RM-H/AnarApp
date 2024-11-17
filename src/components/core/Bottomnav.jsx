import {Badge, Chip, Paper} from '@mui/material'
import {ArrowBackIosNew} from '@mui/icons-material'
import {NumericFormat} from 'react-number-format'
import {useState} from "react";


const Bottomnav = () => {

    const [Hasitemsincart, setHasitemsincart] = useState(false);


    return (
        <>
            <div className='botnav  is-position-relative  '>
                <div className={`cartnav  ${Hasitemsincart==true && 'cartnavshow'}`}  >
                    <p>
                        جمع  سبد :

                    </p>

                    <p>
                        <NumericFormat displayType='text' className='yekan'  value='  9000000 ' suffix='    تومان' thousandSeparator=','/>

                    </p>
                    <Chip icon={<ArrowBackIosNew/>} label="مشاهده   " variant="filled" color='success' sx={{direction:'ltr'}} />

                </div>

                <Paper elevation={14} className='botnavcontrols mx-auto w90    borderradone'>
                    <div className='botnavButton '>
                        <img src="/asset/icons/home.png" alt=""/>
                        <p>
                            خانه

                        </p>
                    </div>

                    <div className='botnavButton ' onClick={()=>setHasitemsincart((prevState)=>!prevState)}>
                        <Badge   anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }} color="secondary" badgeContent={25}>

                            <img src="/asset/icons/cart.png" alt=""/>
                        </Badge>
                        <p>
                            سبد
                        </p>
                    </div>

                    <div className='botnavButton '>
                        <img src="/asset/icons/profile.png" alt=""/>
                        <p >
                           حساب من
                        </p>
                    </div>


                </Paper>


            </div>


        </>
    )
}
export default Bottomnav