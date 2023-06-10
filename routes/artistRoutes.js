const express = require('express')
const router = express.Router();
const Artist = require('../models/Artist')

router.get('/', async(req,res)=>{
    try{
        const artists = await Artist.find();
        res.json(artists);
    } catch (error){
        res.status(500).json({error:'Internal Server Error'});
    }
});

router.post('/', async (req,res)=>{
    try{
        const artist = await Artist.create(req.body);
        res.json(artist);
    } catch(error){
        res.status(500).json({ error: 'Insternal server eroor'});
    }
});

module.exports= router;