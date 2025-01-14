import { useSearchParams, useNavigate } from 'react-router-dom';

function TechStackCard({technology, companySlug}) {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams("");

    const navigateWithParams = () => {
        const queryString = {slug: companySlug};
        const sp = new URLSearchParams();
        sp.append("company", companySlug);
        navigate({
            pathname: `/tech/${technology.slug}`,
            search: sp.toString()
        })
    }

    return (
        <div key={technology.id} className="texh-wrapper" onClick={navigateWithParams}>
            {/* <Link to={`/tech/${technology.slug}`}>  */}
                <div className="image-container-sml square-sml">  
                    <img src={technology.image} alt="tech image"/>
                </div>
                <h3>{technology.name}</h3>
            {/* </Link> */}
        </div>
    );
}
  
export default TechStackCard;