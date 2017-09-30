const fs = require('fs');

// read exported file
fs.readFile('slack-dump.json', 'utf-8', (err, rawdata) => {
  if (err) throw err;
  const data = JSON.parse(rawdata);

  for (let value of Object.entries(data)) {
    // console.log(value[1].real_name); // user
    // if (typeof value[1].attachments !== 'undefined') {
    //   console.log(value[1].attachments[0].from_url); // url
    //   console.log(value[1].attachments[0].text); // description
    //   console.log(value[1].attachments[0].fallback); // title
    // }
    console.log(value[1]);
    console.log('=========================================');
  }
});

// write new file
