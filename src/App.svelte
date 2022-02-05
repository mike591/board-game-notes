<script>
	import games from './games';
	import { Button } from 'sveltestrap';
	import Navbar from './Navbar.svelte';

	let currentGameKey;
</script>

<main>
	<div class="header">
	{#if games[currentGameKey]}
		<h2>{games[currentGameKey].label}</h2>
	{:else}
		<h2>Board Game Notes</h2>
	{/if}
		<div class="menu-icon">
			Menu
		</div>
	</div>
	{#if games[currentGameKey]}
		<svelte:component this={games[currentGameKey].Component} />
	{:else}
		<div class="container">
			{#each Object.values(games) as game}
				<Button color="primary" on:click={() => currentGameKey = game.key}>{game.label}</Button>
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

	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		height: 50px;
		align-items: center;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>