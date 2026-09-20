# DOM Methods yang Sering Dipakai di Interface

Referensi cepat method-method DOM yang paling sering muncul saat bikin UI interaktif (form, modal, list dinamis, dsb).

---

## 1. Selection (Ambil Elemen)

| Method | Kegunaan | Return |
|---|---|---|
| `document.getElementById('id')` | Ambil 1 elemen berdasarkan id | Element atau `null` |
| `document.querySelector('.class')` | Ambil elemen pertama yang cocok selector CSS | Element atau `null` |
| `document.querySelectorAll('.class')` | Ambil semua elemen yang cocok | NodeList (static) |
| `document.getElementsByClassName('x')` | Ambil semua elemen dengan class tertentu | HTMLCollection (live) |
| `document.getElementsByTagName('div')` | Ambil semua elemen dengan tag tertentu | HTMLCollection (live) |

```js
const btn = document.querySelector('#submit-btn');
const items = document.querySelectorAll('.list-item'); // bisa di-loop pakai forEach
```

> **Tips:** `querySelector`/`querySelectorAll` paling fleksibel karena mendukung selector CSS apa saja (`.class`, `#id`, `[attr]`, `div > span`, dst). NodeList dari `querySelectorAll` itu *static* (snapshot), beda dengan HTMLCollection yang *live* (otomatis update kalau DOM berubah).

---

## 2. Membuat & Menyisipkan Elemen

| Method | Kegunaan |
|---|---|
| `document.createElement('div')` | Bikin elemen baru (belum masuk DOM) |
| `parent.appendChild(node)` | Tambah elemen jadi anak terakhir |
| `parent.append(node1, node2, 'text')` | Sama seperti appendChild, tapi bisa multi-node & string |
| `parent.prepend(node)` | Tambah elemen jadi anak pertama |
| `parent.insertBefore(newNode, refNode)` | Sisip sebelum node tertentu |
| `element.insertAdjacentHTML(pos, html)` | Sisip HTML string langsung ke posisi tertentu |
| `element.cloneNode(true)` | Duplikat elemen (true = beserta children) |

```js
const card = document.createElement('div');
card.className = 'card';
card.textContent = 'Halo!';
document.body.appendChild(card);

// insertAdjacentHTML posisi: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'
list.insertAdjacentHTML('beforeend', '<li>Item baru</li>');
```

---

## 3. Menghapus & Mengganti Elemen

| Method | Kegunaan |
|---|---|
| `element.remove()` | Hapus elemen itu sendiri |
| `parent.removeChild(child)` | Hapus anak tertentu (cara lama) |
| `parent.replaceChild(newNode, oldNode)` | Ganti satu elemen dengan elemen lain |
| `element.replaceWith(newNode)` | Cara modern untuk ganti elemen |

```js
document.querySelector('.toast')?.remove();
```

---

## 4. Atribut & Properti

| Method | Kegunaan |
|---|---|
| `element.getAttribute('href')` | Ambil nilai atribut |
| `element.setAttribute('href', '#')` | Set nilai atribut |
| `element.removeAttribute('disabled')` | Hapus atribut |
| `element.hasAttribute('checked')` | Cek apakah atribut ada |
| `element.dataset.userId` | Akses atribut `data-*` (misal `data-user-id`) |

```js
btn.setAttribute('aria-expanded', 'true');
const id = card.dataset.userId; // dari data-user-id="123"
```

---

## 5. Class & Style

| Method | Kegunaan |
|---|---|
| `element.classList.add('active')` | Tambah class |
| `element.classList.remove('active')` | Hapus class |
| `element.classList.toggle('active')` | Toggle class (sering dipakai untuk show/hide) |
| `element.classList.contains('active')` | Cek apakah class ada |
| `element.style.color = 'red'` | Set inline style langsung |

```js
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open'); // pola paling umum untuk toggle menu
});
```

---

## 6. Konten Elemen

| Method/Property | Kegunaan |
|---|---|
| `element.textContent` | Ambil/set teks polos (aman dari XSS) |
| `element.innerText` | Mirip textContent, tapi memperhitungkan CSS (lebih lambat) |
| `element.innerHTML` | Ambil/set konten sebagai HTML (hati-hati XSS kalau dari input user) |
| `element.value` | Ambil/set nilai input, textarea, select |

```js
title.textContent = 'Judul Baru'; // pilihan default & lebih aman
input.value = ''; // reset form field
```

> **Tips keamanan:** hindari `innerHTML` untuk data dari user langsung tanpa sanitasi, karena rawan XSS.

---

## 7. Traversal (Navigasi Antar Node)

| Property | Kegunaan |
|---|---|
| `element.parentElement` | Elemen induk |
| `element.children` | Semua elemen anak (HTMLCollection) |
| `element.firstElementChild` / `lastElementChild` | Anak pertama/terakhir |
| `element.nextElementSibling` / `previousElementSibling` | Elemen tetangga |
| `element.closest('.card')` | Cari ancestor terdekat yang cocok selector |

```js
btn.addEventListener('click', (e) => {
  const card = e.target.closest('.card'); // berguna saat event delegation
  card.remove();
});
```

---

## 8. Event Handling

| Method | Kegunaan |
|---|---|
| `element.addEventListener('click', fn)` | Pasang event listener |
| `element.removeEventListener('click', fn)` | Lepas event listener |
| `event.preventDefault()` | Cegah aksi default (misal submit form) |
| `event.stopPropagation()` | Stop event menyebar ke parent (bubbling) |
| `event.target` | Elemen asli yang memicu event |
| `event.currentTarget` | Elemen tempat listener dipasang |

```js
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // proses form tanpa reload halaman
});

// Event delegation: 1 listener untuk banyak elemen anak (efisien untuk list panjang)
list.addEventListener('click', (e) => {
  if (e.target.matches('.delete-btn')) {
    e.target.closest('li').remove();
  }
});
```

---

## 9. Ukuran, Posisi & Scroll

| Method/Property | Kegunaan |
|---|---|
| `element.getBoundingClientRect()` | Ukuran & posisi elemen relatif viewport |
| `element.offsetWidth` / `offsetHeight` | Lebar/tinggi termasuk border |
| `element.scrollIntoView({ behavior: 'smooth' })` | Scroll otomatis ke elemen |
| `window.scrollTo(x, y)` | Scroll halaman ke posisi tertentu |

```js
document.querySelector('#section2').scrollIntoView({ behavior: 'smooth' });
```

---

## 10. Query Kondisi/Match

| Method | Kegunaan |
|---|---|
| `element.matches('.active')` | Cek apakah elemen cocok selector tertentu |
| `element.contains(otherElement)` | Cek apakah elemen adalah ancestor dari elemen lain |

```js
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open'); // klik di luar dropdown → tutup
  }
});
```

---

## Pola Umum yang Sering Dikombinasikan

**Toggle dropdown/modal:**
```js
toggleBtn.addEventListener('click', () => modal.classList.toggle('show'));
```

**Render list dari data (tanpa innerHTML mentah):**
```js
data.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item.name;
  list.appendChild(li);
});
```

**Event delegation untuk list dinamis:**
```js
list.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item');
  if (item) handleClick(item);
});
```

---

## Ringkasan Prioritas Belajar

1. `querySelector` / `querySelectorAll` — selection
2. `addEventListener` + event delegation — interaktivitas
3. `classList` — toggle UI state (show/hide, active, dsb)
4. `createElement` + `append` — render dinamis
5. `closest` + `dataset` — kerja dengan data di elemen saat event delegation