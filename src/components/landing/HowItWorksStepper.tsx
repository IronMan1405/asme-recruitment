const steps = [
  { number: '01', title: 'Pick a vertical', description: 'Find the kind of work that pulls you in.' },
  { number: '02', title: 'Pick a task', description: 'Choose a small, defined problem to solve.' },
  { number: '03', title: 'Complete & submit', description: 'Build, document, and send us what you made.' },
  { number: '04', title: 'Hear back', description: 'We will be in touch with next steps.' },
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