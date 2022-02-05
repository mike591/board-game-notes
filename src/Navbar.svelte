<script>
  import MenuIcon from './assets/MenuIcon.svelte'

  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);

  export let currentGame;
</script>

<div class="navbar">
  <h2>{currentGame?.label || 'Board game notes'}</h2>
  <button class="menu-button" on:click={toggle}>
    <MenuIcon />
  </button>
  {#if isOpen}
    <div class="menu-popup">Hi</div>
    <div class="cancel-overlay" on:click={toggle}></div>
  {/if}
</div>

<style>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.1);
    height: 50px;
    padding: 15px;
    position: relative;
  }

  .menu-button {
    border: none;
    margin: 0;
  }

  .cancel-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .menu-popup {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 75%;
    top: 50px;
    right: 0;
    background-color: white;
    border: 1px solid rgba(155, 155, 155);
    box-shadow: 0 1px 1px 1px rgb(155 155 155 / 25%);
    z-index: 1;
  }
</style>