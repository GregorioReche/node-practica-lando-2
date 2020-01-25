const controller = {
    index: (req,res) => {
        res.render('index');
    },
    about: (req,res) => {
        res.render('about');
    },
    register: (req,res) => {
        res.render('register')
    },
    login: (req,res) => {
        res.render('login')
    }
};

module.exports = controller;