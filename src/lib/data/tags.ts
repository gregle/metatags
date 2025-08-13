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
  <title>Basic HTML - Title</title>
`,
		title: 'Basic <head>',
		text: "The most basic implementation. Just a title and chracter encoding. No preview image, or extra description, so no need for meta data. The title tag is primarily used by browsers to define the text in the browser tab, and what gets auto set as a bookmark's title."
	},
	description: {
		code: `
  <meta charset="utf-8" />
  <title>Basic HTML - Title & Description</title>
  <meta name="description" content="Basic w/ Description - Description. 
    It's an extra long description so you can see how
    certain apps cut off the message at different points.
    Surely the app has cut off by now right? "/>
`,
		title: 'Basic HTML - Title & Description',
		text: "The most basic implementation, but this time with a description. There's no technical limitation to how long your description can be, but most previews cut off after a couple of sentences. And rightfully so, folks should be clicking into the page if they're that invested right?"
	},
	loading: {
		code: '',
		title: 'Dynamic Title Demo',
		text: ''
	},
	'OG:Basics': {
		code: `
  <meta charset="utf-8" />
  <title>OG:Basic</title>
  <meta name="description" content="Getting started with Open Graph definitions" />
  <!-- ... -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="OG:Basic - An introduction to Open Graph" />
  <meta property="og:description" content="Getting started with Open Graph definitions.
    Defining a type, a title, and a description." />
`,
		title: 'Open Graph - Basics',
		text: "The Open Graph protocol is a set of standards originally annouced by Facebook in 2010 which define metadata tags that describe content and controls how it's displayed when sharing links on social media. It has been widely adopted by many platforms at this point. In the above example it duplicates the definition for title and definition, so when posted to most social media apps, the OG tags will be preferenced, but the title the browser tab will preference the standard html title tag. If the OG:description tag is omitted, most sites fallback to the standard description meta tag. This cascading definitions can be useful when targetting specific information to social media apps.<br/>In order for your content to be represented with the og:type tag. There are full type veritcals for music amd video with subtypes (eg: albums, movie, apisode), along with other simplier types like article, profile, or in this case, website."
	},
	'OG:Image': {
		code: `
  <meta charset="utf-8" />
  <title>OG:Image</title>
  <meta name="description" content="A good example of the most common preview use case." />
  <meta property="og:title" content="OG:Image - A common use case" />
  <meta property="og:description" content="A good example of the most common link preview use case.
    Expanding our basic Open Graph definitions to include a preview image." />
  <meta property="og:type" content="website" />
  <!-- ... -->
  <meta property="og:image" content="http://assets.gregle.dev/projects/metatags/gregle-dev-preview.jpg" />
  <meta property="og:image:secure_url" content="https://assets.gregle.dev/projects/metatags/gregle-dev-preview.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="600" />
  <meta property="og:image:alt" content="A preview screenshot of my personal portfolio" />
`,
		title: 'Open Graph - Image',
		text: "One of the most common OG tags you'll see is the preview image. This gives a potential user some idea of what to expect when they click. Some good strategies are either a screenshot of the page, or a logo/image that represents the content well. Recommended resolution is 2:1 ratio for large cards and 1:1 for small card with a minimum dimension of 300x157. You can also explicitly define additional structured data like height and width with an extra :. Put structured content immediately after it's root tag, both for better organization, and because most parsers will consider it done as soon as the next root element is encountered. Some platforms even provide support for gifs as preview images! Though not all of them, so make sure that first frame is meaningful as that will likely be the fallback still."
	},
	'OG:Video': {
		code: `
  <meta charset="utf-8" />
  <title>OG:Video</title>
  <meta name="description" content="A time lapse of the 2017 total solar eclipse shot from eastern Oregon." />
  <meta property="og:title" content="OG:Video - The 2017 Total Eclipse" />
  <meta property="og:description" content="A time lapse of the 2017 total solar eclipse shot from eastern Oregon.
    And demonstrating how more complex media types are handled by OG preview links." />
  <meta property="og:type" content="video.other" />
  <!-- ... -->
  <meta property="og:video" content="http://assets.gregle.dev/timelapses/eclipse.mp4" />
  <meta property="og:video:secure_url" content="https://assets.gregle.dev/timelapses/eclipse.mp4" />
  <meta property="og:video:type" content="video/mp4" />
  <meta property="og:video:width" content="720" />
  <meta property="og:video:height" content="720" />
