const module = {
  name: "module one"
}

export function load() {
  console.log(`${module.name} loaded!`)
}

export default module