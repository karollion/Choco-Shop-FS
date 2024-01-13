export default () => ({
  port: parseInt(process.env.PORT, 10) || 3030,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '12h',
  },
});
