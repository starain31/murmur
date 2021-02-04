create table if not exists user
(
    id varchar(30) primary key,
    name varchar(255) not null,
    follow_count int not null,
    followed_count int not null
);

INSERT INTO main.user (id, follow_count, followed_count, name) VALUES ('mark_twain', 0, 0, 'Mark Twain');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES ('gautama_buddha', 0, 0, 'Gautama Buddha');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES ('albert_einstein', 0, 0, 'Albert Einstein');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES ('mahatma_gandhi', 0, 0, 'Mahatma Gandhi');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES ('oscar_wilde', 0, 0, 'Oscar Wilde');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES ('jrr_tolkien', 0, 0, 'J.R.R. Tolkien');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES ('thomas_a_edison', 0, 0, 'Thomas A. Edison');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES ('friedrich_nietzsche', 0, 0, 'Friedrich Nietzsche');
INSERT INTO main.user (id, follow_count, followed_count, name) VALUES ('ralph_waldo_emerson', 0, 0, 'Ralph Waldo Emerson');

create table if not exists follows
(
    id int auto_increment primary key,
    followerId varchar(30) null,
    followingId varchar(30) null,
    constraint follows_pk
        unique (followerId, followingId),
    constraint FK_ef463dd9a2ce0d673350e36e0fb
        foreign key (followingId) references user (id),
    constraint FK_fdb91868b03a2040db408a53331
        foreign key (followerId) references user (id)
);

INSERT INTO main.follows (id, followerId, followingId) VALUES (1, 'mark_twain', 'gautama_buddha');
INSERT INTO main.follows (id, followerId, followingId) VALUES (2, 'mark_twain', 'albert_einstein');
INSERT INTO main.follows (id, followerId, followingId) VALUES (4, 'mark_twain', 'friedrich_nietzsche');

create table if not exists murmur
(
    id int auto_increment
        primary key,
    text text not null,
    `like` int not null,
    userId varchar(30) null,
    constraint FK_47031606a07a3514b117b567875
        foreign key (userId) references user (id)
);

INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('Whenever you find yourself on the side of the majority, it is time to pause and reflect.', 0, 'mark_twain');
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('It is better to travel well than to arrive.', 1, 'gautama_buddha');
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('Two things are infinite: the universe and human stupidity; and I''m not sure about the universe.', 1, 'albert_einstein');
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('Be the change that you wish to see in the world.', 0, 'mahatma_gandhi');
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('If you tell the truth, you don''t have to remember anything.', 0, 'mark_twain');
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('Always forgive your enemies; nothing annoys them so much.', 0, 'oscar_wilde');
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('I am glad you are here with me. Here at the end of all things, Sam.', 0, 'jrr_tolkien');
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle', 0, 'albert_einstein');
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('We are all in the gutter, but some of us are looking at the stars.', 0, 'oscar_wilde');
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('It is not a lack of love, but a lack of friendship that makes unhappy marriages.', 0, 'thomas_a_edison');
INSERT INTO main.murmur (`text`, `like`, `userId`)
VALUES ('To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', 0, 'ralph_waldo_emerson');

create table user_likes
(
    id       int auto_increment
        primary key,
    userId   varchar(30) null,
    murmurId int         null,
    constraint user_likes_pk
        unique (userId, murmurId),
    constraint FK_8dbcfb3659d2a1e8641f4b0063d
        foreign key (userId) references user (id),
    constraint FK_f3b7bca2180400af48a500bb84d
        foreign key (murmurId) references murmur (id)
);

INSERT INTO main.user_likes (id, userId, murmurId) VALUES (1, 'mark_twain', 2);
INSERT INTO main.user_likes (id, userId, murmurId) VALUES (2, 'mark_twain', 3);


