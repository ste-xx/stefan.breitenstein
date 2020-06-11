<template>
  <Layout class="background-container">
    <h1 class="pageHeader">Side Projects</h1>
    <h4 class="projectHeader">Chrome Extensions</h4>

    <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
      <image-card class="gistExplorer">
        <template #image>
          <div style=" display: flex; align-items: center; justify-content: center;">
            <g-image src="~/assets/gistexplorerlogo.png" width="80" height="80"/>
          </div>
        </template>
        <template #image-icons>
          <font-awesome :icon="['fas', 'external-link-alt']" size="lg" @click="open('https://chrome.google.com/webstore/detail/gist-devtool-explorer/egbmdjmhnblffjpfilldkklinjmflaag')"/>
          <font-awesome :icon="['fab', 'github']" size="lg" @click="open('https://github.com/ste-xx/gist-dev-tool-explorer')"/>
        </template>
        <template #title>
          Gist Explorer
        </template>
        <template #description>
          <p>
            I hate searching for my gists on github to run them on the current page...
          </p>
          <p>
            So I build an additional DevTool panel for my (and your) Gists.
          </p>
        </template>
        <template #tag>
          #devtool #js #vue
        </template>
      </image-card>

      <image-card class="plussub">
        <template #image>
          <g-image src="~/assets/plussublogo.png" width="128"/>
        </template>
        <template #image-icons>
          <font-awesome :icon="['fas', 'external-link-alt']" size="lg" style="color: white" @click="open('https://chrome.google.com/webstore/detail/%2Bsub/lpobdmdfgjokempajoobgfdnhjbjlnpm')"/>
          <font-awesome :icon="['fab', 'github']" size="lg" style="color: white" @click="open('https://github.com/plussub/plussub')"/>
        </template>
        <template #title>
          +Sub
        </template>
        <template #description>
          <p>
            I need subtitle for my favorite series/movies and I don't count on the movie provider, which MAY
            provide some subtitles...
          </p>
          <p>
            So I build an extension which can inject subtitles to HTML5 videos. <br>
            Either with a build in integration to <a href="https://opensubtitles.org" target="_blank">opensubtitles.org</a> or with
            a file selection.
          </p>
        </template>
        <template #tag>
          #subtitle #js #vue
        </template>
      </image-card>
    </div>

    <h4 class="projectHeader">Self Organization</h4>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
      <image-card class="rss">
        <template #image>
          <div style=" display: flex; align-items: center; justify-content: center;">
            <g-image src="~/assets/rsslogo.png" width="80" height="80"/>
          </div>
        </template>
        <template #image-icons>
          <font-awesome :icon="['fab', 'github']" size="lg" @click="open('https://github.com/ste-xx/social_channel_notifier')"/>
        </template>
        <template #title>
          Custom RSS-Feed
        </template>
        <template #description>
          <p>
            Im addicted to dev news. <br>
            Sadly, for my preferred channels are no RSS-Feed available...
          </p>
          <p>
            So I build my own custom RSS-Feed, which notifies me when new hot shit is available.
          </p>
          <p>
            I build it with firebase and TypeScript and I tried
            some "classic" OOP stuff with TypeScript (inheritance, mixins, template methods) ... and now I hate code base. ¯\_(ツ)_/¯
          </p>
          <link-grid>
            <template #0-header>
                Github-Trending
                <font-awesome :icon="['fas', 'external-link-alt']" size="xs" @click="open('https://github.com/trending')"/>
            </template>
            <template #0-description>
              Notifies if a TypeScript, JavaScript or everything else (no filter applied), raises in the weekly trending.
            </template>
            <template #0-link>
              <font-awesome :icon="['fas', 'rss']" size="lg" @click="open('https://us-central1-social-channel-notifier.cloudfunctions.net/ghTrending_Rss')"/>
            </template>

            <template #1-header>
              HackerNews
              <font-awesome :icon="['fas', 'external-link-alt']" size="xs" @click="open('https://news.ycombinator.com/')"/>
            </template>
            <template #1-description>
              Notifies, if a post reach 500 points in the current week.
            </template>
            <template #1-link>
              <font-awesome :icon="['fas', 'rss']" size="lg" @click="open('https://us-central1-social-channel-notifier.cloudfunctions.net/hackerNews_Rss')"/>
            </template>

            <template #2-header>
              r/programming
              <font-awesome :icon="['fas', 'external-link-alt']" size="xs" @click="open('https://www.reddit.com/r/programming/')"/>
            </template>
            <template #2-description>
              Notifies, if a post reach 500 points in the current week.
            </template>
            <template #2-link>
              <font-awesome :icon="['fas', 'rss']" size="lg" @click="open('https://us-central1-social-channel-notifier.cloudfunctions.net/reddit_Rss')"/>
            </template>

            <template #3-header>
              ProductHunt
              <font-awesome :icon="['fas', 'external-link-alt']" size="xs" @click="open('https://www.producthunt.com/')"/>
            </template>
            <template #3-description>
              Notifies, if a post reach 300 votes week in the current week.
            </template>
            <template #3-link>
              <font-awesome :icon="['fas', 'rss']" size="lg" @click="open('https://us-central1-social-channel-notifier.cloudfunctions.net/productHunt_Rss')"/>
            </template>
          </link-grid>
        </template>
        <template #tag>
            #ts #firebase #rss
        </template>
      </image-card>
    </div>

    <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
      <simple-card class="gist">
        <template #title>
          Gists/Codepen for daily use
        </template>
        <template #description>
          <p>Gists are optimized for the Chrome Dev Console.</p>
          <link-grid>
            <template #0-description>
              Search Github links in raw readme.md and generates repo fields for Githubs GQL-Endpoint
            </template>
            <template #0-link>
              <font-awesome style="color:var(--header-color)" :icon="['fab', 'github']" size="lg" @click="open('https://gist.github.com/ste-xx/a1af44103d81c694c48ed7f829799920')"/>
            </template>

            <template #1-description>
              Filter Github repos with at least n-stars
            </template>
            <template #1-link>
              <font-awesome style="color:var(--header-color)" :icon="['fab', 'codepen']" size="lg" @click="open('https://codepen.io/ste-xx/pen/pojebjQ')"/>
            </template>

            <template #2-description>
              Inspired by this <a href="https://xkcd.com/1205/">xkcd</a>. Is it worth the time to solve a problem? This Gist will answer your question.
            </template>
            <template #2-link>
              <font-awesome style="color:var(--header-color)" :icon="['fab', 'github']" size="lg" @click="open('https://gist.github.com/ste-xx/92d0158f8efad882254d4f87cab7d9f7')"/>
            </template>
          </link-grid>
        </template>
        <template #tag>
          #gists #gist-explorer
        </template>
      </simple-card>
    </div>

    <h4 class="projectHeader">Algo Playground</h4>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
      <simple-card class="hus">
        <template #title>
          NEAT Algorithm for Hus [WIP]
        </template>
        <template #title-icons>
          <font-awesome style="margin-right: 8px; color:var(--header-color)" :icon="['fas', 'external-link-alt']" size="lg" @click="open('https://hus-neat.netlify.app/')"/>
          <font-awesome style="color:var(--header-color)" :icon="['fab', 'github']" size="lg" @click="open('https://github.com/ste-xx/hus')"/>
        </template>
        <template #description>
          <p>
            I like the game <a href="https://en.wikipedia.org/wiki/%C7%81Hus" target="_blank">Hus</a> and I lose to my wife every f* time.
          </p>
          <p>
            Perfect time to learn machine learning, I thought.
            So I tried to implement the  <a href="https://en.wikipedia.org/wiki/Neuroevolution_of_augmenting_topologies" target="_blank">NEAT algorithm</a>.
          </p>
          <p>
            We'll see where it goes...
          </p>
        </template>
        <template #tag>
          #ts #ml #neat
        </template>
      </simple-card>

      <simple-card class="pathfinding">
        <template #title>
          Pathfinding Algorithms
        </template>
        <template #title-icons>
          <font-awesome style="margin-right: 8px; color:var(--header-color)" :icon="['fas', 'external-link-alt']" size="lg" @click="open('https://pathfinding-kotlin.netlify.app/')"/>
          <font-awesome style="color:var(--header-color)" :icon="['fab', 'github']" size="lg" @click="open('https://github.com/ste-xx/path-algorithm')"/>
        </template>
        <template #description>
          <p>I was interested in Kotlin, especially in the JavaScript transpiler.</p>
          <p>So instead of "Hello World", I implement some pathfinding algorithm with visualization.</p>
          <p>A like Kotlin a lot, but TypeScript with the <a href="https://github.com/DefinitelyTyped/DefinitelyTyped" target="_blank"> definitely typed project</a>, is simply not beatable. I don't want to maintain the types for third party tools myself.</p>
        </template>
        <template #tag>
          #dijkstra #kotlin
        </template>
      </simple-card>

      <simple-card class="stonePuzzle">
        <template #title>
          Stone Color Puzzle
        </template>
        <template #title-icons>
          <font-awesome style="margin-right: 8px; color:var(--header-color)" :icon="['fas', 'external-link-alt']" size="lg" @click="open('https://stone-puzzle.netlify.app')"/>
          <font-awesome style="color:var(--header-color)" :icon="['fab', 'github']" size="lg" @click="open('https://github.com/ste-xx/stone-color-puzzle')"/>
        </template>
        <template #description>
          <p>
          I was on this party and there was this puzzle lying around...
          </p>
          <div>
            <ul>
              <li> You have a 4x4 Field.</li>
              <li> Each field contains a stone </li>
              <li> Each stone is a square </li>
              <li> A stone has a color on each side</li>
              <li> You can take the stone out and place it wherever you want</li>
              <li> Place each stone so that the places where the stones touch each other are always the same color</li>
            </ul>
          </div>
          <p>
            I haven't managed to solve it all evening...
            Which was so ridiculous.
          </p>
          <p>
            On the next morning I wrote a small script which solves it via backtracking.
            Meh... stupid puzzle...
          </p>
        </template>
        <template #tag>
          #backtracking #js
        </template>
      </simple-card>
    </div>
  </Layout>
