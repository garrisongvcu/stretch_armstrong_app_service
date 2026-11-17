-- Clean reset for idempotent execution (reverse foreign key order)
DROP TABLE IF EXISTS exercise_logs;
DROP TABLE IF EXISTS workouts;
DROP TABLE IF EXISTS exercises;
DROP TABLE IF EXISTS users;

-- 1. Users (Gym Owner & Clients + Intake Profile & Privacy Flag)
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    role ENUM('OWNER', 'CLIENT') NOT NULL DEFAULT 'CLIENT',
    fitness_level ENUM('BEGINNER', 'INTERMEDIATE', 'ADVANCED') DEFAULT 'BEGINNER',
    intake_notes TEXT,
    share_milestones BOOLEAN NOT NULL DEFAULT FALSE
) ENGINE=InnoDB;

-- 2. Exercises (Master Catalog + Pictorial Demos)
CREATE TABLE exercises (
    exercise_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL UNIQUE,
    instructions TEXT,
    media_url VARCHAR(512)
) ENGINE=InnoDB;

-- 3. Workouts (Assigned Client Plans + Warm-Up Clusters, Recovery Tiers & Set Types)
CREATE TABLE workouts (
    workout_id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    exercise_id INT NOT NULL,
    cluster_name VARCHAR(100) NOT NULL, -- e.g., 'Warm-Up', 'Dynamic Warm-Up', 'Power', 'Strength Cluster 1'
    recovery_tier ENUM('HIGH', 'LOW', 'ANY') NOT NULL DEFAULT 'ANY',
    set_type ENUM('REGULAR', 'WARMUP', 'FAILURE', 'DROP_SET') NOT NULL DEFAULT 'REGULAR',
    target_sets TINYINT UNSIGNED NOT NULL,
    target_reps VARCHAR(50) NOT NULL, -- Supports '8', '10 mins', or 'AMRAP'
    FOREIGN KEY (client_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (exercise_id) REFERENCES exercises(exercise_id) ON DELETE RESTRICT
) ENGINE=InnoDB;

-- 4. ExerciseLogs (Historical Timeseries Performance + Set Type & Notes)
CREATE TABLE exercise_logs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    exercise_id INT NOT NULL,
    performed_date DATE NOT NULL,
    hrv_score DECIMAL(5,2),
    recovery_score TINYINT UNSIGNED,
    set_type ENUM('REGULAR', 'WARMUP', 'FAILURE', 'DROP_SET') NOT NULL DEFAULT 'REGULAR',
    sets_completed TINYINT UNSIGNED NOT NULL,
    reps_completed SMALLINT UNSIGNED NOT NULL,
    weight_used DECIMAL(6,2) DEFAULT 0.00,
    notes VARCHAR(255),
    INDEX idx_client_exercise_date (client_id, exercise_id, performed_date),
    FOREIGN KEY (client_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (exercise_id) REFERENCES exercises(exercise_id) ON DELETE RESTRICT
) ENGINE=InnoDB;
