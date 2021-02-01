create table murmurs
(
    `id`     int auto_increment primary key,
    `text`   text        null,
    `like` int         null,
    `author` varchar(30) not null
);

INSERT INTO main.murmurs (id, text, `like`, author) VALUES (1, 'Whenever you find yourself on the side of the majority, it is time to pause and reflect.', 3, 'Mark Twain');
INSERT INTO main.murmurs (id, text, `like`, author) VALUES (2, 'It is better to travel well than to arrive.', 5, 'Gautama Buddha');
INSERT INTO main.murmurs (id, text, `like`, author) VALUES (3, 'Two things are infinite: the universe and human stupidity; and I''m not sure about the universe.', 10, 'Albert Einstein');
INSERT INTO main.murmurs (id, text, `like`, author) VALUES (4, 'Be the change that you wish to see in the world.', 6, 'Mahatma Gandhi');
INSERT INTO main.murmurs (id, text, `like`, author) VALUES (5, 'If you tell the truth, you don''t have to remember anything.', 7, 'Mark Twain');
INSERT INTO main.murmurs (id, text, `like`, author) VALUES (6, 'Always forgive your enemies; nothing annoys them so much.', 9, 'Oscar Wilde');
INSERT INTO main.murmurs (id, text, `like`, author) VALUES (7, 'I am glad you are here with me. Here at the end of all things, Sam.', 3, 'J.R.R. Tolkien');
INSERT INTO main.murmurs (id, text, `like`, author) VALUES (8, 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle', 16, 'Albert Einstein');
INSERT INTO main.murmurs (id, text, `like`, author) VALUES (9, 'We are all in the gutter, but some of us are looking at the stars.', 17, 'Oscar Wilde');
INSERT INTO main.murmurs (id, text, `like`, author) VALUES (10, 'It is not a lack of love, but a lack of friendship that makes unhappy marriages.', 7, 'Thomas A. Edison');
INSERT INTO main.murmurs (id, text, `like`, author) VALUES (11, 'It is not a lack of love, but a lack of friendship that makes unhappy marriages.', 9, 'Friedrich Nietzsche');
INSERT INTO main.murmurs (id, text, `like`, author) VALUES (12, 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', 18, 'Ralph Waldo Emerson');