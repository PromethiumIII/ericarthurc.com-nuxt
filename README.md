## Ericarthurc.com

## [0.0.2] [not in production]

## Project Layout

### Project stack

- Nuxt

### Database stack

- CockroachDB
- Redis

### Why Nuxt?

- Well currently I am on working towards migrating over to the Nuxt train. They offer a nice package layout with SSR and better control of the backend server then most of the current isomorphic SSR frameworks. I have only used Vue a little in my coding world, but I have always liked the way it approached things. Vue is clean and does things in a simple way; the more mature in coding I have become the more I appericate things like write in real HTML and not JSX. I have been a HUGE JSX guy for a long time, but that is changing for me.

### Where is the project currently?

- Currently this project is me starting to migrate all functionality from my current Rust project over to Nuxt. I am still not 100% sure how to handle everything correctly yet as I am still a Nuxt/Vue baby. I have already worked through some big steps to ensure I am not wasting my time migrating the project. I have a good solution for setting the Redis cache on startup of the Nuxt server using a Nitro plugin; so far so good! Some of the other bigger issues I need to work through are: handling all the admin console logic (there is a lot and its all written in SolidJS right now) and all my custom middlewares that run only on certain routes (authentication and metrics).

### Where is the changelog?

- I wont be adding a changelog until I feel like everything is in a good spot. That doesn't mean its live in production, it just means a lot portion of the code base is in full swing and working. So I would imagine I will bring the changelog in around version `0.5.x`.

## Previous stacks

##### A list of stacks and the reason I moved on

- Rust Axum | Vite (2023)
  - A little to hacky and started realized the project was going to be really hard to scale upwards. I really want to take advantage of SSR with a fulll framework, its just been hard to find everything I need. All the isomorphic Rust frameworks are extremely immature and are difficult to write in and get going.
- Node Remix | (2023)
  - This is when I started branching out to find a solution to SSR with more control over the backend then a typical SPA framework. Remix is pretty cool, and they have good ideas but still too new and they have some stuff to work out with Middlewares. If your going to have a full stack application you need to support backend ideas as much as possible.
- Rust Axum | SolidJs (2022/2023)
  - This was a weird one; I tried doing the site as an API for all data. This is where my love for backend and frontend come together. I am very familiar with the SPA API REST pattern and I perfer to write the frontend in a JavaScript framework. The issue is blogs should probably never be sent over an API and all that HTML content should be served on the server side; load times on a blog SPA are just bad bad bad and it looks bad.
- Rust Axum | Askama/Preact/Webpack (2022)
  - Axum is a beautiful http server, built by the extremely smart people at Tokio. I started experimenting with more control over the JavaScript side of things with webpack. Started playing around with more custom frontend SPA stuff. This list of web stacks for my site only shows what I coded in for this specific site, but I have a whole other side of experience in React.
- Go Gin | Pongo2 (2022)
  - Gin was a little to 'big' for me. I am a fan of microframeworks and smaller and clean builds, its why I have never choosen to write in Django; I don't like the 'batteries included' approach to http.
- Go Echo | Pongo2 (2022)
  - Echo is a cool http server and its built on top of net/http which is awesome! But again my relationship with Go is not great, I struggle to want to write in Go.
- Go Fiber | Pongo2 (2022)
  - I spent a long time in the Fiber framework in Go. I learned I have a love/hate relationship with Go. Also Fiber is not built on net/http which hurts its support and stability in my book. Fiber was a good bridge coming from a Nodejs express background though.
- F# Giraffe (2022)
  - F# is an awesome language, just very niche and still relies on .Net. I just have a hard time finding a use case for F#. And not a fan of the file struct ordering for execution.
- C# Blazor/Razor (2022)
  - I want to love C# but don't enjoy the .Net framework and I am a bigger fan of functional/procedural coding styles over OOP.
- Nim Prologue | Karax (2021)
  - Nim is a super fun an amazing language but community support is almost non existent.
- Deno Oak | ETA (2021)
  - Well Deno was and is still too young. Not a lot of packages laying around to get you going.
- Node Koa | React (2021)
  - I was really interested in trying Deno and Koa has always not been as supported by the community.
- Node Express | EJS (2020)
  - I started everything here a couple years back. Express is where my love for coding pretty much began.
