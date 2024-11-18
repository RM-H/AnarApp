import {Button,Paper} from "@mui/material";
import {ArrowBackIosNew} from "@mui/icons-material";
import {useNavigate} from 'react-router-dom'



const HomepageDashboard = () => {

    const navigate = useNavigate();
  return (
      <>
          <div className='column is-12 ' >




                  <Button onClick={()=>navigate('/supermarket')} size='small' color='success' variant='contained' className='w100 borderradtwo' style={{minHeight:'6rem'}} >

                      فلانی عزیز
                      به انارمارکت خوش اومدی.
                      ورود به سوپر مارکت
                      <ArrowBackIosNew/>
                  </Button>



          </div>


      </>
  )
}
export default HomepageDashboard;