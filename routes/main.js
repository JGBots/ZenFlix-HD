__path = process.cwd()

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/filmes', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})



router.get('/assistir-o-segredo-dos-animais/s', (req, res) => {
    res.sendFile(__path + '/views/player/o-segredo-dos-animais/player.html')
})
router.get('/assistir-o-segredo-dos-animais/osgrddsanms', (req, res) => {
    res.sendFile(__path + '/views/player/o-segredo-dos-animais/index.html')
})
router.get('/assistir-o-segredo-dos-animais', (req, res) => {
    res.sendFile(__path + '/views/filmes/o-segredo-dos-animais.html')
})

router.get('/config', (req, res) => {
config = {
status: true,
result: {
    prefix : '/',
    nomebot: 'RestApi',
    nomedono: 'Jerfinho',
    youtube : 'JG-Bots'
   }
}
res.json(config)
})

module.exports = router