`,
		title: 'Open Graph - Video',
		text: 'The structured data for the video tag matches the image tags fairly closely (kind of like if videos were just a series of images or something). Keep in mind though, showing your content like this, may prevent the need for a user to click through to your page, instead favoring to watch directly on whatever third part platform the link has been posted to.'
	},
	'OG:Audio': {
		code: `
  <meta charset="utf-8" />
  <title>OG:Audio</title>
  <meta name="description" content="Demonstrating how OG Audio previews behave in preview links." />
  <meta property="og:title" content="JOHN CENA!!!" />
  <meta property="og:description" content="AND HIS NAME IS JOHN CENA! *trumpets* *TRUMPETS* *trumpets* *trumpetssssss*" />
  <meta property="og:type" content="music.song" />
  <!-- ... -->
  <meta property="og:audio" content="http://assets.gregle.dev/projects/metatags/JOHN-CENA.mp3" />
  <meta property="og:audio:secure_url" content="https://assets.gregle.dev/projects/metatags/JOHN-CENA.mp3" />
  <meta property="og:audio:type" content="audio/mpeg" />
`,
		title: 'Open Graph - Audio',
		text: "The audio tag however has fewer sub-properties, as sounds don't have a height or width. But depending on how the recieving platform has implemented things, it also allows for users to consume the content directly from the link preview."
	},
	schema: {
		code: `
  <meta charset="utf-8" />
  <title>The Seattle Viaduct Before & After - Gregle.dev</title>
  <meta name="description" content="Seattle's waterfront before and after the removal of the Alaskan Way Viaduct.
    Two timelapses from the same perspective to highlight the change in the area with the completetion of 30 seperate waterfront projects." />
  <!-- ... -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Article",
      "headline": "The Seattle Viaduct Before & After - Gregle.dev",
      "abstract": "Seattle's waterfront before and after the removal of the Alaskan Way Viaduct.",
      "description": "Seattle's waterfront before and after the removal of the Alaskan Way Viaduct. Two timelapses from the same perspective to highlight the change in the area with the completetion of 30 seperate waterfront projects.",
      "image": "https://assets.gregle.dev/timelapses/viaduct/preview.jpg",
      "thumbnailUrl": "https://assets.gregle.dev/timelapses/viaduct/preview.jpg"
    }
  </script>
`,
		title: 'Schema.org - Search Engines',
		text: "Schema is another standard for describing content on the web created by Google, Microsoft, Yahoo and Yandex to make the job of their search web scrappers easier. It's documentation is long and complicated and honestly, after years of them making Google Search worse, I don't think it's my job to make it better, and likely defining these schemas just make it easier for their AI to hoover up your content right before they charge you for the privledge of using it again. So better to let Google and friends worry about their own bots and save your time for building cool things. But this is how you make those fancy google results your marketing department keeps going on about."
	},
	twitter: {
		code: `
  <meta charset="utf-8" />
  <title> ̶T̶w̶i̶t̶t̶e̶r̶ ̶  X.com</title>
  <meta name="description" content="Another kind of meta tag" />
  <meta property="og:title" content="Twitter Meta Tags" />
  <meta property="og:description" content="Introducing The Twitter tags and demonstrating how
    you can use it to specifically target that cesspool of a social media site" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://assets.gregle.dev/projects/metatags/break-kings.webpg" />
  <!-- ... -->

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Delete your Twitter" />
  <meta name="twitter:description" content="Nothing good happens here" />
  <meta property="twitter:image" content="https://assets.gregle.dev/projects/metatags/rip-twitter.png" />

  <!-- ... -->
  <meta property="og:title" content="Twitter Meta Tags" />
  <meta property="og:description" content="Introducing The Twitter tags and demonstrating how
    you can use it to specifically target that cesspool of a social media site" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://assets.gregle.dev/projects/metatags/break-kings.webp" />
`,
		title: ' ̶T̶w̶i̶t̶t̶e̶r̶  X',
		text: "Some past websites implemented their own version of open graph tags, specific to their domain. For example, there once was a company called Twitter, they implemented their own meta tag system. Though that original website is long gone now, it's tags are still blindly used by other social media platforms and, when used in conjunction with the more standard Open Grah tags (and because of the cascading nature of them), it can be used to target specific messaging to userbases. While still showing the OG and basic descriptions on other platforms. It's important to note though that you as a developer can't control what tag meta data scrappers use or how it gets scrapped in general. Some platforms take the first ':image' definition found, some look for the last, some look specifically for a whole tag (ie: 'og:*, or twitter:*'), so best I suggest both wrapping your twitter troll message with duplicated og tags above and below, and to not over do it with your targetted messaging.",
		headerTitle: '<s>Twitter</s>'
	}
};
