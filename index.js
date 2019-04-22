function takeANumber(line, name) {
  line.push(name);
  `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  return `Now serving ${line.unshift()}`;
}