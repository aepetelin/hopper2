<script>
  import './lib/TailwindCSS.svelte'
  import {P5} from './game/sketch'

  let gameController = { isPlaying: false, player: {x:0 , y:0} }

  function play () {
    const c = document.getElementById('defaultCanvas0')
    if (c != null) {
      c.remove()
    }
    let p5 = new P5(1000, 400, (controller) => {
     gameController = controller
    })
  }
</script>

<main>
  <h1>Hopper game</h1>
  <div class="h-20">
      <div class="bg-blue-500 text-white cursor-pointer mx-auto inline-block px-12 py-2 text-xl mb-12"
        on:click={play}>
        PLAY
      </div>
  </div>
</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    :global(canvas) {
        margin: auto;
    }

    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    img {
        height: 16rem;
        width: 16rem;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 2rem auto;
        max-width: 14rem;
    }

    p {
        max-width: 14rem;
        margin: 1rem auto;
        line-height: 1.35;
    }

    @media (min-width: 480px) {
        h1 {
            max-width: none;
        }

        p {
            max-width: none;
        }
    }
</style>
