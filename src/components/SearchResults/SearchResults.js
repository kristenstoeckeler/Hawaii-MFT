import React, { Component } from 'react';

import Card from "react-bootstrap/Card";
import './SearchResults.css'


const therapists = [
  {
    id: 1,
    first_name: "Jane",
    last_name: "Rain",
    island: "O'ahu",
    city: "Kailua",
    phoneNumber: "808-123-4567",
    type: "Counselor",
    titles: ["MA", "ATR", "LPCC", "LAMFT"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit.",
    email: "jane@familytherapy.com",
    website: "familytherapy.com",
  },
  {
    id: 2,
    first_name: "Joe",
    last_name: "Nagasaka",
    island: "Maui",
    city: "Kahului",
    phoneNumber: "808-123-4567",
    type: "Clinical Social Work/Therapist",
    titles: ["MSW", "LAMFT"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit.",
    email: "joe@openarms.com",
    website: "openarms.com",
  },
  {
    id: 3,
    first_name: "Tepairu",
    last_name: "Miller",
    island: "Kauai",
    city: "Lihue",
    phoneNumber: "808-123-4567",
    type: "Phychologist",
    titles: ["PhD", "LP", "LAMFT"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit.",
    email: "jill@relationalground.com",
    website: "relationalground.com",
  },
];

class SearchResults extends Component {
    state = { 

    }


    render() { 
        return (
          <>
            {/* Muted text at the top showing the user the result count */}
            <h5 className="text-muted center">
                Your search resulted in {therapists.length} results.
            </h5>
            {therapists.map((therapist) => (
              // I made it a div to encapsulate the Card instead of just
              // a Card so if needed we could add more to each result.
              // One thing we will add in the future is the small map
              // Showing quickly where each therapist is located.
              // as of now however that doesnt exist so nothing shows in its place.

              // search-result is already a flexbox so adding something will auto-format
              <div className="search-result">
                <Card style={{ width: "80%", margin: "10px" }}>
                  <Card.Body>
                    {/* 
                        The name and location of the therapist
                        This information is super important so its placed
                        at the very top of the card.
                    */}
                    <Card.Title>
                      {/* 
                            flex-between is a class that simply does inables flexbox
                            with space between.effectively this just alligns content
                            to the sides of the Card but it could be used later for 
                            other items if we decide to show more.
                         */}
                      <div className="flex-between">
                        {/* 
                            Due to how flexbox is each set of information is in
                            its own <div /> tag. I gave these all unique classes
                            in case we decide to give any of them a special
                            look, font or any other css changes.
                        */}
                        <div className="name">
                          {therapist.first_name} {therapist.last_name}
                        </div>
                        <div className="island">
                          {/*
                            I don't know if this is how location is supposed to be
                            displayed in terms of city and island but its what was
                            shown in the wireframe so it is staying in the skeleton.
                          */}
                          {therapist.city}, {therapist.island}
                        </div>
                      </div>
                    </Card.Title>
                    {/*
                        The subtitle section is less important
                        information that we still want very visible.
                        This information is all of the qualifications
                        of the therapist as well as the phone number.

                        The qualifications need to be visible so the 
                        person searching can easily see they are getting
                        exactly what they are looking for and need.

                        Phone number is also needed right away because
                        its generally the easiest way to contact someone.
                        
                        The text was colored gray in the bootstrap example
                        so I kept it here. I considered changing it but I feel
                        its better to keep it gray. It's still visible but it
                        makes it distinct as well as acting like a divider between
                        the header and the body information.
                    */}
                    <Card.Subtitle className="mb-2 text-muted">
                      <div className="flex-between">
                        <div className="titles">
                          {/* 
                            The amount of titles a therapist could have can
                            vary wildly. Using this join method I can display
                            them all nicely and without much effort.
                          */}
                          {therapist.type}, {therapist.titles.join(", ")}
                        </div>
                        <div className="number">{therapist.phoneNumber}</div>
                      </div>
                    </Card.Subtitle>
                    <Card.Text>
                      <div className="flex-between">
                        <div className="description">
                          {therapist.description}
                        </div>
                        {/* Contact is aligned to the right for visual appeal */}
                        <div className="contact">
                          {therapist.email} <br />
                          {/*
                            The link here links to the page it mentions.
                            It does so by turning itself into an https link
                            and then opening that link in a new tab when clicked.

                            I wanted it to open in a new tab so it doesn't destroy
                            the users search results.
                          */}
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://${therapist.website}`}
                          >
                            {therapist.website}
                          </a>
                        </div>
                      </div>
                    </Card.Text>
                    {/* I dont know the links of each page so this is a placeholder */}
                    <Card.Link href={`#/profile/${therapist.id}`}>
                      View Profile
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </>
        );
    }
}
 
export default SearchResults;