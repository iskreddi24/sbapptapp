// import { useMedia, COMPANY_MEDIA_TYPES } from '../../context/MediaContext';
// import '../../styles/Sidebar.css';

// const Sidebar = () => {
//   const { filters, setCompany, setMediaType } = useMedia();

//   return (
//     <>
//       <aside className="sidebar">
//         <h3>Company</h3>
//         <div className="filter-group">
//           {Object.keys(COMPANY_MEDIA_TYPES).map((company) => (
//             <button key={company} className={`filter-btn ${filters.company === company ? 'active' : ''}`} onClick={() => setCompany(company)}>{company}</button>
//           ))}
//         </div>
//         <h3>Media Type</h3>
//         <div className="filter-group">
//           <button className={`filter-btn ${filters.mediaType === 'All' ? 'active' : ''}`} onClick={() => setMediaType('All')}>All Types</button>
//           {COMPANY_MEDIA_TYPES[filters.company]?.map((type) => (
//             <button key={type} className={`filter-btn ${filters.mediaType === type ? 'active' : ''}`} onClick={() => setMediaType(type)}>{type}</button>
//           ))}
//         </div>
//       </aside>
//       <div className="mobile-filter-chips">
//         <div className="chip-row">
//           {Object.keys(COMPANY_MEDIA_TYPES).map((company) => (
//             <button key={company} className={`filter-chip ${filters.company === company ? 'active' : ''}`} onClick={() => setCompany(company)}>{company}</button>
//           ))}
//           <span style={{ borderLeft: '1px solid #e2e8f0', margin: '0 4px' }}></span>
//           <button className={`filter-chip ${filters.mediaType === 'All' ? 'active' : ''}`} onClick={() => setMediaType('All')}>All Types</button>
//           {COMPANY_MEDIA_TYPES[filters.company]?.map((type) => (
//             <button key={type} className={`filter-chip ${filters.mediaType === type ? 'active' : ''}`} onClick={() => setMediaType(type)}>{type}</button>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
import { useMedia, COMPANY_MEDIA_TYPES } from '../../context/MediaContext';
import '../../styles/Sidebar.css';

const Sidebar = () => {
  const { filters, setCompany, setMediaType } = useMedia();

  return (
    <aside className="sidebar">
      <h3>Company</h3>
      <div className="filter-group">
        {Object.keys(COMPANY_MEDIA_TYPES).map((company) => (
          <button key={company} className={`filter-btn ${filters.company === company ? 'active' : ''}`} onClick={() => setCompany(company)}>{company}</button>
        ))}
      </div>
      <h3>Media Type</h3>
      <div className="filter-group">
        <button className={`filter-btn ${filters.mediaType === 'All' ? 'active' : ''}`} onClick={() => setMediaType('All')}>All Types</button>
        {COMPANY_MEDIA_TYPES[filters.company]?.map((type) => (
          <button key={type} className={`filter-btn ${filters.mediaType === type ? 'active' : ''}`} onClick={() => setMediaType(type)}>{type}</button>
        ))}
      </div>
    </aside>
  );
};

export const MobileFilterChips = () => {
  const { filters, setCompany, setMediaType } = useMedia();

  return (
    <div className="mobile-filter-chips">
      <div className="chip-row">
        {Object.keys(COMPANY_MEDIA_TYPES).map((company) => (
          <button key={company} className={`filter-chip ${filters.company === company ? 'active' : ''}`} onClick={() => setCompany(company)}>{company}</button>
        ))}
        <span style={{ borderLeft: '1px solid #e2e8f0', margin: '0 4px' }}></span>
        <button className={`filter-chip ${filters.mediaType === 'All' ? 'active' : ''}`} onClick={() => setMediaType('All')}>All Types</button>
        {COMPANY_MEDIA_TYPES[filters.company]?.map((type) => (
          <button key={type} className={`filter-chip ${filters.mediaType === type ? 'active' : ''}`} onClick={() => setMediaType(type)}>{type}</button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