</template>

<script>
  import ImageCard from '~/components/ImageCard.vue'
  import SimpleCard from '~/components/SimpleCard.vue'
  import LinkGrid from "../components/LinkGrid.vue";

  export default {
    components: {
      LinkGrid,
      ImageCard,
      SimpleCard,
    },
    metaInfo: {
      title: 'My Github Projects'
    },
    methods: {
      open(link) {
        window.open(link, 'blank');
      }
    }
  }
</script>

<style scoped>
  .pageHeader {
    color: var(--header-color);
    font-family: 'Raleway', sans-serif;
    font-size: clamp(19pt, 6vh, 36pt);
    margin: 2rem 0 0;
  }

  .projectHeader {
    color: var(--header-color);
    font-family: 'Raleway', sans-serif;
    margin: min(2rem, 16px) 0 0;
    font-size: clamp(16pt, 4vh, 32pt);
    font-weight: 700;
    font-style: italic;
  }

  .gistExplorer /deep/ .ImageCardImage {
    background-color: greenyellow;
  }

  .plussub /deep/ .ImageCardImage {
    background-color: #5bc0de;
  }

  .gistExplorer, .plussub {
    margin-top: 16px;
    width: clamp(33%, 350px, 500px);
  }

  .rss /deep/ .ImageCardImage {
    background-color: #e0df09;
  }

  .rss /deep/ .linkGridEntry {
    --contrast-background-color: rgba(224,223,9,0.2);
  }

  .rss,
  .gist {
    width: clamp(70%, 350px, 1000px);
    margin-top: 16px;
  }

  .gist /deep/ .linkGridEntry {
    --contrast-background-color: #efefef
  }

  .hus, .pathfinding, .stonePuzzle {
    margin-top: 16px;
    width: clamp(25%, 350px, 400px);
  }

  .stonePuzzle ul {
    list-style: none;
  }

  .stonePuzzle ul li {
    margin-top: 0.5em;
  }

  ul li::before {
    content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: black; /* Change the color */
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }
</style>

