import React from "react";
import ShoppingCard from "../../components/shopping-card/shopping-card";
import Data from "../../utils/data";
import "./Home.scss";

function HomePage(props) {
  return (
    <div className="home-container">
        {Data.map((item) => (
            <ShoppingCard key={item.id} data={item}/>
        ))}
    </div>
  );
}

export default HomePage;
