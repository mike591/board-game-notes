<script>
	import games from './games';
	import Navbar from './Navbar.svelte';

	let currentGameKey;
</script>

<main>
	<Navbar currentGame={games[currentGameKey]} />
	{#if games[currentGameKey]}
		<svelte:component this={games[currentGameKey].Component} />
	{:else}
		<div class="container">
		{#each Object.values(games) as game}
			<button color="primary" on:click={() => currentGameKey = game.key}>{game.label}</button>
		{/each}
		</div>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-grow: 1;
		height: 100%;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		flex-grow: 1;
		padding: 15px;
	}
</style>