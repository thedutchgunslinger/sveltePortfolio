
import scss from "rollup-plugin-scss";

export default {

  plugins: [

    svelte({
      // enable run-time checks when not in production
      dev: !production,
      emitCss: true
    }),
    scss(),
  ]};