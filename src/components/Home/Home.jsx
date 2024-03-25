import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { CirclesWithBar } from "react-loader-spinner";

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <NavBar></NavBar>
            <div className="bg-violet-950 p-9">
                <h1 className="text-5xl text-white font-extrabold">Lets Cods your career</h1>
            </div>
            {
                navigation.state === 'loading' ? <div className="flex justify-center items-center h-96">
                    <CirclesWithBar
                        height="100"
                        width="100"
                        color="#4fa94d"
                        outerCircleColor="#4fa94d"
                        innerCircleColor="#4fa94d"
                        barColor="#4fa94d"
                        ariaLabel="circles-with-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div> : <Outlet></Outlet>
            }
        </div>
    );
};

export default Home;