CREATE TABLE users (
user_id uuid DEFAULT uuid_generate_v4(),
email text UNIQUE NOT NULL CONSTRAINT email_valid CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'),
password text NOT NULL,
full_name text NOT NULL,
major text NOT NULL,
intake int NOT NULL,
is_volunteer boolean,
PRIMARY KEY(user_id));

CREATE TABLE tutor_subject (
tutor_id uuid DEFAULT NULL,
subject text NOT NULL,
CONSTRAINT fk_tutor 
	FOREIGN KEY(tutor_id)
		REFERENCES users(user_id)
		ON DELETE CASCADE
);

CREATE VIEW full_info AS SELECT user_id, email, full_name, major, intake, ARRAY_AGG(subject) as subjects
FROM users u LEFT JOIN tutor_Subject y ON (y.tutor_id = u.user_id)
GROUP BY user_id, email, full_name, major, intake;
