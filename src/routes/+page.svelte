<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<section>
	<h1>Fun w/ meta tags</h1>

	<p>
		I set up this little app to help test and verify how sites consume the various ways we can
		define meta data on a site. Particularly when link previews are being generated. Each page uses
		the meta data in their &lt;head&gt; elements that is displayed in the associated code snippets.
		This lets developers have a better idea of how best to represent their websites and projects.
		Each page also has a special twitter specific message when the associated links are shared on
		that sesspool of a site.
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
