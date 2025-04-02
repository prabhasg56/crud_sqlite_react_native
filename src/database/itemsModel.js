import getDBConnection from './db';

// Insert a new item
export const insertItem = async ({ name, description }) => {
  try {
    const database = await getDBConnection();
    const result = await database.executeSql(
      'INSERT INTO items (name, description) VALUES (?, ?);',
      [name, description]
    );
    return result[0].insertId; // Return new item ID
  } catch (error) {
    console.error('Insert Error:', error);
  }
};

// Fetch all items
export const fetchItems = async () => {
  try {
    const database = await getDBConnection();
    const results = await database.executeSql('SELECT * FROM items;');
    // console.log('Fetching', results[0].rows.raw())
    return results[0].rows.raw(); // Returns array of items
  } catch (error) {
    console.error('Fetch Error:', error);
  }
};

// Update an item
export const updateItem = async ({ id, name, description }) => {
  try {
    const database = await getDBConnection();
    await database.executeSql(
      'UPDATE items SET name = ?, description = ? WHERE id = ?;',
      [name, description, id]
    );
  } catch (error) {
    console.error('Update Error:', error);
  }
};

// Delete an item
export const deleteItem = async id => {
  try {
    const database = await getDBConnection();
    await database.executeSql('DELETE FROM items WHERE id = ?;', [id]);
  } catch (error) {
    console.error('Delete Error:', error);
  }
};
