const express = require('express')

module.exports = function (server) {

    //API ROUTES
    const router = express.Router()
    server.use('/api', router)

    //ROTAS DE CICLO DE PAGAMENTO
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycleS')
}