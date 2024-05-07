import PropTypes from "prop-types"

import { motion } from "framer-motion"

export const LocationCard = ({ address, latitude, longitude }) => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full px-5 py-3 shadow-92 rounded-md sm:w-fit"
    >
      <p className="text-slate-600">{`${latitude}, ${longitude}`}</p>
      <p className="text-sm text-slate-500">{address}</p>
    </motion.div>
  )
}

LocationCard.propTypes = {
  address: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
}
