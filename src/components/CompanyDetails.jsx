function CompanyDetails({ company }) {
    return (
        <div className="company-details">
            <div className="image-container square">
                <img src={company.logo} alt="logo"/>
            </div>
            <div className="image-container long">
                <h1>{company.name}</h1>
                <h3>About</h3>
                {company.description}
            </div>
        </div>
    );
}
  
export default CompanyDetails;