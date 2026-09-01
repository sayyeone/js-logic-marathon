# rest API
cara bagi satu aplikasi untuk meminta atau mengirim data ke aplikasi/server lain melalui HTTP

# API ( Application Programming Interface)
sebuah "aturan/cara" agar satu software bisa berkomunikasi dengan software lainnya

# REST (Representational State Transfer)
gaya arsitektur untuk membuat API yg menggunakan prinsip-prinsip tertentu, terutama memanfaatkan HTTP

# HTTP (HyperText Transfer Protocol)
protokol/aturan komunikasi yang digunakan agar client dan server dapat saling  bertukar informasi melalui jaringan
```txt
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
permintaan yg dikirim oleh client kepada server untuk melakukan sesuatu tindakan atau mendapatkan suatu resource
- resource dapat berupa kode HTML

**macam - macam metode http**
### GET
mengambil data
- hanaya mengambil data/informasinya bukan mengubahnya

### POST
membuat data baru

### PUT
mengganti data **secara penuh**

### PATCH
mengubah sebagaian data
- misalnya:
```txt
User ID 10

Name: Budi
Age: 20
City: Bandung
```
kita ingin mengubah City -> Jakarta

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
POST /users HTTP/1.1
Content-Type: application/json => INI HEADER

{ => INI BODY
  "name": "Budi",
  "age": 20
}
```

## HTTP response
balasan yang dikirim oleeh server kepada client setelah server menerima dan memproses HTTP Request

### status code
1xx -> informational
2xx -> success
3xx -> redirction
4xx -> client err
5xx -> server err

- 200 OK = request berhasil
- 201 created = post berhasil membuat resource baru
- 400 bad request = client mengirim request yg tidak valid
- 404 not found = resource yg diminta tidak ditemukan
- 500 internal server error = server mengalami error saat memproses request

## HTTP Headers
informasi tambahan dalam HTTP request atau response untuk menjelaskan atau memberi instruksi tentang komunikasi tersebut

```txt
GET /products HTTP/1.1
Host: example.com => INI ADALAH HEADER
Accept: application/json => INI HEADER
```
- Header Content-Type
```txt
Content-Type: application/json
```
untuk memberitahu server format data di body

- Header Accept
sebagai client bisa/mau menerima data dalam format apa
```txt
Accept: application/json
```
- Header Authorization
membawa informasi autentikasi, misalnya token akses
```txt
GET /profile
Authorization: Bearer <token>
```

## HTTP Body
data utama yg dikirim oleh response
- biasanya method get tidak membutuhkan body
- metode post membutuhan body
