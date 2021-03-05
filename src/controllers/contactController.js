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
    });
};

controller.edit = (req, res) => {
    const {
        id
    } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM contact WHERE id = ?', [id], (err, contact) => {
            res.render('contactEdit', {
                data: contact[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const {
        id
    } = req.params;
    const newContact = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE contact SET ? WHERE id = ?', [newContact, id], (err, rows) => {
            res.redirect('/');
        });
    });
};


controller.delete = (req, res) => {
    const {
        id
    } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM contact WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};




module.exports = controller;