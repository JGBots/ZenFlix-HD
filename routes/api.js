__path = process.cwd()

const fs = require('fs');
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const axios = require("axios");
const cheerio = require("cheerio");
const router  = express.Router();
const { fetchJson } = require(__path + '/lib/fetcher.js')
const request = require("request");

resposta = {
semkey: {
      status: false,
      code: 406,
      mensagem: `Erro apikey esta errada. Não tem apikey? Chame e compre sua chave por apenas 15 R$ wa.me/558594034292`,
},
error: {
    status: false,
    mensagem: 'talvez esteja sendo consertado'
    }
}

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
      ///LISTA DAS APIKEYS PREMIUM\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
const keyprem = [

"JG", //Permanente
"JG-01" // 3 MÊS - ( 01/09/2023 )

];

async function getBuffer(url) {
he = await fetch(url).then(c => c.buffer())
 return he
}
async function Kibar(url) {
he = await fetch(url).then(c => c.json())
 return he
}
function MathRandom(nans) {
he = nans[Math.floor(Math.random() * nans.length)]
 return he
}

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
            ///CHECAR APIKEY\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
router.get('/cekapikey', async(req, res, next) => {
const apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(listkey.includes(apikey)) {
res.json({
  status: 'ApiKey ATIVA',
  apikey: `${apikey}`,
})
} else {
res.json(resposta.semkey)
}
})

module.exports = router
