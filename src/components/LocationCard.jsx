import PropTypes from "prop-types"
import { FaRegTrashCan } from "react-icons/fa6"
import { motion } from "framer-motion"

export const LocationCard = ({
  address,
  latitude,
  longitude,
  deleteLocation,
  id,
}) => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col relative w-full px-5 py-3 shadow-92 rounded-md sm:w-fit"
    >
      <FaRegTrashCan
        className="absolute right-3 top-2 cursor-pointer text-slate-400 transition-all duration-300 hover:text-slate-600"
        onClick={() => deleteLocation(id)}
      />
      <p className="text-slate-600">{`${latitude}, ${longitude}`}</p>
      <p className="text-sm text-slate-500">{address}</p>
    </motion.div>
  )
}

LocationCard.propTypes = {
  id: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  deleteLocation: PropTypes.func.isRequired,
}
