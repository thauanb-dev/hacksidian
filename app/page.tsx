import Header from "./components/Header/Header"
import Body from "./components/Body/Body"
import UtmConverter from "./components/UTM/UtmConverter"


export default function Home() {
  return (
    <div>
      <Header />
      <Body>
      <div className="flex flex-col gap-4">
          <h1>
            <b>Converter Coordenadas</b>
          </h1>
          <UtmConverter />
      </div>
      </Body>
    </div>
  );
}
