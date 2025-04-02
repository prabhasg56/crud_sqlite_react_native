import SQLite from 'react-native-sqlite-storage';

// Enable debugging
SQLite.DEBUG(true);
SQLite.enablePromise(true);

// Function to get database connection
const getDBConnection = async   () => {
  return SQLite.openDatabase(
    { name: 'items.db', location: 'default' },
    () => console.log('Database connected!'),
    (error) => console.error('DB Opening Error:', error)
  );
};

// Function to initialize the database (create table if not exists)
export const initDB = async () => {
    try {
      const db = await getDBConnection(); // Wait for the DB connection
      await db.executeSql(
        `CREATE TABLE IF NOT EXISTS items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          description TEXT NOT NULL
        );`
      );
      console.log('Table "items" created successfully');
    } catch (error) {
      console.error('DB Initialization Error:', error);
    }
  };
// Export DB connection
export default getDBConnection;
