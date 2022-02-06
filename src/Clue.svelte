<script>
  const localStorageKey = 'clue';
  import clueDefaults from './clueDefaults.js';

  const previousGame = localStorage.getItem(localStorageKey);
  const game = previousGame ? JSON.parse(previousGame) : clueDefaults;
  
  const handleChange = ({ section, row, cell}) => {

    localStorage.setItem(localStorageKey, JSON.stringify(game))
  }
</script>

<div class="container">
  {#each game.header.rows as row, rowIdx}
    <div class="row">
      {#each row as cell, cellIdx}
        <div class="cell">{cell.value}</div>
      {/each}
    </div>
  {/each}

  <div class='section'>{game.suspects.label}</div>
  {#each game.suspects.rows as row, rowIdx}
    <div class="row">
      {#each row as cell, cellIdx}
        <div class="cell">{cell.value}</div>
      {/each}
    </div>
  {/each}

  <div class='section'>{game.weapons.label}</div>
  {#each game.weapons.rows as row, rowIdx}
    <div class="row">
      {#each row as cell, cellIdx}
        <div class="cell">{cell.value}</div>
      {/each}
    </div>
  {/each}

  <div class='section'>{game.rooms.label}</div>
  {#each game.rooms.rows as row, rowIdx}
    <div class="row">
      {#each row as cell, cellIdx}
        <div class="cell">{cell.value}</div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .container {
    display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		flex-grow: 1;
		padding: 15px;
  }
  .section {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 0 15px;
    background-color: rgba(0, 128, 0, 0.75);
    font-weight: bold;
    color: white;
  }
  .row {
    height: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .cell {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>