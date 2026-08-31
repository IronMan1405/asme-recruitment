import { useState } from 'react'
import type { ReactNode } from 'react'
import { ArrowUpRight, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react'

interface FaqItem {
  question: string
  answer: ReactNode
  category: 'general' | 'eligibility' | 'tasks' | 'submission'
}

const faqs: FaqItem[] = [
  {
    category: 'general',
    question: 'What is ASME and what do members do?',
    answer:
      'ASME (American Society of Mechanical Engineers student section) is an engineering student organization dedicated to hands-on hardware and software projects. Our members design, build, test, and compete with real robots, mechanical mechanisms, custom electronic circuit boards, and control systems.',
  },
  {
    category: 'eligibility',
    question: 'Do I need prior engineering or coding experience to apply?',
    answer:
      'No prior experience is required. All tasks provide starter guides and recommended resources. We look for curiosity, problem-solving ability, and dedication to learning rather than pre-existing mastery.',
  },
  {
    category: 'eligibility',
    question: 'Can first-year students from any branch or major apply?',
    answer:
      'Yes, recruitment is open to all students across all engineering branches and departments. Whether you study mechanical, electrical, computer science, or chemical engineering, there is a place for you in our tracks.',
  },
  {
    category: 'tasks',
    question: 'Can I apply to or submit tasks for more than one vertical?',
    answer:
      'Yes! You are welcome to explore multiple tracks and submit solutions for more than one vertical if you are interested in interdisciplinary work. Each submission is evaluated on its own merits.',
  },
  {
    category: 'tasks',
    question: 'What software or tools do I need for the challenges?',
    answer: (
      <>
        The required tools are <strong>Fusion 360, Tinkercad, KiCad, and ROS2</strong>{' '}
        <span aria-label="Unofficial tools joke">
          <s>Claude and ChatGPT</s>
        </span>
        . Links and recommendations are included in each task description.
      </>
    ),
  },
  {
    category: 'submission',
    question: 'How will submissions be evaluated?',
    answer:
      'We evaluate submissions based on how well you meet the stated constraints, the clarity of your documentation and reasoning, and your thoughtful explanation of trade-offs and future improvements.',
  },
  {
    category: 'submission',
    question: 'When is the deadline and when will results be announced?',
    answer:
      'All submissions are due by 2 September 2026 at 23:59 IST. Results and interview invitations will be communicated via email and announced on our WhatsApp group shortly after the deadline.',
  },
]

export function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'general' | 'eligibility' | 'tasks' | 'submission'
  >('all')

  const filteredFaqs = faqs.filter(
    (faq) => selectedCategory === 'all' || faq.category === selectedCategory
  )

  return (
    <article className="editorial-page">
      <header className="editorial-header">
        <span className="section-tag-badge" style={{ marginBottom: '0.75rem' }}>
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h1>Questions, answered.</h1>
        <p>
          Everything you need to know about recruitment, eligibility, tasks, and submissions.
          Placeholder FAQ content will be added in the next phase as official cycles update.
        </p>
      </header>

      {/* Category filter tabs */}
      <div className="faq-categories" role="tablist" aria-label="FAQ Categories">
        <button
          className={`faq-tab ${selectedCategory === 'all' ? 'is-active' : ''}`}
          type="button"
          role="tab"
          aria-selected={selectedCategory === 'all'}
          onClick={() => setSelectedCategory('all')}
        >
          All Questions ({faqs.length})
        </button>
        <button
          className={`faq-tab ${selectedCategory === 'general' ? 'is-active' : ''}`}
          type="button"
          role="tab"
          aria-selected={selectedCategory === 'general'}
          onClick={() => setSelectedCategory('general')}
        >
          General
        </button>
        <button
          className={`faq-tab ${selectedCategory === 'eligibility' ? 'is-active' : ''}`}
          type="button"
          role="tab"
          aria-selected={selectedCategory === 'eligibility'}
          onClick={() => setSelectedCategory('eligibility')}
        >
          Eligibility
        </button>
        <button
          className={`faq-tab ${selectedCategory === 'tasks' ? 'is-active' : ''}`}
          type="button"
          role="tab"
          aria-selected={selectedCategory === 'tasks'}
          onClick={() => setSelectedCategory('tasks')}
        >
          Tasks & Tools
        </button>
        <button
          className={`faq-tab ${selectedCategory === 'submission' ? 'is-active' : ''}`}
          type="button"
          role="tab"
          aria-selected={selectedCategory === 'submission'}
          onClick={() => setSelectedCategory('submission')}
        >
          Submission
        </button>
      </div>

      {/* Accordion list */}
      <div className="faq-accordion-list">
        {filteredFaqs.map((faq) => (
          <details className="faq-item" key={faq.question}>
            <summary className="faq-summary">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <HelpCircle size={18} color="var(--color-text)" aria-hidden="true" />
                {faq.question}
              </span>
              <ChevronDown size={18} color="var(--color-text-muted)" aria-hidden="true" />
            </summary>
            <div className="faq-content">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>

      {/* Still have questions banner */}
      <div
        style={{
          marginTop: '3.5rem',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--color-surface)',
          padding: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          flexWrap: 'wrap',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-text)',
              display: 'grid',
              placeItems: 'center',
              color: 'var(--color-background)',
            }}
          >
            <MessageSquare size={20} aria-hidden="true" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.25rem', color: 'var(--color-text)', fontWeight: 700 }}>
              Still have a question?
            </h3>
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
              Join our recruitment WhatsApp group, follow us on Instagram, or email our team directly.
            </p>
          </div>
        </div>

        <a
          className="secondary-button"
          href="https://chat.whatsapp.com/Jjs07RvjI4EBSqMlZkMgfU"
          target="_blank"
          rel="noreferrer"
        >
          <span>Ask on WhatsApp</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a
          className="secondary-button"
          href="https://www.instagram.com/asme_bitspilani?igsi=MXRsemlwcTRhaGM3MQ=="
          target="_blank"
          rel="noreferrer"
        >
          <span>Follow on Instagram</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}