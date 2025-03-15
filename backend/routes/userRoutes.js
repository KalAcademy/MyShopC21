import express from 'express'
import { authUser, getUserProfile, registerUser, updateUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

// @desc    Authenticate user and generate token
// @route   POST /api/users/login
// @access  public
router.post('/login', authUser)

// @desc    Register a new user
// @route   POST /api/users/
// @access  public
router.post('/', registerUser)

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  private
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

export default router