import sqlite3

def main():
    # Specify the database name
    db_name = 'sql_schema_main.db'

    try:
        # Connect to the SQLite database (or create it if it doesn't exist)
        conn = sqlite3.connect(db_name)
        print(f"Connected to the database '{db_name}' successfully.")

        # Create a cursor object
        cursor = conn.cursor()

        # SQL command to create a table
        create_table_sql = '''
        CREATE TABLE IF NOT EXISTS job_applications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            company_name TEXT NOT NULL,
            job_title TEXT NOT NULL,
            job_description TEXT,
            location TEXT,
            qualifications TEXT,
            revised_resume TEXT,
            cover_letter TEXT,
            date_applied DATE,
            status TEXT,
            follow_up_info TEXT
        );
        '''

        # Execute the SQL command
        cursor.execute(create_table_sql)

        # Commit the changes
        conn.commit()
        print("Table 'job_applications' created successfully.")

    except sqlite3.Error as e:
        print(f"An error occurred: {e}")
    finally:
        if conn:
            # Close the connection
            conn.close()

if __name__ == "__main__":
    main()
