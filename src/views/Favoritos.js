import { useContext } from "react";
import MyContext from "../my-context";

export default function Favoritos() {

  const {imagenes, setImagenes} = useContext(MyContext);

  const clickBorrar = (id) => {
    const imagenClick = imagenes.findIndex((ele) => ele.id === id);
    imagenes[imagenClick].liked = !imagenes[imagenClick].liked;
    setImagenes([...imagenes]);
  }
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {
          imagenes
          .filter(elem => (elem.liked)
          )
            .map(imagen =>
              <div
                className="foto"
                key={imagen.id}
                style={{backgroundImage:`url(${imagen.src.tiny})`}}
                onClick={() => {
                  clickBorrar(imagen.id)

                }}>
              </div>
            )
        }
      </div>
    </div>
  );
}
