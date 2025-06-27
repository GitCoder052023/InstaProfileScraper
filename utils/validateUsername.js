export default function validateUsername(username) {
  return typeof username === 'string' && !username.includes(' ');
}
