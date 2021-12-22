import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

async function getProfileById (req, res) {
  const profile = await Profile.findById(req.user.profile)
  .populate('collections.games')
  return res.status(200).json(profile)
}

export { index, getProfileById }
