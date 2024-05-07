import { useState, useEffect } from "react"

import { BigButton } from "./components/BigButton"
import { LocationCard } from "./components/LocationCard"

import { setDefaults, fromLatLng } from "react-geocode"
import { v4 as uuidv4 } from "uuid"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

setDefaults({
  key: "AIzaSyDzpE9YpHHEFiQZiM90X90rEbGJxZ88CVw",
  language: "es",
  region: "mx",
})

function App() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const locations = JSON.parse(localStorage.getItem("locations"))
    if (locations) {
      setLocations(locations)
    }
  }, [])

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          fromLatLng(latitude, longitude)
            .then(({ results }) => {
              const newLocation = {
                id: uuidv4(),
                latitude,
                longitude,
                address: results[0].formatted_address,
              }
              setLocations([newLocation, ...locations])
              localStorage.setItem(
                "locations",
                JSON.stringify([newLocation, ...locations])
              )
              toast.success("Ubicación añadida", {
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })
            })
            .catch(console.error)
        },
        (error) => {
          console.error("Error getting location:", error)
        }
      )
    } else {
      console.error("Geolocation is not supported by this browser.")
    }
  }

  return (
    <div className="flex flex-col items-center pt-8 pb-5 w-screen h-screen max-h-screen px-5 text-slate-700 bg-slate-50 font-poppins overflow-scroll">
      <ToastContainer position="bottom-right" />
      <BigButton label="LOCATION NOW" getLocation={getLocation} />
      <p className="text-xl pt-6 pb-1 mb-6 border-b-2 w-full text-left sm:w-[94%]">
        Locations
      </p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:w-[94%]">
        {locations.length > 0
          ? locations.map(({ address, latitude, longitude, id }) => (
              <LocationCard
                className="text-slate-700"
                key={id}
                address={address}
                latitude={latitude}
                longitude={longitude}
              />
            ))
          : null}
      </div>
    </div>
  )
}

export default App
