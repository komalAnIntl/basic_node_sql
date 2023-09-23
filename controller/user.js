

const user = require('../model/user');


exports.create = async (req, res) => {
    const data = await user.create(req.body);
    return data ? res.status(200).json({ 'msg': 'User Created Successfully' }) : res.json({ 'msg': 'Smething went wrong' })
}


