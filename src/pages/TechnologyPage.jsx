import { useState, useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";

function TechnologyPage(props) {

  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.getAll("company");
  const [foundTech, setFoundTech] = useState([]);

  useEffect(()=>{
    props.technologies.map((techEl) => {
      if(techEl.slug === slug){
        setFoundTech(techEl);
      }
    });
  },[foundTech])
  

  return (
    <div className="pages-wrapper">
      <h1>Technology Details</h1>

      <Link to={`/company/${params}`}> &lt; Back</Link>

      {foundTech.length===0 && <h3>Tech not found!</h3>}

      {foundTech.length!==0 && (
        <div>
          <div className="tech-details">
            <div className="image-container square">
                <img src={foundTech.image} alt="logo"/>
            </div>
            <div className="image-container long">
                <h1>{foundTech.name}</h1>
                <h3>About</h3>
                {foundTech.description}
            </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default TechnologyPage;
