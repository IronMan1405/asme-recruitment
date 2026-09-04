import { ArrowLeft, Clock3 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Typed from 'typed.js'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ExpandableSection } from '../components/primitives/ExpandableSection'
import { DifficultyBadge } from '../components/primitives/DifficultyBadge'
import { TaskNav } from '../components/composite/TaskNav'
import { TaskSection } from '../components/composite/TaskSection'
import { ResourceList } from '../components/composite/ResourceList'
import { SubmissionGuidelinesCard } from '../components/composite/SubmissionGuidelinesCard'
import { SubmissionPanel } from '../components/composite/SubmissionPanel'
import electricalTaskTwoTopPanel from '../assets/elec_task_2_top_panel.png'
import electricalTaskTwoMiddlePanel from '../assets/elec_task_2_middle_panel.jpg'
import electricalTaskTwoBottomPanel from '../assets/elec_task_2_buttom_panel.jpg'
import electricalTaskTwoHeroImage from '../assets/spiderman_task_2_elec.jpg'
import { getTaskById, getVerticalById, getTasksForVertical } from '../lib/data'
import { accentColors } from '../theme/tokens'
import { taskThemes } from '../theme/taskThemes'
import type { CSSProperties } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function TaskDetailPage() {
  const { id = '', taskId = '' } = useParams()
  const isElectricalTaskTwo = taskId === 'elec-02'
  const pageRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLImageElement>(null)
  const storyStatusRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!isElectricalTaskTwo) {
      return
    }

    const page = pageRef.current
    const content = contentRef.current
    const image = heroImageRef.current
    if (!page || !content || !image) return

    let typedStatus: Typed | undefined
    const ctx = gsap.context(() => {
      const hero = page.querySelector('.task-detail-header')
      const sections = gsap.utils.toArray<HTMLElement>('.task-section')
      const storyStatus = storyStatusRef.current

      const heroTimeline = gsap.timeline({
        scrollTrigger: { trigger: hero, start: 'top top', end: '+=620', scrub: 1, invalidateOnRefresh: true },
      })
      heroTimeline
        .fromTo(image, { xPercent: 0, yPercent: 0, rotation: 0 }, { xPercent: 0, yPercent: -7, rotation: -1, ease: 'none' }, 0)
        .fromTo('.task2-hero-kicker', { x: -24, opacity: 0 }, { x: 0, opacity: 1, ease: 'power2.out' }, 0.18)

      const storyTimeline = gsap.timeline({
        scrollTrigger: { trigger: content, start: 'top 82%', toggleActions: 'play none none none', once: true },
      })
      storyTimeline.fromTo(sections, { y: 42, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.16,
        ease: 'power3.out',
      })
      storyTimeline.fromTo(sections.map((section) => section.querySelector('.section-tag-badge')).filter(Boolean), { x: -10, opacity: 0 }, {
        x: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.16,
        ease: 'power2.out',
      }, '<0.12')

      if (storyStatus) {
        typedStatus = new Typed(storyStatus, {
          strings: ['With great power comes great responsibility', 'This is my gift, my curse. Who am I? I am Spider-Man', 'I am something of a scientist myself'],
          typeSpeed: 26,
          backSpeed: 12,
          backDelay: 1700,
          loop: true,
          showCursor: true,
          cursorChar: '_',
        })
      }

    }, page)

    return () => {
      typedStatus?.destroy()
      ctx.revert()
    }
  }, [isElectricalTaskTwo])

  const task = getTaskById(taskId)
  const vertical = getVerticalById(id)

  if (!task || !vertical || task.verticalId !== vertical.id) {
    return (
      <section className="empty-state">
        <span className="section-tag-badge">TASK NOT FOUND</span>
        <h1>Task not found.</h1>
        <p>That task does not belong to the selected vertical.</p>
        <Link className="primary-button" to="/verticals">
          <ArrowLeft size={16} aria-hidden="true" /> Back to verticals
        </Link>
      </section>
    )
  }

  const verticalTasks = getTasksForVertical(vertical.id)
  const taskIndex = verticalTasks.findIndex((verticalTask) => verticalTask.id === task.id)
  const theme = isElectricalTaskTwo ? taskThemes.electricalTaskTwo : taskThemes[vertical.id]

  return (
    <article
      ref={pageRef}
      className={theme ? `task-detail-page ${theme.className}${taskId === 'soft-02' ? ' theme-software-task2' : ''}${taskId === 'mech-02' ? ' theme-mechanical-task2' : ''}` : 'task-detail-page'}
      style={{ '--vertical-accent': accentColors[vertical.accentColor] } as CSSProperties}
    >
      {isElectricalTaskTwo ? (
        <div className="task2-top-panel-stage">
          <img className="task2-top-panel" ref={heroImageRef} src={electricalTaskTwoTopPanel} alt="Spider-Man gripping a web above Electrical Task 2" />
          <nav className="breadcrumb task2-breadcrumb-overlay" aria-label="Breadcrumb">
            <Link to="/verticals">Verticals</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to={`/verticals/${vertical.id}`}>{vertical.name}</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current" aria-current="page">
              {task.title}
            </span>
          </nav>
        </div>
      ) : (
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/verticals">Verticals</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to={`/verticals/${vertical.id}`}>{vertical.name}</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current" aria-current="page">
            {task.title}
          </span>
        </nav>
      )}

      <header className="task-detail-header" aria-label={theme?.imageAlt}>
        {isElectricalTaskTwo && <span className="task2-hero-kicker"></span>}
        {isElectricalTaskTwo && (
          <img
            className="task2-adjacent-hero-image"
            src={electricalTaskTwoHeroImage}
            alt="Spider-Man - Electrical Task 2"
          />
        )}
        <div className="task-detail-badges" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
          <span className="track-pill">{vertical.name}</span>
          <span className="section-tag-badge">{task.id.toUpperCase()}</span>
          {theme && (
            <span className="theme-tagline-pill">
              <span aria-hidden="true">{theme.icon}</span>
              {theme.tagline}
            </span>
          )}
        </div>
        <span className="task-deadline">Due: {task.deadline}</span>
        <h1>{task.title}</h1>
        <p>{task.shortDescription}</p>

        <div className="task-detail-meta">
          <DifficultyBadge difficulty={task.difficulty} />
          <span className="time-estimate">
            <Clock3 size={15} aria-hidden="true" />
            Estimated: ~{task.estimatedTime}
          </span>
          {task.prerequisites.map((prerequisite) => (
            <span className="tag-chip" key={prerequisite}>
              {prerequisite}
            </span>
          ))}
          {task.tags.map((tag) => (
            <span className="tag-chip" key={tag}>
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <div
        className="task2-flow-stage"
        style={isElectricalTaskTwo ? { backgroundImage: `url(${electricalTaskTwoMiddlePanel})` } : undefined}
      >
        <div className="task-detail-content" ref={contentRef}>
        <TaskSection label="PROBLEM STATEMENT">
          {isElectricalTaskTwo && <p className="task2-story-status"><span ref={storyStatusRef} /></p>}
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: (props) => <a href={props.href} title={props.title} target="_blank" rel="noreferrer">{props.children}</a> }}>{task.instructions}</ReactMarkdown>
        </TaskSection>

        {task.prerequisites.length > 0 && (
          <TaskSection label="PREREQUISITES">
            <ul>
              {task.prerequisites.map((prerequisite) => (
                <li key={prerequisite}>{prerequisite}</li>
              ))}
            </ul>
          </TaskSection>
        )}

        {task.evaluationCriteria.length > 0 && (
          <TaskSection label="EVALUATION CRITERIA">
            <ul className="criteria-list">
              {task.evaluationCriteria.map((criterion) => (
                <li key={criterion}>
                  <span className="criteria-checkbox" aria-hidden="true">✓</span>
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </TaskSection>
        )}

        {task.resources.required.length > 0 && (
          <TaskSection label="REQUIRED RESOURCES">
            <ResourceList resources={task.resources.required} />
          </TaskSection>
        )}

        {task.resources.optional.length > 0 && (
          <ExpandableSection label="Want to go further? (Optional Resources)">
            <ResourceList resources={task.resources.optional} />
          </ExpandableSection>
        )}

        {task.contactdetails.length > 0 && (
          <TaskSection label="CONTACT DETAILS">
            <ul>
              {task.contactdetails.map((contactDetail) => (
                <li key={contactDetail}>{contactDetail}</li>
              ))}
            </ul>
          </TaskSection>
        )}

        <SubmissionGuidelinesCard verticalId={vertical.id} taskNumber={task.taskNumber} />
        <SubmissionPanel task={task} verticalName={vertical.name} />
        </div>
      </div>
      {isElectricalTaskTwo && (
        <img className="task2-bottom-panel" src={electricalTaskTwoBottomPanel} alt="Gwen hanging at the end of the web" />
      )}

      <TaskNav
        verticalId={vertical.id}
        previous={taskIndex > 0 ? verticalTasks[taskIndex - 1] : undefined}
        next={taskIndex < verticalTasks.length - 1 ? verticalTasks[taskIndex + 1] : undefined}
      />
    </article>
  )
}