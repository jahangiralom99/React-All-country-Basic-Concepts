import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([])

    useState(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const [visitedCountry, setVisitedCountry] = useState([]);

    const handleMakeVisitedBtn = (country) => {
        const setCountry = [...visitedCountry, country];
        setVisitedCountry(setCountry);
    }

    return (
        <div className="mt-12 px-12">
            <h1 className="text-3xl font-bold text-center">All Countries {countries.length}</h1>

            <div>
                <h1 className="text-2xl font-semibold">Visited All Country {visitedCountry.length}</h1>
                {
                   
                    visitedCountry.map((country) => <li key={country.cca3}>
                        {country.name.common}
                    </li>)
                }
            </div>

            <div className="grid grid-cols-3 gap-5 mt-8">
            {
                    countries.map(country => <Country
                        handleMakeVisitedBtn={handleMakeVisitedBtn}
                        key={country.cca3}
                        country={country}
                    ></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;