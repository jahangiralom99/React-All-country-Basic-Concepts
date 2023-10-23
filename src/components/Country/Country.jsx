import { useState } from "react";

const Country = ({country,handleMakeVisitedBtn}) => {
    const { name, flags, population, } = country;
    const [visited, setVisited] = useState(false);

    const handleVisitedBtn = () => {
        setVisited(!visited)
    }

    return (
        <div className="border border-pink-300 p-5 rounded-lg">
            <img className="h-[100px]" src={flags.png} alt="" />
            <p>Name: {name.common}</p>
            <p>Population: {population}</p>
            <button onClick={() => handleMakeVisitedBtn(country)} className="btn bg-pink-200">make Visited</button>
            <button onClick={handleVisitedBtn} className="btn bg-pink-200">{visited? 'Visited': 'going' }</button>
            {
                visited ? "I have visited" : "I have not visited"
            }
        </div>
    );
};

export default Country;