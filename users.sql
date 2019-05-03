CREATE TABLE `users` (
  `Id` int(10) UNSIGNED NOT NULL,
  `UserName` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `Password` varchar(50) CHARACTER SET latin1 DEFAULT NULL,
    `Status` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
   `Role` varchar(255) NOT NULL,
  `VendorId` int(11) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

ALTER TABLE `users`
  MODIFY `Id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;
