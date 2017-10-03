const fs = require('fs');

// read exported file
let file = fs.readFileSync('slack-dump.json', 'utf8');
file = Object.entries(JSON.parse(file)).filter((value) => {
  if (typeof value[1].attachments !== 'undefined') {
    return true;
  }
}).map((value) => {
  return ({
    'title': value[1].attachments[0].fallback, // title
    'description': value[1].attachments[0].text, // description
    'user_id': value[1].real_name, // user
    'link': value[1].attachments[0].from_url // url
  });
});

// write new file
fs.writeFile('clean-data.json', JSON.stringify(file), 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
