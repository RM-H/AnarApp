import {CategoryCard} from '../index.js'
import {Paper,Divider} from '@mui/material'



const Categories = () => {
  return (
      <>
          <div className='column is-12'>


              <div    className='borderradtwo p-2'>
                  <p className='fs3 has-text-weight-bold has-text-centered' >
                   دسته بندی محصولات
                  </p>



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
                      <CategoryCard/>
                      <CategoryCard/>
                      <CategoryCard/>

                  </div>

              </div>


          </div>


      </>
  )
}
export default Categories;