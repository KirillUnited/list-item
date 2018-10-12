const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
// http://localhost:5000/api/post (GET)
router.get('/', (req, res)=>{
Post.find({}).then(()=>{
    
})
});
// http://localhost:5000/api/post (GET)
router.get('/', (req, res)=>{
});
// http://localhost:5000/api/post (GET)
router.get('/', (req, res)=>{
});
module.exports = router;