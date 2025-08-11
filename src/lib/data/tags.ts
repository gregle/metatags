type Tag = {
	code: string;
	title: string;
	text: string;
	headerTitle?: string;
	screenshots?: string[];
};

export const tags: {
	[key: string]: Tag;
} = {
	basic: {
		code: `
  <meta charset="utf-8" />
  <title>Basic - Title</title>
`,
		title: 'Basic',
		text: 'The most basic example. Just a title and chracter incoding'
	},
	description: {
		code: `
  <meta charset="utf-8" />
  <title>Basic w/ Description - Title</title>
  <meta name="description" content="Basic w/ Description - Description" />
`,
		title: 'Basic w/ Description',
		text: 'The most basic example, but this time with a description'
	},
	'OG-Basic': {
		code: `
  <meta charset="utf-8" />
  <title>My super cool test page</title>
  <meta name="description" content="Basic - Description" />
  <!-- ... -->
  <meta property="og:title" content="Some social media specific title" />
  <meta property="og:description" content="Hey thanks for sharing my link <3" />
`,
		title: 'Open Graph - Basic',
		text: 'The most basic example, but this time with a description'
	},
	'OG-Common': {
		code: `
  <meta charset="utf-8" />
  <title>My super cool test page</title>
  <meta name="description" content="Basic - Description" />
  <!-- ... -->
  <meta property="og:title" content="Some other social media specific title" />
  <meta property="og:description" content="some other desciprtion" />
`,
		title: 'Open Graph - Common Attributes',
		text: 'The most basic example, but this time with a description'
	},
	'OG-Audio': {
		code: `
  <meta charset="utf-8" />
  <title>My super cool test page</title>
  <meta name="description" content="Basic - Description" />
  <!-- ... -->
  <meta property="og:title" content="Some other social media specific title" />
  <meta property="og:description" content="some other desciprtion" />
`,
		title: 'Open Graph - Audio',
		text: 'The most basic example, but this time with a description'
	},
	'OG-Video': {
		code: `
  <meta charset="utf-8" />
  <title>My super cool test page</title>
  <meta name="description" content="Basic - Description" />
  <!-- ... -->
  <meta property="og:title" content="Some other social media specific title" />
  <meta property="og:description" content="some other desciprtion" />
`,
		title: 'Open Graph - Video',
		text: 'The most basic example, but this time with a description'
	},
	schema: {
		code: `
  <meta charset="utf-8" />
  <title>My super cool test page</title>
  <meta name="description" content="Basic - Description" />
  <!-- ... -->
  <meta property="og:title" content="Some other social media specific title" />
  <meta property="og:description" content="some other desciprtion" />
`,
		title: 'Schema.org',
		text: 'The most basic example, but this time with a description'
	},
	twitter: {
		code: `
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Delete your Twitter" />
  <meta name="twitter:description" content="Nothing good happens here" />
  <meta property="twitter:image" content="./rip-twitter.jpeg" />
`,
		title: ' ̶T̶w̶i̶t̶t̶e̶r̶  X',
		text: 'The most basic example, but this time with a description',
		headerTitle: '<s>Twitter</s>'
	}
};
