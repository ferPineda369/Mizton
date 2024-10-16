import { testConnection } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const isConnected = await testConnection();
    if (isConnected) {
      res.status(200).json({ message: 'Database connection successful' });
    } else {
      res.status(500).json({ message: 'Database connection failed' });
    }
  } catch (error) {
    console.error('Error testing database connection:', error);
    res
      .status(500)
      .json({
        message: 'Error testing database connection',
        error: error.message,
      });
  }
}
