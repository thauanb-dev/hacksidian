import Header from "@/app/components/Header/Header"
import Body from "@/app/components/Body/Body"
import UtmConverter from "@/app/components/UTM/UtmConverter"

export default function Utm(){
return (
    <div>
        <Header/>
        <Body>
      <div className="flex flex-col gap-4">
          <h1>
            <b>Converter Coordenadas</b>
          </h1>
          <UtmConverter />
        </div>
        </Body>
    </div>
)
}