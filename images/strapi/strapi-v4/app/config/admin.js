module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '074bf5bec89add56895b214d918a376f'),
  },
});
