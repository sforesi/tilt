import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import CollectCarousel from './CollectCarousel'


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
      <div className='collect-buttons'>
        {profile?.collections.map((collection) =>(
          <CollectCarousel
            title = {collection.category}
            games = {collection.games}
          />
        ))}
      </div>
    </div>
  )
}
export default Profile