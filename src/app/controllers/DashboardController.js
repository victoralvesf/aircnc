const Spot = require('../models/Spot');

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        try {
            const spots = await Spot.find({ user: user_id });
            
            return res.status(200).json(spots)
        } catch(err) {
            console.log(err);
            return res.status(500).json({
                status: false,
                message: "Nao foi possivel realizar essa operacao, tente novamente"
            })
        }
    },
}