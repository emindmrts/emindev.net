const https = require('https');
https.get('https://open.spotify.com/embed/track/11dFghVXANMlKmJXsNCbNl', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const m = d.match(/"audioPreview":{"url":"(.*?)"/);
    console.log(m ? m[1] : 'not found');
  });
});
