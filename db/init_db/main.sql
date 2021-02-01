create table user
(
    `id` int auto_increment primary key,
    `follow_count` int not null,
    `followed_count` int not null,
    `name` varchar(255) not null
);

INSERT INTO main.user (id, follow_count, followed_count, name) VALUES (1, 0, 0, 'Mark Twain');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES (2, 0, 0, 'Gautama Buddha');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES (3, 0, 0, 'Albert Einstein');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES (4, 0, 0, 'Mahatma Gandhi');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES (5, 0, 0, 'Oscar Wilde');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES (6, 0, 0, 'J.R.R. Tolkien');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES (7, 0, 0, 'Thomas A. Edison');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES (8, 0, 0, 'Friedrich Nietzsche');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES (9, 0, 0, 'Ralph Waldo Emerson');

create table murmur
(
    `id`     int auto_increment primary key,
    `text`   text null,
    `like`   int default 0,
    `userId`   int(11)
);

INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('Whenever you find yourself on the side of the majority, it is time to pause and reflect.', 3, 1);
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('It is better to travel well than to arrive.', 5, 2);
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('Two things are infinite: the universe and human stupidity; and I''m not sure about the universe.', 10, 3);
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('Be the change that you wish to see in the world.', 6, 4);
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('If you tell the truth, you don''t have to remember anything.', 7, 1);
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('Always forgive your enemies; nothing annoys them so much.', 9, 5);
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('I am glad you are here with me. Here at the end of all things, Sam.', 3, 6);
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle', 16, 2);
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('We are all in the gutter, but some of us are looking at the stars.', 17, 5);
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('It is not a lack of love, but a lack of friendship that makes unhappy marriages.', 7, 7);
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('It is not a lack of love, but a lack of friendship that makes unhappy marriages.', 9, 8);
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', 18, 9);




