import React from 'react'
export default function Question({ question, selectedIndex, onSelect }) {
  if (!question) return null

  return (
    <div className="question-card">
      {/* Question text */}
      <h2 className="question-text">{question.text}</h2>

      {/* Options list */}
      <ul className="options-list">
        {question.options.map((opt, i) => (
          <li
            key={i}
            className={`option-item ${selectedIndex === i ? 'selected' : ''}`}
            onClick={() => onSelect(question._id, i)}
          >
            <span className="option-label">{String.fromCharCode(65 + i)}.</span>
            <span className="option-text">{opt}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
