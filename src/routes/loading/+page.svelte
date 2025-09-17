<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import html from 'highlight.js/lib/languages/xml';
	import 'highlight.js/styles/agate.css';

	let isLoading = $state(true);
	setTimeout(() => {
		isLoading = false;
		clearInterval(loadingTextTimeout);
	}, 7000);

	let loadingDots = $state('...');
	const loadingTextTimeout = setInterval(() => {
		if (loadingDots.length < 5) {
			loadingDots += '.';
		} else {
			loadingDots = '.';
		}
	}, 250);

	$effect(() => {
		hljs.registerLanguage('javascript', javascript);
		hljs.registerLanguage('html', html);
		hljs.highlightAll();
	});
</script>

<svelte:head>
	<title>{isLoading ? `Loading${loadingDots}` : 'Success!'}</title>
	<link rel="icon" href={isLoading ? './loading.svg' : './success.gif'} />
</svelte:head>

<div class="text-column">
	<h1>Loading Demo</h1>

	In plain javascript:
	<pre><code class="language-javascript hljs">
document.title = 'Loading.';
const loadingTextTimeout = setInterval(() => &#123;
  if (document.title !== 'Loading.....') &#123;
    document.title += '.';
  &#125; else &#123;
    document.title = 'Loading.';
  &#125;
&#125;, 250);

const onLoaded = () => &#123
  clearInterval(loadingTextTimeout);
  document.title = 'Success!';
  var link = document.querySelector("link[rel~='icon']");
  link.href = "./success.gif"
&#125
  </code></pre>

	With a framework (like svelte):
	<pre><code class="language-html">
{`<svelte:head>
  <title>{isLoading ? \`Loading\${loadingDots}\` : 'Success!'}</title>
  <link rel="icon" href={isLoading ? './loading.svg' : './success.gif'} />
</svelte:head>`}
  </code></pre>

	<p>
		You can have a lot of fun manipulating the title tag and favicon with JavaScript. Watch your
		browser tab as the title text is updated until some arbitrary time later when it declares itself
		done loading. This is a very basic example, but you can be as creative as you want with it! Some
		browsers (Firefox, for example) even support GIFs as favicons.
	</p>
</div>

<style>
	p {
		margin: 0.5em;
		width: 100%;
	}
	pre {
		padding: 0;
	}
</style>
