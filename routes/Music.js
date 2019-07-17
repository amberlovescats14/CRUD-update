const router = require('express').Router()
const Music = require('../mongo/MusicSchema')

router.get('/', async(req,res)=> {
  try {
    let music = await Music.find()
    res.json(music)
  } catch (error) {
    console.error(error.message)
    res.status(404).json({msg: `SERVER ERROR`})
  }
})
router.get('/:id', async (req, res) => {
  try {
    let one = await Music.findById(req.params.id)
    if(!one) res.status(400).json({msg: `Music not found.`})
    res.json(one)
  } catch (error) {
    console.error(error.messag4)
    res.status(404).json({msg: `Server ERROR`})
  }
})

router.post('/', async (req,res)=>{
  const { artist, song, genre, year } = req.body;
  try {
    const newMusic = new Music({
      artist,
      song,
      genre,
      year
    })
    const save = await newMusic.save()
      .catch(err => {
        if (err.message.includes('duplicate key error')) {
          return res.status(400).json({msg: 'Duplicate song exists'})
        }
      })
    // const newMusic = {
    //   artist,
    //   song,
    //   genre,
    //   year
    // }
    // const save = await Music.create(newMusic);
    res.json(save)
  } catch (error) {
    console.error(error.message)
    res.status(400).json({msg: `SERVER ERROR`})
  }

})
router.put('/:id', async(req, res) => {
  try {
    const singleMusic = await Music.findById(req.params.id)
    if(!singleMusic){
      res.status(400).json({msg: `not found`})
    } else {
      singleMusic.artist = req.body.artist
      singleMusic.song = req.body.song
      singleMusic.genre = req.body.genre
      singleMusic.year = req.body.year
      await singleMusic.save()
      return res.json(singleMusic)
    }
    
  } catch (error) {
    console.error(error.message)
    res.status(404).json({msg: `SERVER ERROR`})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const singleMusic = await Music.findById(req.params.id)
    if(!singleMusic){
      return res.status(400).json({msg: `NO ID`})
    }
    await singleMusic.remove()
    res.json({msg: `Deleted.`})
  } catch (error) {
    console.error(error.message)
    res.status(400).json({msg: `SERVER ERROR`})
  }
})

module.exports = router
