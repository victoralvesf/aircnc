const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        try {
            let booking = await Booking.create({
                user: user_id,
                spot: spot_id,
                date,
            });

            await booking.populate(['user', 'spot']).execPopulate();

            return res.status(200).json(booking);

        } catch(err) {
            console.log(err)
            return res.status(500).json({
                status: false,
                message: "Nao foi possivel realizar essa operacao, tente novamente."
            })
        }
    }
}