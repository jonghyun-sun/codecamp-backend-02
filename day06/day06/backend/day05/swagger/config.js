export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '나의 API 명세서',
      version: '1.0.0',
    },
  },
  apis: ['./swagger/*.swagger.js'],
};