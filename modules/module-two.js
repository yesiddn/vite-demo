const module = {
  name: "module two"
}

export function load() {
  console.log(`${module.name} loaded!`)
}

export default module