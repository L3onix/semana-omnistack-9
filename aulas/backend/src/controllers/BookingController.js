const Booking = require('../models/Booking')

module.exports = {
    async store(req, res){
        const { user_id } = req.headers,
            { spot_id } = req.params,
            { date } = req.body
        
        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date
        })

        await booking.populate('spot').populate('user').execPopulate()

        return res.json(booking)
    }
}