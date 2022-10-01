import React from "react";
import "./TeamDescription.scss";

import axios from "axios";
// React
import { useEffect, useState } from "react";
// Routing
import { useLocation, useParams } from "react-router-dom";

const TeamDescription = () => {
  const [team, setTeam] = useState({});
  const location = useLocation();
  const params = useParams();
  const league = location.pathname.split("/")[1].replaceAll("%20", " ");

  const url_teams = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${league}`;

  useEffect(() => {
    axios.get(url_teams).then((response) => {
      // Liste aller Teams
      let filteredTeam = response.data.teams.filter(
        (team) => team.strTeam === params.team
      )[0];
      setTeam(filteredTeam);
    });
  }, [params.team, url_teams]);
  return (
    <section className="team-description">
      <h3>Description</h3>
      <article className="team-description-details">
        <p>{team.strDescriptionEN}</p>
        <img src={team.strTeamBadge} alt="Team Badge" title={team.strTeam} />
      </article>
    </section>
  );
};

export default TeamDescription;
