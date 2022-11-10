db.createUser(
    {
        user: "root",
        pwd: "bookslovescooks",
        roles: [
            {
                role: "readWrite",
                db: "read-it"
            }
        ]
    }
);
db.createCollection("test");
