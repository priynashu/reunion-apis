const express = require('express');
const AllPosts = require('../controllers/allPosts');
const router = express.Router();



const Comment = require('../controllers/comment');
const CreatePosts = require('../controllers/createPosts');
const DeletePosts = require('../controllers/deletePosts');
const followUnfollow = require('../controllers/follow-unfollow');
const GetSinglePosts = require('../controllers/getSinglePost');
const likeUnlike = require('../controllers/like-unlike');
const Login = require('../controllers/login');
const UserDetails = require('../controllers/userDetails');



router.post(`/authenticate`,Login);
router.post('/follow/:id',followUnfollow.follow)
router.post('/unfollow/:id',followUnfollow.unfollow)

router.post('/posts',CreatePosts)
router.delete('/posts/:id',DeletePosts)
router.post('/like/:id',likeUnlike.like)
router.post('/unlike/:id',likeUnlike.unlike)
router.post('/comment/:id',Comment)
router.get('/posts/:id',GetSinglePosts)
router.get('/all_posts',AllPosts)
router.get('/:userEmail',UserDetails)
module.exports = router ;
