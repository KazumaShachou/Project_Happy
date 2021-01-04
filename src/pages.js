const Database = require('./database/db');
const SaveOrphanage = require('./database/saveOrphanage.js');

module.exports = {
        
    index(req, res) {
      return res.render('index')
    },

    orphanage(req, res) {
        return res.render('orphanage')
    },

    async orphanages(req, res) {
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render('orphanages', { orphanages })
            
        } catch (error) {
            console.log(error)
            return res.send('Houve um erro no banco de dados')
            
        }
      
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    }
}