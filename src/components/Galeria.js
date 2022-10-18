import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext } from "react";
import MyContext from "../my-context";

export default function Home() {

  const {imagenes, setImagenes} = useContext(MyContext);
  
  const agregarFavorito = (id) => {
    const imagenClick = imagenes.findIndex((ele) => ele.id === id);
    imagenes[imagenClick].liked = !imagenes[imagenClick].liked;
    setImagenes([...imagenes]);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {
        imagenes.map((imagen) => (
          <div
            className="foto"
            key={imagen.id}
            style={{backgroundImage:`url(${imagen.src.tiny})`}}
            onClick={() => {
              agregarFavorito(imagen.id)
            }}>
            <Heart filled={imagen.liked} />
            <p>{imagen.alt}</p>
          </div>
        ))
      }
    </div>
  );
}