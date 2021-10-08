module.exports = {
    "type": "mysql",
    "url": process.env.CLEARDB_DATABASE_URL,
    "entities": ["./dist/entities/**.js"],
    "migrations": ["./dist/database/migrations/**.js"],
    "cli":{
        "migrationsDir": "./src/database/migrations"
    }
}

// "host": "us-cdbr-east-04.cleardb.com",
    // "port": 3306,
    // "username": "b928a9d75d6a67",
    // "password": "ffb5adc4",
    // "database": "heroku_638517c4d65582c",