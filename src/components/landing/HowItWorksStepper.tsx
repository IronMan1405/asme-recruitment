const steps = [
  { number: '01', title: 'Task 1', description: 'Beginner level task.' },
  { number: '02', title: 'Task 2', description: 'Medium level task.' },
  { number: '03', title: 'Personnel Interview', description: 'A small 1 on 1 interaction.' },
  { number: '04', title: 'Probation', description: 'A learning phase before your recruitment is finalized.' },
]

export function HowItWorksStepper() {
  return (
    <section className="process-section" aria-labelledby="process-heading">
      <div className="section-heading">
        <span className="section-tag-badge">THE PROCESS</span>
        <h2 id="process-heading">No mystery steps.</h2>
      </div>
      
      <div className="stepper">
        {steps.map((step) => (
          <div className="step" key={step.number}>
            <div className="step-number">{step.number}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}