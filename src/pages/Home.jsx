import {Blank, Homesilder, SpecialOffers, Dashboard, Categories, ProfileWidget} from "../components/index.js";



const Home = () => {
    return (
        <>
            <div className='columns m-0 is-multiline'>
                <Blank/>
                <Homesilder/>
                {/*<Dashboard/>*/}

                <SpecialOffers/>
                <Categories/>


                <Blank/>
                <Blank/>




            </div>


        </>
    )
}
export default Home;