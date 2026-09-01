# JSON
Javascript object notation
- format data berbentuk teks/string

ini merupakan object dalam javascript
```js
const student = {
    name: "Dist",
    age: 20,
    skills: ["JavaScript", "HTML"]
}
```
## membuat json
diubah menjadi json yg merupakan string
```js
const studentJSON = `{
    "name": "Dist",
    "age": 20,
    "skills": ["JavaScript", "HTML"]
}`
```
- bisa membuat 2 data JSON dengan menggunakan array
```JSON
[
  {
    "name": "Budi",
    "age": 20
  },
  {
    "name": "Andi",
    "age": 21
  }
]
```
arraynya menampun 2 object sekaligus

## json parse
mengubah json menjadi javascript object
```js
const jsonText = `{
    "name": "Dist",
    "age": 20
}`

const student = JSON.parse(jsonText) // mengubah string -> object
```

## reviver
memproses data saat parse()
- function yg dijalankan untuk memproses nilai saat JSON sedang diubah menjadi object
- parse bisa menerima 2 parameter, parameter kedua yaitu reviever
```js
JSON.parse(json, reviever)
```
*contoh*
```js
const student = JSON.parse(jsonText, (key, value) => {
    if (typeof value === "string") {
        return value.toUpperCase()
    }
    return value
})
```
hasilnya: 
```txt
{
    name: "DIST",
    city: "CIREBON"
}
```
- **(key, value)** = js memberikan pasangan key value kepada reviver ketika memproses data

## json stringify
mengubah object menjadi JSON
```js
const student = {
    name: "dist",
    age: 20,
    skills: ["js", "html"]
}

// MENGUBAH MENAJDI JSON
const json = JSON.stringifiy(student)
```
### dengan parameter tertentu
```js
JSON.stringifiy(obj, replacer, space)
```
- object = data yg mau diubah
- replacer = untuk memfilter key tertentu
- space = parameter untuk indentasi agar mudah dibaca
