import ghpages from 'gh-pages';

ghpages.publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/tomdelie/tomdelie.com.git'
	},
	(err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("DEPLOYED!");
  }
);