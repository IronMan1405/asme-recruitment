const stats = [
  { index: '01', label: 'DURATION OF FIRST TASK', value: '9 Days', sub: 'Dedicated runway' },
  { index: '02', label: 'VERTICALS', value: '03', sub: 'Mechanical · Electronics · Software' },
  { index: '03', label: 'EXPERIENCE', value: 'None required', sub: 'Beginner friendly' },
  { index: '04', label: 'DEADLINE', value: '2 SEP 2026', sub: '23:59 IST' },
]

export function RecruitmentStats() {
  return (
    <section className="stats-section" aria-labelledby="stats-heading">
      <div className="section-heading">
        <span className="section-tag-badge">AT A GLANCE</span>
        <h2 id="stats-heading">A short runway to your first Task.</h2>
      </div>
      
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-block" key={stat.label}>
            <div className="stat-header-row">
              <span className="stat-index-badge">{stat.index}</span>
              <span className="stat-label-text">{stat.label}</span>
            </div>
            <strong>{stat.value}</strong>
            <span className="stat-sub">{stat.sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}