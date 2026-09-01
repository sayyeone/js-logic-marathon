# rest API
cara bagi satu aplikasi untuk meminta atau mengirim data ke aplikasi/server lain melalui HTTP

# API ( Application Programming Interface)
sebuah "aturan/cara" agar satu software bisa berkomunikasi dengan software lainnya

# REST (Representational State Transfer)
gaya arsitektur untuk membuat API yg menggunakan prinsip-prinsip tertentu, terutama memanfaatkan HTTP

# HTTP (HyperText Transfer Protocol)
protokol/aturan komunikasi yang digunakan agar client dan server dapat saling  bertukar informasi melalui jaringan
```js
Client                         Server
  │                              │
  │ ─────── HTTP Request ──────> │
  │                              │
  │ <────── HTTP Response ────── │
  │                              │
```
- client = pihak yg meminta sesuatu (aplikasi react, browser, postman)
- server = pihak yg menerima request dan memberikan response

*cara HTTP bekerja*
REQUEST → SERVER → RESPONSE

### HTTP request
- request merupakan permintaan dari client kepada server

contoh:
GET /products HTTP/1.1

### HTTP response
contoh:
HTTP/1.1 200 OK

## HTTP request
permintaan yg dikirim oleh client kepada server untuk melakukan sesuatu tindakan atau mendapatkan suatu resourcr
- resource dapat berupa kode HTML

**macam - macam metode http**
### GET
mengambil data

### POST
membuat data

### PUT
mengganti data
### PATCH
mengubah sebagaian data

### DELETE
menghapus data

## URL/Endpoint
misalnya:
```txt
GET /products/10
```
/products/10 menunjukkan resource yang ingin dituju
*contoh request secara lengkap*
```txt
```