DROP TABLE IF EXISTS `users`;

CREATE TABLE `users`(
    `id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `nickname` VARCHAR(120) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `salt` VARCHAR(255) NOT NULL,
    UNIQUE KEY `idx_nickname` (`nickname`),
    UNIQUE KEY `idx_email` (`email`)
);