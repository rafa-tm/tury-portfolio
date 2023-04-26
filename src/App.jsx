import Rotas from "./routes";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Rotas />
    </div>
  );
}
