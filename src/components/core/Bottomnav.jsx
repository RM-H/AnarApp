import {Badge, Chip, Paper} from '@mui/material'
import {ArrowBackIosNew} from '@mui/icons-material'
import {NumericFormat} from 'react-number-format'
import {useState} from "react";
import {useNavigate} from 'react-router-dom'


const Bottomnav = () => {

    const [Hasitemsincart, setHasitemsincart] = useState(false);
    const navigate = useNavigate();


    return (
        <>
            <div className='botnav  is-position-relative  '>


                {/*dialogue product*/}
                {/*<div className={`cartnav shadowtwo fs1  ${Hasitemsincart==true && 'cartnavshow'}`}  >*/}
                {/*    <p>*/}
                {/*        جمع  سبد :*/}

                {/*    </p>*/}

                {/*    <p>*/}
                {/*        <NumericFormat displayType='text' className='yekan '  value='  9000000 ' suffix='    تومان' thousandSeparator=','/>*/}

                {/*    </p>*/}
                {/*    <Chip size='small'  icon={<ArrowBackIosNew/>} label="مشاهده   " variant="filled " color='success' sx={{direction:'ltr'}} onClick={()=>navigate('/cart')} />*/}

                {/*</div>*/}

                <Paper elevation={14} className='botnavcontrols mx-auto w66 bgclrone    borderradone'>
                    <div className='botnavButton ' onClick={() => navigate('/')}>
                        <img src="/asset/icons/home.png" alt=""/>
                        <p>
                            خانه

                        </p>
                    </div>

                    <div className='botnavButton '>
                        <img src="/asset/icons/profile.svg" alt=""/>
                        <p>
                            حساب من
                        </p>
                    </div>

                    <div className='botnavButton ' onClick={() => setHasitemsincart((prevState) => !prevState)}>
                        <Badge anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }} color="secondary" badgeContent={25}>

                            <img src="/asset/icons/cart.svg" alt=""/>
                        </Badge>
                        <p>
                            سبد
                        </p>
                    </div>

                    <div className='botnavButton '>
                        <img src="/asset/icons/profile.svg" alt=""/>
                        <p>
                            حساب من
                        </p>
                    </div>


                </Paper>


            </div>


        </>
    )
}
export default Bottomnav