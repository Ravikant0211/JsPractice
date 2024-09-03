class DatabaseConnection {

    private static instance: DatabaseConnection;

    // Database connection pool
    private pool: any;

    private constructor() {

        this.pool = {

            connectionUrl: 'mongodb://localhost:27017'
            
        }

    }

    public static getInstnace(): DatabaseConnection {

        if (!DatabaseConnection.instance) {

            DatabaseConnection.instance = new DatabaseConnection();

        }

        return DatabaseConnection.instance;
    }

    public connectDatabase() {
        
        return this.pool;

    }

}

const db1 = DatabaseConnection.getInstnace();
console.log(db1.connectDatabase()); // { connectionUrl: 'mongodb://localhost:27017' }

const db2 = DatabaseConnection.getInstnace();
console.log(db2.connectDatabase()); // { connectionUrl: 'mongodb://localhost:27017' }

console.log(db1 === db2); // true