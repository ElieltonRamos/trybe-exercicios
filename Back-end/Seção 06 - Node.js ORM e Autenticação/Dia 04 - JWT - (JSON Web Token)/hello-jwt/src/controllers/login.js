const jwt = require('jsonwebtoken');

const secret = 'SenhaSuperSecreta'

// {
//   "username": "algumNomeDeUsuario",
//   "password": "algumaSenha"
// }

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });
  }

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const payload = {
    username,
    admin: false,
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  res.status(200).json({ token });
};

module.exports = {
  login,
};