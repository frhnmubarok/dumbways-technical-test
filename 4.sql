SELECT users_tb.id, name, photo, email, password, content FROM users_tb INNER JOIN post_tb ON users_tb.id = post_tb.id_user 

SELECT * FROM `post_tb` WHERE id_user = 2 

INSERT INTO `post_tb`(`content`, `image`, `id_user`)
VALUES
('INI ADALAH CONTOH CONTENT YANTO 1','content_yanto1.jpg', 2),
('INI ADALAH CONTOH CONTENT YANTO 2','content_yanto2.jpg', 2),
('INI ADALAH CONTOH CONTENT STEVEN','content_steven.jpg', 1),
('INI ADALAH CONTOH CONTENT BAMBANG','content_bambang.jpg', 3);

INSERT INTO users_tb (name,photo,email,password)
VALUES
('Steven', 'steven.jpg', 'steven@email.com', 'steven123'),
('Yanto', 'yanto.jpg', 'yanto@email.com', 'yanto123'),
('Bambang', 'bambang.jpg', 'bambang@email.com', 'bambang123');

UPDATE users_tb SET password = 'ahoy123' WHERE id=1 