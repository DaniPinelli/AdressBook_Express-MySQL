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

module.exports = controller;