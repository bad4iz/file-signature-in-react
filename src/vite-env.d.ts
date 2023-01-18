/// <reference types="vite/client" />

function a(value: string): string
function a(value: number): number {
  return value
}
function a(value: []): [] {
  return value[0]
}

a(1)
a('1')
a([1])
