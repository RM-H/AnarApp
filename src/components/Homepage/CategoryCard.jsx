import {Paper} from '@mui/material'

const CategoryCard = () => {
  return(
      <>
          <div className='column is-4-mobile p-1' >
           <Paper elevation={3} className='' >
               <img src="https://dkstatics-public.digikala.com/digikala-categories/d77f1473f7540e1ab791ad8ce6c9295609a2c142_1713950685.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"  alt=""/>

               <p className='fs1 has-text-weight-bold has-text-centered'>
                   مواد غذایی
               </p>

           </Paper>

          </div>



      </>
  )
}
export default CategoryCard;