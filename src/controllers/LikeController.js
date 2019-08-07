const Dev = require('../models/Dev');

/** Para utilizar um parametro que vem na roda, utilizamos o 'params' */
module.exports = {
    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        
        const targetDev = await Dev.findById(devId);
       
        if (targetDev.likes.includes(loggedDev._id)) {
            console.log('deu match');
        };
        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();
        return res.json(loggedDev)

    }
}