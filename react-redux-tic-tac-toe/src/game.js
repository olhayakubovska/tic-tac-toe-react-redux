import { GameLayout } from "./game-layout";
import { RESTART_GAME } from "./actions";
import { useDispatch } from "react-redux";

export const Game = () => {
  const dispatch = useDispatch();
  const handleRestart = () => {
    dispatch(RESTART_GAME);
  };

  return <GameLayout handleRestart={handleRestart} />;
};
