import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return (
      <div className='container'>
        <h3>No Feedback to Show!!</h3>
      </div>
    )
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // )
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       text: PropTypes.string,
//       rating: PropTypes.number,
//     })
//   ),
// }

export default FeedbackList
