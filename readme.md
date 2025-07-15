# My Express API

A RESTful API for pratice purposes.

## Features

- CRUD operations for users and PY invoices

## Technologies

- Express.js
- Prisma

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/matiasorue10/my-express-api.git
   cd my-express-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create your database**

   - Recomended: PostgreSQL

4. **Configure environment variables**

   - Copy `.env.example` to `.env` and update values as needed.

5. **Run the prisma scripts**

   - `npm run generate`: To generate the prisma client.
   - `npm run migrate`: To create the tables in the database.
   - `npm run seed`: To seed the database with some data.

6. **Run the server**
   ```bash
   npm run dev
   ```

## API Documentation

See [localhost:3000/docs](localhost:3000/docs) for detailed endpoints and usage.

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
