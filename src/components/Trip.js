import TripData from "./TripData";
import "./TripStyles.css"
import Trip1 from "../Assets/5.jpg"
import Trip2 from "../Assets/8.jpg"
import Trip3 from "../Assets/6.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                text="Indonesia is a Southeast Asian nation known for its stunning natural landscapes, rich cultural heritage, and diverse wildlife. With over 17,000 islands, including Bali and Java, it offers a wide range of attractions, from pristine beaches and lush rainforests to ancient temples and bustling markets. "
                />
                <TripData
                image={Trip2}
                heading="Trip in Malaysia."
                text="Malaysia, located in Southeast Asia, is renowned for its diverse culture, stunning landscapes, and vibrant cities. Home to bustling metropolises like Kuala Lumpur and historic towns like Malacca, Malaysia offers a blend of modernity and tradition. T"
                />
                <TripData
                image={Trip3}
                heading="Trip in Francw"
                text="France, located in Western Europe, is famous for its rich history, stunning architecture, and exquisite cuisine. From the romantic streets of Paris to the sun-soaked beaches of the French Riviera, France offers a diverse range of attractions for visitors."
                />
            </div>
        </div>
    )
}

export default Trip;