<script>
	import games from './games';
	import Navbar from './Navbar.svelte';

	const localStorageKey = 'app';
	const previousGameKey = localStorage.getItem(localStorageKey);
	let currentGameKey = previousGameKey;
	const setCurrentGameKey = (key) => {
		currentGameKey = key;
		localStorage.setItem(localStorageKey, currentGameKey);
	}
</script>

<main>
	<Navbar setCurrentGameKey={setCurrentGameKey} currentGame={games[currentGameKey]} />
	{#if games[currentGameKey]}
		<svelte:component this={games[currentGameKey].Component} />
	{:else}
		<div class="container">
		{#each Object.values(games) as game}
			<button class='container-item' on:click={() => setCurrentGameKey(game.key)}>{game.label}</button>
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

	.container-item {
		padding: 15px;
		width: 75%;
	}
</style>