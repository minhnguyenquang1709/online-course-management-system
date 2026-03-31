import bcrypt from 'node_modules/bcryptjs';

function getPasswordHash(password: string): string {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
}

function isPasswordsIdentical(
  password: string,
  hashedPassword: string,
): boolean {
  return bcrypt.compareSync(password, hashedPassword);
}
