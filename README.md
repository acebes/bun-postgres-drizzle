# bun-postgres-drizzle

This project was created using `bun init` in bun v1.0.18. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
### To install dependencies:
```bash
bun install
```
```bash
bun run index.ts
```

### To build database
- generate schema
```bash
npm run generate
```
- run migration
```bash
cd db/schema
bun run index.ts 
```

-----------------------

# creating db on console
To access PostgreSQL in Debian and create a new database, you can follow these steps:

### 1. Install PostgreSQL:

Make sure PostgreSQL is installed on your Debian system. You can do this by running:

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

This will install PostgreSQL and some additional utilities.

### 2. Start PostgreSQL Service:

The installation process should automatically start the PostgreSQL service. If not, you can start it manually:

```bash
sudo service postgresql start
```

### 3. Access PostgreSQL Shell:

You can access the PostgreSQL shell using the `psql` command. By default, the PostgreSQL superuser is named `postgres`. Use the following command to access the PostgreSQL shell as the `postgres` user:

```bash
sudo -u postgres psql
```

This will open a PostgreSQL shell prompt.

### 4. Create a Database:

Now, within the PostgreSQL shell, you can create a new database. Replace `your_database` with the desired name for your database:

```sql
CREATE DATABASE your_database;
```

### 5. Create a User:

You might want to create a new user and grant them privileges on the newly created database. Replace `your_user` and `your_password` with the desired username and password:

```sql
CREATE USER your_user WITH PASSWORD 'your_password';
ALTER ROLE your_user SET client_encoding TO 'utf8';
ALTER ROLE your_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE your_user SET timezone TO 'UTC';
```

### 6. Grant Privileges:

Grant the necessary privileges to the user on the database:

```sql
GRANT ALL PRIVILEGES ON DATABASE your_database TO your_user;
```

### 7. Exit the PostgreSQL Shell:

Exit the PostgreSQL shell by typing:

```sql
\q
```

### 8. Test the Connection:

You can now test the connection to the new database using the `psql` command:

```bash
psql -U your_user -d your_database -h localhost
```

# creating db on docker
To access PostgreSQL running in a Docker container, you can use the `docker exec` command to execute a command inside the container. Here are the steps:

### 1. Run PostgreSQL in Docker:

Assuming you already have a PostgreSQL Docker container running, if not, you can run it with a command similar to the following:

```bash
docker run --name postgres-container -e POSTGRES_PASSWORD=your_password -p 5432:5432 -d postgres
```

Replace `your_password` with the desired password.

### 2. Access PostgreSQL Shell via `docker exec`:

Use the following command to access the PostgreSQL shell inside the running container:

```bash
docker exec -it postgres-container psql -U postgres
```

This assumes that the default PostgreSQL superuser is named `postgres`. If you are using a different superuser, replace `postgres` with the appropriate username.

### 3. Create a Database:

Inside the PostgreSQL shell, you can create a new database. Replace `your_database` with the desired name for your database:

```sql
CREATE DATABASE your_database;
```

### 4. Create a User:

Create a new user and grant them privileges on the newly created database. Replace `your_user` and `your_password` with the desired username and password:

```sql
CREATE USER your_user WITH PASSWORD 'your_password';
ALTER ROLE your_user SET client_encoding TO 'utf8';
ALTER ROLE your_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE your_user SET timezone TO 'UTC';
```

### 5. Grant Privileges:

Grant the necessary privileges to the user on the database:

```sql
GRANT ALL PRIVILEGES ON DATABASE your_database TO your_user;
```

### 6. Exit the PostgreSQL Shell:

Exit the PostgreSQL shell by typing:

```sql
\q
```

### 7. Test Connection from Host:

You can test the connection to the new database from your host machine using the `psql` command:

```bash
psql -h localhost -U your_user -d your_database -W
```
