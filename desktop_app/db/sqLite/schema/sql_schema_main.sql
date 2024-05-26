CREATE TABLE job_data (
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
