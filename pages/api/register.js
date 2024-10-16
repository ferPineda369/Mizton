import { hash } from 'bcryptjs';
import { query, execute } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { fullName, email, password, referredBy } = req.body;

  try {
    // Validar los datos de entrada
    if (!fullName || !email || !password || !referredBy) {
      return res
        .status(400)
        .json({ message: 'Todos los campos son requeridos' });
    }

    // Verificar si el email ya está registrado
    const existingUser = await query(
      'SELECT * FROM tbluser WHERE emailUser = ?',
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(409).json({ message: 'El email ya está registrado' });
    }

    // Obtener el usuario referente
    const referrer = await query('SELECT * FROM tbluser WHERE idUser = ?', [
      referredBy,
    ]);

    if (referrer.length === 0) {
      return res
        .status(400)
        .json({ message: 'Usuario referente no encontrado' });
    }

    // Generar el netUser
    let netUser = JSON.parse(referrer[0].netUser || '[]');
    netUser.unshift(parseInt(referredBy));
    netUser = netUser.slice(0, 5);
    const netUserString = JSON.stringify(netUser);

    // Encriptar la contraseña
    const hashedPassword = await hash(password, 12);

    // Insertar el nuevo usuario
    const result = await execute(
      'INSERT INTO tbluser (passUser, refUser, netUser, nameUser, dateUser, emailUser) VALUES (?, ?, ?, ?, ?, ?)',
      [
        hashedPassword,
        referredBy,
        netUserString,
        fullName,
        Math.floor(Date.now() / 1000),
        email,
      ]
    );

    res
      .status(201)
      .json({
        message: 'Usuario registrado exitosamente',
        userId: result.lastID,
      });
  } catch (error) {
    console.error('Error detallado:', error);
    res
      .status(500)
      .json({ message: 'Error en el servidor', error: error.message });
  }
}
