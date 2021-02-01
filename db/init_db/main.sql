create table murmurs
(
    `id`     int auto_increment primary key,
    `text`   text null,
    `like`   int default 0,
    `author` varchar(30)
);

INSERT INTO main.murmurs (`text`, `like`, `author`)
VALUES ('Whenever you find yourself on the side of the majority, it is time to pause and reflect.', 3, 'Mark Twain');
INSERT INTO main.murmurs (`text`, `like`, `author`)
VALUES ('It is better to travel well than to arrive.', 5, 'Gautama Buddha');
INSERT INTO main.murmurs (`text`, `like`, `author`)
VALUES ('Two things are infinite: the universe and human stupidity; and I''m not sure about the universe.', 10,'Albert Einstein');
INSERT INTO main.murmurs (`text`, `like`, `author`)
VALUES ('Be the change that you wish to see in the world.', 6, 'Mahatma Gandhi');
INSERT INTO main.murmurs (`text`, `like`, `author`)
VALUES ('If you tell the truth, you don''t have to remember anything.', 7, 'Mark Twain');
INSERT INTO main.murmurs (`text`, `like`, `author`)
VALUES ('Always forgive your enemies; nothing annoys them so much.', 9, 'Oscar Wilde');
INSERT INTO main.murmurs (`text`, `like`, `author`)
VALUES ('I am glad you are here with me. Here at the end of all things, Sam.', 3, 'J.R.R. Tolkien');
INSERT INTO main.murmurs (`text`, `like`, `author`)
VALUES ('There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle', 16, 'Albert Einstein');
INSERT INTO main.murmurs (`text`, `like`, `author`)
VALUES ('We are all in the gutter, but some of us are looking at the stars.', 17, 'Oscar Wilde');
INSERT INTO main.murmurs (`text`, `like`, `author`)
VALUES ('It is not a lack of love, but a lack of friendship that makes unhappy marriages.', 7, 'Thomas A. Edison');
INSERT INTO main.murmurs (`text`, `like`, `author`)
VALUES ('It is not a lack of love, but a lack of friendship that makes unhappy marriages.', 9, 'Friedrich Nietzsche');
INSERT INTO main.murmurs (`text`, `like`, `author`)
VALUES ('To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', 18, 'Ralph Waldo Emerson');