const myObject = {
    js: 'javascript',
    cpp: 'c++',
    java: 'java',
    swift: 'swift'
}

for (const key in myObject) {
   console.log(`${key} for shortcut  for ${myObject[key]}`);
   
}