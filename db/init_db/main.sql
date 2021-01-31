CREATE TABLE murmurs (
  `id` int NOT NULL AUTO_INCREMENT primary key,
  `text` TEXT,
  `like` int
);

INSERT INTO murmurs (`text`, `like`) VALUES ('Whenever you find yourself on the side of the majority, it is time to pause and reflect-Mark Twain', 3);
INSERT INTO murmurs (`text`, `like`) VALUES ('It is better to travel well than to arrive \n-buddha.', 5);

/* ALTER USER 'docker'@'localhost' IDENTIFIED WITH mysql_native_password BY 'docker' */
