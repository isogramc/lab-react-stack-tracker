import { useEffect, useState } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import CompanyDetails from '../components/CompanyDetails';
import TechStackCard from '../components/TechStackCard';

function CompanyPage(props) {
  const { companySlug } = useParams();
  const [company, setCompany] = useState([]);
  const [companyTech, setCompanyTech] = useState([]);

  useEffect(() => {
    props.companies.forEach(companyEl => {
      if(companyEl.slug===companySlug){
        //console.log(companyEl);
        setCompany(companyEl);
        setCompanyTech(companyEl.techStack);
      }
    })
  },[company]);

  return (
    <div className="pages-wrapper">
      <div className="header-wrapper">
        <h1>Company Profile</h1>
        <Link to={"/"}> &lt; Back</Link>
      </div>
      <div className="content-wrapper">
        <CompanyDetails company={company}/>
        <div className='tech-wrapper'>
          {companyTech.map((technology, index) => 
            <TechStackCard key={index} technology={technology} companySlug={company.slug}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanyPage;
