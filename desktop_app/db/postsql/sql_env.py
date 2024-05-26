""" import os
from dotenv import load_dotenv
import subprocess

# Load environment variables from .env file
load_dotenv()

# Get the database password from the environment variable
db_password = os.getenv('POSTGRES_KEY')

# Define the database connection parameters
db_user = 'postgres'
db_host = 'localhost'

# Paths to the SQL scripts
initialize_script = 'init_db.sql'
setup_schema_script = 'app_schema.sql'

# Function to run a SQL script using psql
def run_sql_script(script_path):
    try:
        result = subprocess.run(
            [
                'psql',
                '-U', db_user,
                '-h', db_host,
                '-f', script_path
            ],
            env={'PGPASSWORD': db_password},
            check=True,
            text=True,
            capture_output=True
        )
        print(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Error executing {script_path}: {e.stderr}")

# Run the initialize script
run_sql_script(initialize_script)

# Run the setup schema script
run_sql_script(setup_schema_script)
 """