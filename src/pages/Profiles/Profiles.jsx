import { useState, useEffect, useRef } from 'react'
import * as profileService from '../../services/profileService'


const Profiles = (props) => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <div className='collection-container'>
      <main>
        <h1>Your Collection</h1>
      </main>
      <div className='collec-buttons'>
        
      </div>
    </div>
  )
}
export default Profiles