/* -- Create the database if it doesn't exist
DO
$$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_database
      WHERE datname = 'psql_db'
   ) THEN
      CREATE DATABASE psql_db;
   END IF;
END
$$;

-- Create a role with a password
DO
$$
BEGIN
   IF NOT EXISTS (
      SELECT 1 FROM pg_roles
      WHERE rolname = 'foo'
   ) THEN
      CREATE ROLE foo WITH LOGIN PASSWORD 'p1234';
   END IF;
END
$$;

-- Grant all privileges on the database to the new role
GRANT ALL PRIVILEGES ON DATABASE psql_db TO foo;
 */