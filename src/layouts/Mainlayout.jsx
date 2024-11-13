import {Outlet} from "react-router-dom";
import {Topnav,Botnav} from '../components'

const Mainlayout = () => {
  return(
      <>
          <Topnav/>
          <main className='dvhcontainer '>


              <Outlet/>


          </main>


          <Botnav/>


      </>
  )
}
export default Mainlayout;