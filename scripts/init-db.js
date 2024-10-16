import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcryptjs';

async function initializeDatabase() {
  try {
    const db = await open({
      filename: './mizton.sqlite',
      driver: sqlite3.Database,
    });

    // Create tbluser table
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

    // Check if the first user already exists
    const existingUser = await db.get('SELECT * FROM tbluser WHERE idUser = 1');

    if (!existingUser) {
      // Hash the password
      const hashedPassword = await bcrypt.hash('Hola123456', 12);

      // Insert the first user
      await db.run(
        `
        INSERT INTO tbluser (idUser, passUser, refUser, netUser, nameUser, dateUser, emailUser)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
        [
          1,
          hashedPassword,
          0,
          JSON.stringify([0, 0, 0, 0, 0]),
          'Mizton',
          '1729103016',
          'mizton@corporaxion.com',
        ]
      );

      console.log('First user added successfully');
    } else {
      console.log('First user already exists');
    }

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

initializeDatabase();
