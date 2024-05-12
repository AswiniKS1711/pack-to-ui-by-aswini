import { defineConfig } from "rollup";
import typescript  from "@rollup/plugin-typescript";


// This is a rollup configuration file.
/* Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, 
such as a library or application.  */

export default defineConfig({

    /* This specifies the entry point for Rollup bundling. 
    Rollup will start bundling from the file located at src/index.ts. 
    This typically refers to the main TypeScript (or JavaScript) file of the project. */
    input : "src/index.ts",
    output : {

        /* This indicates the directory where the bundled files will be outputted. 
        In this case, the bundled files will be placed in the "dist" directory.*/
        dir : "dist",

        /*  This specifies the format of the bundled code. 
        Here, "es" stands for ECMAScript module format, which is compatible with modern JavaScript environments*/
        format : "es",

        name : "pack-to-ui-by-aswini",
    },

    external : ["react", "react-dom"],
    plugins : [typescript({tsconfig: "tsconfig.json"})],
});