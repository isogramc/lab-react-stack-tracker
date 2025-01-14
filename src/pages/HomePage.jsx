import CompanyCard from "../components/CompanyCard";

function HomePage(props) {
  return (
    <div className="pages-wrapper">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="tracks-wrapper">
      {props.companies.map((company) => {
        return (
          <CompanyCard key={company.id} company={company}/>
        );
      })}
      </div>
      
    </div>
  );
}

export default HomePage;
