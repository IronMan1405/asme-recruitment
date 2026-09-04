interface SubmissionGuidelinesCardProps {
  verticalId: string
  taskNumber?: 1 | 2
}

type TaskGuidelines = Record<1 | 2, string[]>

const submissionGuidelines: Record<string, TaskGuidelines> = {
  mechanical: {
    1: [
      'Export your CAD files in .f3d or .f3z format.',
      'Name your file using the format: <full_bits_id>_Task1_QX.f3d',
      'Create a Google Drive folder containing your task files and submit the folder link.',
      'Make sure the required access permissions are enabled so that the files can be viewed.',
    ],
    2: [
      'Q1 :- Submit a google doc comparing results of old vs new bracket along with an f3d file of the redesigned bracket.',
      'Q2 :- submit a Google doc containing answers and proper justifications',
      'Create a Google Drive folder containing your task files and submit the folder link.',
      'Make sure the required access permissions are enabled so that the files can be viewed.',
    ],
  },
  software: {
    1: [
      'Create a public repository on GitHub for your submission. If you do not have a GitHub account yet, this is a great time to make one!',
      'Make sure your code contains comments explaining what each part does.',
      'Submit the link to your task repository.',
      'Also add a demo video showing the implementation of your task.',
    ],
    2: [
      'Create a public repository on GitHub for your submission. If you do not have a GitHub account yet, this is a great time to make one!',
      'Make sure your code contains comments explaining what each part does.',
      'Submit the link to your task repository.',
      'Also add a demo video showing the implementation of your task.',
    ],
  },
  electrical: {
    1: [
      'Create a Google Doc containing the Tinkercad links for both questions.',
      'You may include documentation or explanations for each question in the Google Doc.',
      'Submit the link to the Google Doc.',
      'Set the document\'s sharing permissions to "Anyone with the link → Editor."',
    ],
    2: [
      'Use the built-in archive tool in the main project window to create a .zip file of your KiCad project.',
      'Steps to Archive Your ProjectOpen the main KiCad project manager window : ',
      'Click on File in the top menu.',
      'Select Archive Project... from the dropdown list.',
      'Choose where to save your new zip file on your computer and click Save',
      'Upload this .zip file into your google drive and submit its link',
      'Create a Goggle Doc as well which will contain images of your PCB and a short documentation of your project ',
      'Finally add the google doc into the same drive and submit the drive link.',
    ],
  },
}

export function SubmissionGuidelinesCard({ verticalId, taskNumber = 1 }: SubmissionGuidelinesCardProps) {
  const guidelines = (submissionGuidelines[verticalId] ?? submissionGuidelines.software)[taskNumber]

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
