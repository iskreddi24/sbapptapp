export function CardSkeleton() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton-img shimmer"></div>
      <div className="skeleton-body">
        <div className="skeleton-line skeleton-line-title shimmer"></div>
        <div className="skeleton-line skeleton-line-subtitle shimmer"></div>
        <div className="skeleton-meta">
          <div className="skeleton-badge shimmer"></div>
          <div className="skeleton-badge shimmer"></div>
        </div>
      </div>
    </div>
  );
}

export function GridSkeleton({ count = 8 }) {
  return (
    <div className="media-grid" aria-label="Loading content">
      {Array.from({ length: count }).map((_, i) => (<CardSkeleton key={i} />))}
    </div>
  );
}

export function TableSkeleton({ rows = 5, cols = 4 }) {
  return (
    <div className="skeleton-table" aria-label="Loading table">
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="skeleton-table-row">
          {Array.from({ length: cols }).map((_, c) => (<div key={c} className="skeleton-table-cell shimmer"></div>))}
        </div>
      ))}
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="skeleton-profile" aria-hidden="true">
      <div className="skeleton-avatar shimmer"></div>
      <div className="skeleton-lines">
        <div className="skeleton-line shimmer" style={{ width: '60%' }}></div>
        <div className="skeleton-line shimmer" style={{ width: '40%' }}></div>
      </div>
    </div>
  );
}
