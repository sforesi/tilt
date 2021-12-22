import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import Collections from '../../components/Games/CollectList'
import { addToCollection } from '../../services/gameService'

const Profile = () => {
  const [profile, setProfile] = useState()

  useEffect(()=> {
    profileService.getProfileById()
    .then(profile => setProfile(profile))
  }, [])
console.log("!!!",profile)
  return (
    <div className='collection-container'>
      <main>
        <h1>Your Collection</h1>
      </main>
      <div className='collec-buttons'>
        <Collections
          addToCollection={addToCollection}
          profile={profile}
        />
      </div>
    </div>
  )
}
export default Profile