const express = require('express');
const router = express.Router();
const isBase64 = require('is-base64');
const base64Img = require('base64-img');

const {Media} = require('../models');
const {postMedia,getAllMedia,deleteMedia} = require('../controller/Media')
/* GET users listing. */
router.get('/',getAllMedia);
router.post('/',postMedia);
router.delete('/:id',deleteMedia);

module.exports = router;
