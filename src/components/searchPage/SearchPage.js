import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from '../searchResult/SearchResult'

function SearchPage() {
    return (
        <div className="search-page">
            <div className="searchPage__info">
                <p>62 stays - 26 august to 30 august - 2 guest</p>
                <h1>Stay nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Place</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
            img="https://cdn.pixabay.com/photo/2019/04/30/08/10/home-design-4167980_1280.jpg"
            location="Private room in center of Chernobol"
            title="Stay at this spacious Edwardian House"
            description="1 gest - 1 bedroom - 1 bed - 1.5 shared bathrooms - wi-fi - Kitchen - Free Parking"
            star={4.73}
            price="$30/night"
            total="$117 total"
            />
            <SearchResult
            img="https://images.adsttc.com/media/images/5f2c/723f/b357/65db/c000/0058/newsletter/05_Rattan_Ne_ON.jpg"
            location="Private room in center of Chernobol"
            title="Stay at this spacious Edwardian House"
            description="1 gest - 1 bedroom - 1 bed - 1.5 shared bathrooms - wi-fi - Kitchen - Free Parking"
            star={4.73}
            price="$30/night"
            total="$117 total"
            />
              <SearchResult
            img="https://cdn.pixabay.com/photo/2019/04/30/08/10/home-design-4167980_1280.jpg"
            location="Private room in center of Chernobol"
            title="Stay at this spacious Edwardian House"
            description="1 gest - 1 bedroom - 1 bed - 1.5 shared bathrooms - wi-fi - Kitchen - Free Parking"
            star={4.73}
            price="$30/night"
            total="$117 total"
            />
            <SearchResult
            img="https://images.adsttc.com/media/images/5f2c/723f/b357/65db/c000/0058/newsletter/05_Rattan_Ne_ON.jpg"
            location="Private room in center of Chernobol"
            title="Stay at this spacious Edwardian House"
            description="1 gest - 1 bedroom - 1 bed - 1.5 shared bathrooms - wi-fi - Kitchen - Free Parking"
            star={4.73}
            price="$30/night"
            total="$117 total"
            />
        </div>
    );
}

export default SearchPage;
