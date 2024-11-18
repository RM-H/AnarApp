import {CategoryCard} from '../index.js'
import {Paper,Divider} from '@mui/material'



const Categories = () => {
  return (
      <>
          <div className='column is-12'>


              <Paper elevation={3} className='borderradtwo p-2'>
                  <p className='fs2 has-text-centered'>
                     قفسه ها
                  </p>
                  <Divider/>


                  <div className='columns is-flex m-0 is-multiline mt-1'>

                      <CategoryCard/>
                      <CategoryCard/>
                      <CategoryCard/>
                      <CategoryCard/>
                      <CategoryCard/>
                      <CategoryCard/>
                      <CategoryCard/>
                      <CategoryCard/>
                      <CategoryCard/>
                      <CategoryCard/>
                      <CategoryCard/>
                      <CategoryCard/>

                  </div>

              </Paper>


          </div>


      </>
  )
}
export default Categories;