import { Link } from 'react-router-dom';

function CompanyCard({company}) {
    return (
        <div key={company.id} className="image-container square">
            <Link to={`/company/${company.slug}`}> 
                <h3>{company.name}</h3>
                <img src={company.logo} alt="logo"/>
            </Link>
        </div>
    );
}
  
export default CompanyCard;