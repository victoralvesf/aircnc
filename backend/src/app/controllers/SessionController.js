const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        if(!email) {
            return res.status(400).json({
                status: false,
                message: "E necessario informar o email."
            })
        }

        try {
            let user = await User.findOne({ email });

            if(!user){
                user = await User.create({ email })
            }

            return res.status(200).json({
                status: true,
                data: user
            })
        } catch(err) {
            console.log(err);
            return res.status(500).json({
                status: false,
                message: "Nao foi possivel realizar essa operacao, tente novamente"
            })
        }
    }
}