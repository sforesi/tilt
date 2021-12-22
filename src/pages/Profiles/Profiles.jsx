import { use } from 'express/lib/router'
import { useState, useEffect, useRef } from 'react'
import * as profileService from '../../services/profileService'
import CollectionButtons from '../../components/Games/CollectionButtons'
import { propTypes } from 'react-bootstrap/esm/Image'

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