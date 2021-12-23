const { Router } = require('express')
customer_ctrl = require('../ctrl/customer_ctrl')
const { requireAuth } = require('../middleware/authMiddleware')

const router =  Router()

router.get('/customerById', requireAuth, customer_ctrl.get_customer_by_id);
router.put('/updateCustomer', requireAuth, customer_ctrl.update_customers);
router.get('/ticketsByCustomer', requireAuth ,customer_ctrl.ticket_by_customer);
router.post('/addTicket', requireAuth, customer_ctrl.insert_tickets);
router.delete('/deleteTicket', requireAuth, customer_ctrl.delete_ticket)
  
module.exports = router


