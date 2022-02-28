module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc0983910b12c9533f688c4f9fe5b380'),
  },
});
