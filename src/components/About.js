import React from "react";
import Collapsible from "react-materialize/lib/Collapsible";
import CollapsibleItem from "react-materialize/lib/CollapsibleItem";

export default function About() {
  return (
    <div>
      <Collapsible>
        <CollapsibleItem header="About">
          <div className="row">
            <div className="col s12">
              <p>
                Movie Collection is a web app that allows you to browse through
                a list of movies and view details about each movie. You can also
                watch trailer movies.
              </p>
              <p>
                This app was built using React Materialize, a CSS framework
                based on Material Design.
              </p>
            </div>
          </div>
        </CollapsibleItem>
        <CollapsibleItem header="The Team">
          <div className="row">
            <div className="col s12">
              <p>
                The team behind Player Cards is a group of passionate soccer
                fans who wanted to create a resource for other fans to learn
                more about their favorite players.
              </p>
              <p>
                The team is made up of developers, designers, and content
                creators from all over the world.
              </p>
            </div>
          </div>
        </CollapsibleItem>
        <CollapsibleItem header="Nations">
          <div className="row">
            <div className="col s12">
              <p>
                The "Nations" tab provides you with a list of all the nations
                that have film in the database.
              </p>
              <p>
                To find players from a specific nation, simply click on the
                "Nations" tab and select the nation you want to see.
              </p>
            </div>
          </div>
        </CollapsibleItem>
        <CollapsibleItem header="Daily news">
          <div className="row">
            <div className="col s12">
              <p>
                The "Daily news" tab provides you with the latest news from the
                world of film.
              </p>
              <p>
                To view the latest news, simply click on the "Daily news" tab.
              </p>
            </div>
          </div>
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}
