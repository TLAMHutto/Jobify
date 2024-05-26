import sqlite3

# Specify the database name
db_name = 'sql_schema_main.db'

# Connect to the SQLite database (or create it if it doesn't exist)
conn = sqlite3.connect(db_name)

# Print a success message
print(f"Connected to the database '{db_name}' successfully.")

# Close the connection
conn.close()
