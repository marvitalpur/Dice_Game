import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

export default function App() {
  const [isstart, setIsStartd] = useState(false);
  const ToggleGame = () => {
    setIsStartd((prev) => !prev);
  };
  return <>{isstart ? <GamePlay /> : <StartGame toggle={ToggleGame} />}</>;
}
