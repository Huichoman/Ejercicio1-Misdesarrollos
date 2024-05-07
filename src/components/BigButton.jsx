import PropTypes from "prop-types"

export const BigButton = ({ label, getLocation }) => {
  return (
    <button
      onClick={getLocation}
      className="p-5 rounded-md bg-sky-600 text-center text-white text-2xl w-40 shadow-md"
    >
      {label}
    </button>
  )
}

BigButton.propTypes = {
  label: PropTypes.string.isRequired,
  getLocation: PropTypes.func.isRequired,
}
