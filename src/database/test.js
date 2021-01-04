const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //now inset data in table
    await saveOrphanage(db, {  
        name: "Laços de família",
        description: "Presta assistência a crianças que se encontrem em situação de risco ou vulnerabilidade social" ,
        images: [ 

            "https://images.unsplash.com/photo-1602324865142-f408d45769ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

            "https://images.unsplash.com/photo-1602524818604-fb5277190621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
        ].toString(),
        lat: "35.6663392",
        lng : "139.6564953",
        instructions: "Venha se sentir a vontade e traga muito amor e paciência",
        opening_hours:"Horario de visita, das 8:00h até as 18:00h",
        open_on_weekends: "1"
    })
    
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    //deletar um dado da tabela
    await db.run("DELETE FROM tabela WHERE id = ''")
})