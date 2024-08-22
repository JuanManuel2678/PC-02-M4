import jwt from "jsonwebtoken";

const user = [
  {
    username: "juanMa",
    password: "caracas2024",
  },
];

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = user.find(
      (i) => i.username === username && i.password === password
    );

    if (user) {
      const token = jwt.sign({ username: user.username }, clave123, {
        expiresIn: "30m",
      });
      return res.json({ token });
    } else {
      return res
        .status(401)
        .json({ message: "Username o Password incorrecto" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verify = async (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Token is required" });
  }

  try {
    const decoded = jwt.verify(token, clave123);
    return res.status(200).json({ message: "Token correcto", decoded });
  } catch (err) {
    return res.status(401).json({ message: "Token incorrecto o vencido " });
  }
};
