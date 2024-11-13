import {
    Box,
    Button,
    Chip,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import {useState} from "react";
import {NumericFormat} from "react-number-format";
import {AddBox, PhoneEnabled} from '@mui/icons-material'
import {SidebarOrderStat,Searchpopup} from '../index.js'


const Topnav = () => {

    const [open, setOpen] = useState(false);

    const DrawerList = (
        <Box sx={{
            width: '15rem',
            height: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
        }} role="presentation" >
            <p className='sidebar-header'>
                <img src="/asset/images/logo-head-red.png" alt=""/>
                انارمارکت
            </p>
            <Box sx={{height: 0.9}}>
                <List>

                    <ListItem>


                        <div className='sidebar-box '>


                            <Button variant='text' color='secondary'>
                                در کیف پول :
                            </Button>
                            <Button variant='outlined' color='secondary' className='p-3'>

                                <NumericFormat className='yekan' displayType='text' value='  900000000 '
                                               suffix='    تومان' thousandSeparator=','/>

                            </Button>
                            <Button variant='contained' color='success'>
                                <AddBox/>
                            </Button>


                        </div>


                    </ListItem>

                    <ListItem disablePadding className='mt-5'>
                        <div className='sidebar-box'>
                            <Button variant='text' color='secondary'>
                                وضعیت سفارش جاری
                            </Button>

                            <SidebarOrderStat/>
                        </div>


                    </ListItem>


                    <ListItem>


                        <div className='sidebar-box '>


                            <Button variant='outlined' color='success' className='p-3' onClick={() => {
                                window.location.href = 'tel:123456789'
                            }}>

                                <PhoneEnabled/>
                                تماس با پشتیبانی


                            </Button>


                        </div>


                    </ListItem>


                    <ListItem className='is-justify-content-center'>
                        <IconButton >
                            <img src="/asset/icons/insta.png" alt=""/>
                        </IconButton>


                        <IconButton >
                            <img src="/asset/icons/telegram.png" alt=""/>
                        </IconButton>

                        <IconButton onClick={()=>window.open('https://www.google.com/maps?q=37.5180,45.0532','_blank')} >
                            <img src="/asset/icons/location.png" alt=""/>
                        </IconButton>


                    </ListItem>


                </List>
            </Box>


        </Box>
    );


    return (
        <>
            <div className='topnav'>
                <div className='columns is-flex w100'>
                    <div className='column is-4 is-flex is-align-items-center is-justify-content-center'
                         onClick={() => setOpen(true)}>
                        <img src="/asset/icons/menu-bar.png" alt="" className='topnav-icons' />
                    </div>

                    <div className='column is-4 has-text-centered'>
                        <img src="/asset/images/logo-white.png" alt="" className='logo mx-auto'/>
                    </div>

                    <div className='column is-4 is-flex is-align-items-center is-justify-content-center'>
                        <Searchpopup/>

                    </div>


                </div>

                <Drawer transitionDuration={369} anchor='right' open={open} onClose={() => setOpen(false)}>
                    {DrawerList}
                </Drawer>


            </div>


        </>
    )
}
export default Topnav;
