import React from "react";
import "./Home.css";
import Banner from "../banner/Banner";
import Card from "../card/Card";

function Home() {
    return (
        <div className="home">
            <Banner></Banner>

            <div className="home__section">
                <Card
                    src="https://cdn.stocksnap.io/img-thumbs/960w/interior-design_N0IZ9UB3QW.jpg"
                    title="Online Experience"
                    description="Unique activities we can do together, led by a world of hosts"
                />
                <Card
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Living_Room_3D_Render_with_Interior_Design_by_NONAGON_studio.png"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep"
                />
                <Card
                    src="https://cdn.pixabay.com/photo/2015/06/29/08/19/leave-room-825316__340.jpg"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family"
                />
            </div>
            <div className="home__section">
                <Card
                    src="https://cdn.stocksnap.io/img-thumbs/960w/interior-design_N0IZ9UB3QW.jpg"
                    title="Online Experience"
                    description="Unique activities we can do together, led by a world of hosts"
                    price="$20/night"
                />
                <Card
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Living_Room_3D_Render_with_Interior_Design_by_NONAGON_studio.png"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep"
                    price="$100/night"
                />
                <Card
                    src="https://cdn.pixabay.com/photo/2015/06/29/08/19/leave-room-825316__340.jpg"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family"
                    price="$10 /night"
                />
            </div>
        </div>
    );
}

export default Home;
