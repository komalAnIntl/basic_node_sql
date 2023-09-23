const instaUser = require('../model/insta_user');
const { Op } = require('sequelize');
const { generateFromEmail } = require("unique-username-generator");


exports.findUserName = async (req, res) => {

    const userName = req.params.userName;
    console.log(userName);
    const user = await instaUser.findOne({
        where: {
            user_name: userName
        }
    });

    console.log(user);

    if (user) {
        const similerNames = await instaUser.findAll({
            attributes: ['user_name'],
            where: {
                user_name: {
                    [Op.startsWith]: userName
                }
            },
        });

        let holder = [];
        let suggestions = [];

        holder = similerNames.map((item) => item.user_name);

        console.log(similerNames);

        for (let i = 0; i < 10; i++) {
            let randomUserName = generateFromEmail(
                `${userName}@example.com`,
                Math.floor(Math.random() * (4 - 2)) + 2
            );
            if (!holder.includes(randomUserName)) {
                suggestions.push(randomUserName);
            }
        }
        res.status(200).json({ suggestions: suggestions, msg: 'User Found', status: true })
    } else {

        res.status(200).json({ msg: 'No User Found', status: false })
    }
}


exports.createUser = async (req, res) => {
    const user = instaUser.create(req.body);
    return user ? res.status(200).json({ 'msg': 'User Created Successfully' }) : res.json({ 'msg': 'Smething went wrong' })
}