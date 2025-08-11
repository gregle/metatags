<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import html from 'highlight.js/lib/languages/xml';
	import 'highlight.js/styles/agate.css';

	const { data } = $props();

	$effect(() => {
		data; // used to force effect to rerun on data changes
		hljs.registerLanguage('html', html);
		hljs.highlightAll();
	});
</script>

<svelte:head>
	<link rel="icon" href="./scooter.gif" />
	{@html data.code}
</svelte:head>

<div class="text-column">
	<h1>{data.title}</h1>
	{#key data.code}
		<pre><code class="language-html">{`<head>${data.code}</head>`}</code></pre>
	{/key}
	<p>
		{data.text}
	</p>
</div>
