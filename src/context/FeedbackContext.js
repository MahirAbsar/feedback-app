import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const addFeedback = (newFeedback) => {
    newFeedback['id'] = uuidv4()
    setFeedback([...feedback, newFeedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are You Sure you want to delete? ')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const editFeedBack = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    })
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedBack,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
