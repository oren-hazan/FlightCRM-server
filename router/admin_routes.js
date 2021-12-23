const { Router } = require('express')
admin_ctrl = require('../ctrl/admin _ctrl')
const { requireAuth } = require('../middleware/authMiddleware')

const router = Router();

router.post('/addAirline', requireAuth, admin_ctrl.insert_airlines)
router.put('/updateAirline', requireAuth, admin_ctrl.update_airlines)
router.delete('/deleteAirline', requireAuth, admin_ctrl.delete_airline_cascade)
router.get('/allCustomers', requireAuth, admin_ctrl.all_customers_join)
router.put('/updateCustomer', requireAuth, admin_ctrl.update_customers)
router.delete('/deleteCustomer', requireAuth, admin_ctrl.delete_customers_cascade)
router.get('/allUsers', requireAuth, admin_ctrl.get_all_users)
router.get('/userById', requireAuth, admin_ctrl.user_by_id)
router.get('/userByUsername', requireAuth, admin_ctrl.user_by_username)
router.post('/addUser', requireAuth, admin_ctrl.insert_users)
router.post('/signupUser', requireAuth, admin_ctrl.signup_user)

module.exports = router;
