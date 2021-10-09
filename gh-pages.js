const ghpages = require('gh-pages');

ghpages.publish(
	'static',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/tomdelie/tomdelie.com.git'
	},
	(err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("DEPLOYED!");
  }
);