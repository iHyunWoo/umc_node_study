CREATE TABLE region (
    id BIGINT PRIMARY KEY,
    name VARCHAR(20),
    created_at DATETIME(6),
    updated_at DATETIME(6)
);

CREATE TABLE store (
    id BIGINT PRIMARY KEY,
    region_id BIGINT,
    name VARCHAR(50),
    address VARCHAR(50),
    score FLOAT,
    created_at DATETIME(6),
    updated_at DATETIME(6),
    FOREIGN KEY (region_id) REFERENCES region(id)
);

CREATE TABLE mission (
    id BIGINT PRIMARY KEY,
    store_id BIGINT,
    reward INT,
    deadline DATETIME,
    mission_spec TEXT,
    created_at DATETIME(6),
    updated_at DATETIME(6),
    FOREIGN KEY (store_id) REFERENCES store(id)
);

CREATE TABLE member (
    id BIGINT PRIMARY KEY,
    name VARCHAR(20),
    gender VARCHAR(10),
    age INT,
    address VARCHAR(40),
    spec_address VARCHAR(15),
    status VARCHAR(15),
    inactive_date DATETIME,
    social_type VARCHAR(10),
    created_at DATETIME(6),
    updated_at DATETIME(6),
    email VARCHAR(50),
    point INT
);

CREATE TABLE member_mission (
    id BIGINT PRIMARY KEY,
    member_id BIGINT,
    mission_id BIGINT,
    status VARCHAR(15),
    created_at DATETIME(6),
    updated_at DATETIME(6),
    FOREIGN KEY (member_id) REFERENCES member(id),
    FOREIGN KEY (mission_id) REFERENCES mission(id)
);

CREATE TABLE review (
    id BIGINT PRIMARY KEY,
    member_id BIGINT,
    store_id BIGINT,
    body TEXT,
    score FLOAT,
    FOREIGN KEY (member_id) REFERENCES member(id),
    FOREIGN KEY (store_id) REFERENCES store(id)
);

CREATE TABLE review_image (
    id BIGINT PRIMARY KEY,
    review_id BIGINT,
    image_url TEXT,
    created_at DATETIME(6),
    updated_at DATETIME(6),
    FOREIGN KEY (review_id) REFERENCES review(id)
);

CREATE TABLE terms (
    id BIGINT PRIMARY KEY,
    title VARCHAR(20),
    body TEXT,
    optional BOOLEAN,
    created_at DATETIME(6),
    updated_at DATETIME(6)
);

CREATE TABLE member_agree (
    id BIGINT PRIMARY KEY,
    member_id BIGINT,
    terms_id BIGINT,
    created_at DATETIME(6),
    updated_at DATETIME(6),
    FOREIGN KEY (member_id) REFERENCES member(id),
    FOREIGN KEY (terms_id) REFERENCES terms(id)
);

CREATE TABLE food_category (
    id BIGINT PRIMARY KEY,
    name VARCHAR(15),
    created_at DATETIME(6),
    updated_at DATETIME(6)
);

CREATE TABLE member_prefer (
    id BIGINT PRIMARY KEY,
    member_id BIGINT,
    category_id BIGINT,
    created_at DATETIME(6),
    updated_at DATETIME(6),
    FOREIGN KEY (member_id) REFERENCES member(id),
    FOREIGN KEY (category_id) REFERENCES food_category(id)
);