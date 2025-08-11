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
		title: 'Basic <head>',
		text: 'The most basic implementation. Just a title and chracter incoding. No preview image, but no need for meta data. The title tag also defines the text in the browser tab, and what gets auto set as a bookmark title.'
	},
	description: {
		code: `
  <meta charset="utf-8" />
  <title>Basic w/ Description - Title</title>
  <meta name="description" content="Basic w/ Description - Description. 
  It's an extra long description so you can see how
  certain apps cut off the message at different points."/>
`,
		title: 'Basic w/ Description',
		text: "The most basic implementation, but this time with a description. There's no technical limitation to how long your description can be, but most previews cut off after a couple of sentences."
	},
	loading: {
		code: '',
		title: 'Dynamic Title Demo',
		text: ''
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
  <meta charset="utf-8" />
  <title>My super cool test page</title>
  <meta name="description" content="Basic - Description" />
  <meta property="og:title" content="Some other social media specific title" />
  <meta property="og:description" content="some other desciprtion" />
  <!-- ... -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Delete your Twitter" />
  <meta name="twitter:description" content="Nothing good happens here" />
  <meta property="twitter:image" content="./rip-twitter.jpeg" />
`,
		title: ' ̶T̶w̶i̶t̶t̶e̶r̶  X',
		text: "Sometimes certain websites will have their own tags that they prefer to use. For example, there once was a site called Twitter, that implemented their own meta tag system. Nowadays it's still used by a specific social media platform and, when used in conjunction with the more standard Open Grah tags, can be used to target specific messaging to their specific userbase. While still showing the OG and basic descriptions on other platforms.",
		headerTitle: '<s>Twitter</s>'
	}
};
