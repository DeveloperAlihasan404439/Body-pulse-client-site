import About from "../../Companent/About";
import Banner from "../../Companent/Banner";
import Featured from "../../Companent/Featured";
import {Helmet} from "react-helmet";
import Newsletter from "../../Companent/Newsletter";
import FeaturedClass from "../../Companent/FeaturedClass";
import Teistimonlale from "../../Companent/Teistimonlale";
const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Body Pulse | Home</title>
            </Helmet>
            <Banner/>
            <FeaturedClass/>
            <Teistimonlale/>
            <Featured/>
            <About/>
            <Newsletter/>
        </div>
    );
};

export default Home;