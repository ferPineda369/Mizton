import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db = null;

async function openDb() {
  if (!db) {
    db = await open({
      filename: './mizton.sqlite',
      driver: sqlite3.Database,
    });

    // Create tables if they don't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS tbluser (
        idUser INTEGER PRIMARY KEY AUTOINCREMENT,
        passUser TEXT,
        refUser INTEGER,
        netUser TEXT,
        nameUser TEXT,
        dateUser TEXT,
        emailUser TEXT UNIQUE
      )
    `);
  }
  return db;
}

export async function query(sql, params = []) {
  const db = await openDb();
  try {
    return await db.all(sql, params);
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}

export async function execute(sql, params = []) {
  const db = await openDb();
  try {
    return await db.run(sql, params);
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}

// Function to test the database connection
export async function testConnection() {
  try {
    const db = await openDb();
    await db.get('SELECT 1');
    console.log('Database connection successful');
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}
