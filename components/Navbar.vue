<template>
  <div class="nav">
    <div class="nav-logo">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1500 1500"
        version="1.1"
        style="
          fill-rule: evenodd;
          clip-rule: evenodd;
          stroke-linejoin: round;
          stroke-miterlimit: 2;
        "
      >
        <path
          id="shape_fill"
          d="M1500,750l-750,-750l-750,750l750,750l750,-750Z"
          style="fill: none"
        />
        <g>
          <g>
            <path
              class="nav-logo-inner"
              d="M1185.85,749.999l-435.926,-435.923l-298.059,298.059l167.329,-0l130.977,-130.978l268.811,268.842l-268.811,268.844l-130.977,-130.978l-167.329,0l298.059,298.059l435.926,-435.925Z"
            />
            <path
              class="nav-logo-outer"
              d="M590.109,802.2l0.001,-104.4l-369.145,0l529.084,-529.084l449.843,449.842l168.666,0l-618.558,-618.558l-750,750l750,750l618.558,-618.558l-168.666,-0l-449.843,449.842l-529.084,-529.084l369.144,-0Z"
            />
          </g>
        </g>
      </svg>
    </div>
    <NuxtLink class="nav-link" to="/">Blog</NuxtLink>
    <NuxtLink class="nav-link" to="/series">Series</NuxtLink>
    <NuxtLink class="nav-link" to="/rng">RNG</NuxtLink>
    <NuxtLink class="nav-link" to="/readme.md">Readme.md</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-logo {
  height: 50px;
  width: 50px;
  margin-right: 6px;

  .nav-logo-outer {
    fill: #00dc82;
  }

  .nav-logo-inner {
    fill: #fff;
  }
}

.nav-link {
  align-self: center;
  padding: 0px 6px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.03em;
  color: #fff;
  text-decoration: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  &:hover {
    color: #00dc82;
  }

  &.router-link-active {
    color: #00dc82;

    &:hover {
      color: #029658;
    }
  }
}
</style>
