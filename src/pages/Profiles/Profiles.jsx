import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import Collections from '../../components/Games/CollecList'
import { addToCollection } from '../../services/gameService'

const Profiles = () => {
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
        <Collections
          addToCollection={addToCollection}
          profiles={profiles}

        />
      </div>
    </div>
  )
}
export default Profiles