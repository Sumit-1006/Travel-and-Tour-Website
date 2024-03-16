import Mountain1 from "../Assets/1.jpg"
import Mountain2 from "../Assets/2.jpg"
import Mountain3 from "../Assets/3.jpg"
import Mountain4 from "../Assets/4.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"


const Destination=()=>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the oppurtunity to see a lot,within a time frame.</p>
            <DestinationData
            className="first-des"
            heading="Taal Volcano,Batangas"
            text="Taal Volcano is the second most active volcano found in the province of Batangas.  A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation.  It offers a very a spectacular view seen from Tagaytay Ridge.  Taal volcano is located around 50 kilometers away from Manila, capital of the Philippines."
            img1={Mountain1}
            img2={Mountain2}
            />
            <DestinationData
            heading="Mt.Daguldal,Batangas"
            className="first-des-reverse"
            text="Taal Volcano is the second most active volcano found in the province of Batangas.  A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation.  It offers a very a spectacular view seen from Tagaytay Ridge.  Taal volcano is located around 50 kilometers away from Manila, capital of the Philippines."
            img1={Mountain3}
            img2={Mountain4}
            />
        </div>
    );
};

export default Destination;