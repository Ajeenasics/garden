import React from "react";
import GardnerLandingNav from "./GardnerLandingNav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../assets/css/GardnerProfilePage.css";
import { Link } from "react-router-dom";

function GardenerProfileView() {
  return (
    <div>
      <GardnerLandingNav />

      <div className="profileview-card">
        <Card style={{ width: "30rem" }} >
          <Card.Img src="https://i.pinimg.com/736x/98/a6/aa/98a6aadc34b3519d5c4e0a6150f0701f.jpg"className="card-image"/>
          <Card.Body>
            <Card.Title>Profile view</Card.Title>
            <Card.Text>
              <strong>Name:</strong> John Doe <br />
              <strong>Address:</strong> 123 Main St <br />
              <strong>Phone:</strong> 555-555-5555 <br />
              <strong>Email:</strong> john.doe@example.com <br />
              <strong>Gender:</strong> male <br />
              <strong>Year of Experience:</strong> 3<br />
              <strong>Availability:</strong> Gardening <br />
              <strong>Preferd Corps:</strong> Pruning, Weeding, Planting <br />
              <strong>list of Skills:</strong> Pruning, Weeding, Planting <br />
              
            </Card.Text>
            <Link to={"/gardnereditprofile"} style={{ textDecoration: "none" }}  className="link_style">
                <h6 >Edit Profile</h6>
              </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default GardenerProfileView;
