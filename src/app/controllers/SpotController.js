const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user) {
            return res.status(403).json({
                status: false,
                message: "Permissao negada!"
            })
        }

        try {

            const spot = await Spot.create({
                user: user_id,
                thumbnail: filename,
                company,
                techs: techs.split(',').map(tech => tech.trim()),
                price
            });

            return res.status(200).json(spot);
        } catch(err) {
            console.log(err);
            return res.status(500).json({
                status: false,
                message: "Nao foi possivel realizar a operacao, tente novamente."
            })
        }
    }
}