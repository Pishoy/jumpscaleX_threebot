<script>
  import axios from "axios";

  axios.defaults.headers.get["Content-Type"] = "application/json";

  import { stores } from "@sapper/app";

  const { preloading, page, session } = stores();

  let query = "";
  export let search_res = "";

  export async function on_search(e) {
    // if (!query) {
    //   alert("empty search !");
    // }
    e.preventDefault();
    // FIXME: replace with axios
    search_res = await new Promise((resolve, reject) => {
      resolve([
        { link: "https://xmon.3bot.grid.tf/blog/xmon/posts" },
        { link: "https://abom.3bot.grid.tf/blog/travel/posts" }
      ]);
    });
  }
  export function clear_results(e) {
    if (e.key === "Escape" || e.type === "click") {
      search_res = "";
    } else if (e.key == "Backspace") {
      if (query === "") {
        search_res = "";
      }
    }
  }
</script>

<style>
  .form-control-borderless {
    border: none;
  }

  .form-control-borderless:hover,
  .form-control-borderless:active,
  .form-control-borderless:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
</style>

<div class="row justify-content-center">
  <div class="col-12 col-md-10 col-lg-8">
    <form
      class="card card-sm search-form"
      on:submit={on_search}
      on:keyup={clear_results}>
      <div class="card-body row no-gutters align-items-center">
        <div class="col-auto">
          <i class="fas fa-search h4 text-body" />
        </div>
        <!--end of col-->
        <div class="col">
          <input
            bind:value={query}
            class="form-control form-control-lg form-control-borderless"
            type="search"
            placeholder="Search topics or keywords" />
        </div>
        <!--end of col-->
        <div class="col-auto">
          <button
            class="btn btn-lg btn-success"
            type="submit"
            on:click={on_search}>
            Search
          </button>
        </div>
        <!--end of col-->
      </div>
    </form>
    {#if search_res}
      <p>We found {Object.keys(search_res).length} Result(s)</p>
      <ul>
        {#each search_res as res}
          <li class="list-results">
            <a href={res.link} on:click={clear_results}>{res.link}</a>
          </li>
        {/each}
      </ul>
      <!-- {:else}
      <p>Sorry, no results.</p> -->
    {/if}
  </div>
  <!--end of col-->
</div>
