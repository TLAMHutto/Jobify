/* -- Connect to the new database
\c psql_db

-- Create the schema
CREATE SCHEMA IF NOT EXISTS app_schema AUTHORIZATION foo;

-- Create the job_applications table within the schema
CREATE TABLE IF NOT EXISTS app_schema.job_applications (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    job_description TEXT,
    location VARCHAR(255),
    qualifications TEXT,
    revised_resume TEXT,
    cover_letter TEXT,
    date_applied DATE,
    status VARCHAR(50),
    follow_up_info TEXT
);
 */