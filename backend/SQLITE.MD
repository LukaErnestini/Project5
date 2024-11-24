## SQLite Database

### What is SQLite?

SQLite is a self-contained, serverless, zero-configuration, transactional SQL database engine. Unlike traditional databases like MySQL or PostgreSQL, SQLite doesn't require a separate server process. Instead, it reads and writes directly to disk files, making it perfect for:

- Development environments
- Testing
- Small to medium applications
- Embedded systems

### SQLite CLI Guide

The SQLite CLI is a command-line tool to interact with SQLite databases. Here's how to use it:

1. **Open Database**:

   ```bash
   # Navigate to your database file
   cd backend/prisma

   # Open the SQLite CLI with your database
   sqlite3 dev.db
   ```

2. **Useful SQLite Commands**:

   ```sql
   -- Show all tables
   .tables

   -- Show table schema
   .schema table_name

   -- Make output more readable
   .mode column
   .headers on

   -- List all records in a table
   SELECT * FROM table_name;

   -- Exit SQLite CLI
   .quit
   ```

3. **Common SQL Queries**:

   ```sql
   -- Create a new record
   INSERT INTO Users (email, name)
   VALUES ('test@example.com', 'Test User');

   -- Find records
   SELECT * FROM Users WHERE email LIKE '%@example.com';

   -- Update records
   UPDATE Users
   SET name = 'New Name'
   WHERE email = 'test@example.com';

   -- Delete records
   DELETE FROM Users
   WHERE email = 'test@example.com';
   ```

### SQLite Database Location

The SQLite database file is located at:
`backend/prisma/dev.db`

> **Note**: This file is automatically created when you run `prisma db push`. If you delete this file, all data will be lost, but the file will be recreated (empty) the next time you run the application.

### SQLite Limitations

While SQLite is great for development, be aware of its limitations:

- No built-in user management
- Limited concurrency (one write at a time)
- No network access (file-based only)
- 281 TB size limit (though practical limits are much lower)

For production environments with high concurrency or large datasets, consider migrating to PostgreSQL or MySQL.

### SQLite Browser Tools

If you prefer a GUI over the command line, here are some recommended SQLite browsers:

- [DB Browser for SQLite](https://sqlitebrowser.org/) (Free, Open Source)
- [SQLite Studio](https://sqlitestudio.pl/) (Free)
- [Beekepper Studio](https://www.beekeeperstudio.io/) (Free Community Edition)

To use these tools, simply open the `dev.db` file located in your `backend/prisma` directory.
