import { defineConfig } from 'vite' // modulo que permite configurar vite

// https://es.vitejs.dev/config/
// para una configuracion basica, solo se necesita exportar un objeto con la configuracion
// export default {
//   server: {
//     port: 3000, // cambia el puerto
//     open: true, // abre el navegador automaticamente
//   }
// }

// para una configuracion mas avanzada, por ejemplo para autocomplete en ts, se puede usar la funcion defineConfig
export default defineConfig(() => {
  const port = 3000

  return {
    server: {
      port,
      open: true,
    },
  }
})