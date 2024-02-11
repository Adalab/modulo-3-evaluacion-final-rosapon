import { Link, Route, Routes, useParams, useNavigate } from "react-router-dom"
import PropTypes from "prop-types";

function CharactersDetails({ charData, noImage }) {
  console.log(typeof charData);

  const { idChar } = useParams();
  

  if (!charData) {
    const navigate = useNavigate();
    navigate("/");
    return null;
  }


  return (
    <div>
       <Link to="/">
        <button className="backBtn"> <i className="fa-solid fa-arrow-left-long"></i>Volver</button>
      </Link>
    
        <div className="charDetails">
          <img className="charDetails__picture" src={charData.picture ? charData.picture : noImage} alt={charData.name} />
          <div className="charDetails__info">
          <h2 className="charDetails__info--name" >{charData.name}</h2>
          <h3 className="charDetails__info--status"> Estatus: {charData.status === "Vivo" ? (<> {charData.status} <i className="fa-solid fa-heart-pulse"></i>
          </> ) : ( <> {charData.status} <i className="fa-solid fa-skull"></i> </>)}</h3>
          <h3 className="charDetails__info--species" >Especie: {charData.species}</h3>
          <h3 className="charDetails__info--gender">Género: {charData.gender}</h3>
          <h3 className="charDetails__info--house" >Casa: {charData.house}</h3>
          </div>
        </div>
    </div>
  )
}

CharactersDetails.propTypes = {
  charData: PropTypes.object,
  noImage: PropTypes.string
};

export default CharactersDetails