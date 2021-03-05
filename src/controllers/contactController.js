const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM contact', (err, contacts) => {
            if (err) {
                res.json(err);
            }

            res.render('contacts', {
                data: contacts
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO contact SET ?', [data], (err, contact) => {
            res.redirect('/');
        });
    })
}

module.exports = controller;