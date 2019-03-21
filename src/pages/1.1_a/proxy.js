const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true
}

export default function proxy(target, temp, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return temp[key]
  },

  sharedPropertyDefinition.set = function proxySetter(val) {
    temp[key] = val
    if(!window.isUpdatingChildComponent) {
      console.error(`can not modify ${key} direct`)
    }
    window.isUpdatingChildComponent = false
  },

  Object.defineProperty(target, key, sharedPropertyDefinition)
}
