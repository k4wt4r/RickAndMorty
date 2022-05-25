import React, { useState, useEffect } from "react";
import CardLocation from "./Card/CardLocation/CardLocation";
import Cardstyleforlocations from "../styles/scss/Cardstyleforlocations.module.scss"


function Location() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://rickandmortyapi.com/api/location");
      const locations = await res.json();
      setData(locations.results);
    })();
  }, []);

  return (
    <div className={Cardstyleforlocations.locationcontainer}>
      <div className={Cardstyleforlocations.locations}>
        {data.map((location, index) => (
          <div className={Cardstyleforlocations.singlecardlocation} key={index} >
            <CardLocation location={location} />
          </div>
        ))} 
    </div>
    </div>
  );
}

export default Location;
