import { defineConfig, loadEnv } from 'vite' // modulo que permite configurar vite | loadEnv -> permite cargar variables de entorno
import { resolve } from 'node:path' // modulo de node.js que permite resolver rutas

// https://es.vitejs.dev/config/
// para una configuracion basica, solo se necesita exportar un objeto con la configuracion
// export default {
//   server: {
//     port: 3000, // cambia el puerto
//     open: true, // abre el navegador automaticamente
//   }
// }

// para una configuracion mas avanzada, por ejemplo para autocomplete en ts, se puede usar la funcion defineConfig
export default defineConfig(({ command, mode }) => { // command -> serve o build | mode -> development o production
  const port = 3000

  console.log(command, mode)

  // el mode es para identificar el archivo .env.development o .env.production
  const env = loadEnv(mode, process.cwd()) // modo de ejecucion y directorio de trabajo
  console.log(env)

  if (mode === 'development') {
    return {
      server: {
        port,
        open: true,
      },
    }
  } else {
    return {
      base: '/my-app/',
      build: {
        // outDir: 'dist',
        // multi-page app
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            help: resolve(__dirname, 'help', 'index.html'),
          }
        }
      },
    }
  }
})