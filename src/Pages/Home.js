import "./Home.scss";
import Heroe from "../Components/Heroe";
import { useEffect } from "react";

// Components
import LeagueList from "../Components/League/LeagueList";

// Zustand
import useLeaguesStore from "../Stores/useLeaguesStore";
import useSportsStore from "../Stores/useSportsStore";

export default function Home() {
  const { leagues } = useLeaguesStore((state) => ({
    leagues: state.leagues,
  }));
  const { sports } = useSportsStore((state) => ({
    sports: state.sports,
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Heroe />
      <LeagueList leagues={leagues} sports={sports} />
    </div>
  );
}
