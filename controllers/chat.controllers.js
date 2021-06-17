exports.getWelcome = async (req, res) => {
    res.render('homepage')
};

exports.getChat = async (req, res) => {
    res.render('chat')
};

exports.getCreateChat = async (req, res) => {
    res.render('create-chat')
};

exports.getHistory = async (req, res) => {
    res.render('history-chat')
};