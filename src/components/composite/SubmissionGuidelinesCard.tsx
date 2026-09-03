interface SubmissionGuidelinesCardProps {
  verticalId: string
  taskNumber?: 1 | 2
}

const submissionGuidelines: Record<string, string[]> = {
  mechanical: [
    'Export your CAD files in .f3d or .f3z format.',
    'Name your file using the format: <full_bits_id>_Task1_QX.f3d',
    'Create a Google Drive folder containing your task files and submit the folder link.',
    'Make sure the required access permissions are enabled so that the files can be viewed.',
  ],
  software: [
    'Create a public repository on GitHub for your submission. If you do not have a GitHub account yet, this is a great time to make one!',
    'Make sure your code contains comments explaining what each part does.',
    'Submit the link to your task repository.',
    'Also add a demo video showing the implementation of your task.'
  ],
  electrical: [
    'Create a Google Doc containing the Tinkercad links for both questions.',
    'You may include documentation or explanations for each question in the Google Doc.',
    'Submit the link to the Google Doc.',
    'Set the document\'s sharing permissions to "Anyone with the link → Editor."',
  ],
}

const taskTwoPlaceholderGuidelines = ['Task 2 submission guidelines will be published here.']

export function SubmissionGuidelinesCard({ verticalId, taskNumber = 1 }: SubmissionGuidelinesCardProps) {
  const guidelines = taskNumber === 2
    ? taskTwoPlaceholderGuidelines
    : submissionGuidelines[verticalId] ?? submissionGuidelines.software

  return (
    <section className="task-section submission-guidelines-card" aria-label="Submission guidelines">
      <div className="task-section-header">
        <span className="section-tag-badge">SUBMISSION GUIDELINES</span>
      </div>
      <div className="task-section-content">
        <ul>
          {guidelines.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
