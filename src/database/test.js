const Database = require('./db');

Database.then(async db => {
    //now inset data in table
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "35.6669392",
            "139.657495",
            "Lar das crianças",
            "Presta assistência a crianças que se encontrem em situação de risco ou vulnerabilidade social" ,
            99999999999999,
            "https://images.unsplash.com/photo-1602324865142-f408d45769ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
            "Venha se sentir a vontade e traga muito amor e paciência",
            "Horario de visita, das 8:00h até as 18:00h",
            "1"

        );
    `)
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
})