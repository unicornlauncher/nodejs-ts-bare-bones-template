export function greetings(name: string): string {
  const msg = `Hello, ${name}`;
  console.log(msg);
  return msg;
}

greetings('world!');
