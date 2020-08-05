# What Inside the App
1. React
2. Bootstrap
3. Bootswatch
4. Font Awesome
5. API Zomato
6. Axios


# Create React App in the current directory
`$ npx create-react-app .`

# Persiapan Bootstrap
1. Download bootstrap-4.5.0-dist (tergantung versi berapa)
2. Copy kan folder bootstrap-4.5.0-dist ke dalam folder /public
3. Masuk ke folder /css di /bootstrap-4.5.0-dist
4. Masuk ke folder /js di /bootstrap-4.5.0-dist, Kita hanya akan menggunakan file bootstrap.bundle.min.js. Hapus file selain file tersebut

# Persiapan Bootswatch
1. Buka web bootswatch (https://bootswatch.com)
2. Pada halaman bootstwatch disediakan beberapa tema, silahkan pilih salah satu dengan cara klik salah satu tema tersebut. Pada contoh akan digunakan tema Flatly.
3. Kita akan diarahkan ke halaman tema Flatly. Di halamana tersebut sudah disediakan component - component yang dapat kita gunakan.
4. Untuk mendapatkan css dari bootswatch , klik dropdown nama tema pada navbar (klik flatly), kemudian klik bootstrap.min.css. Selanjutnya bootstrap.min.css akan terdownload otomatis.
5. Kembali ke folder proyek
6. Pindahkan file bootstrap.min.css yang sudah di download dari Bootswatch Flatly ke dalam folder css di public/bootstrap-4.3.1-dist/css
7. Sisipkan bootstrap.min.css dan bootstrap.bundle.min.js di public/index.html

# Tambahkan Font Awesome
1. Buka web font awesome 4.7
`https://fontawesome.com/v4.7.0/get-started/`
2. Klik download
3. Extract file hasil download, sehingga kita mendapatkan folder font-awesome-4.7.0
4. Pindahkan folder tersebut ke dalam folder public di proyek kita.
5. Sisipkan font-awesome-4.7.0 ke dalam file di public/index.html

# API Zomato
Untuk mendapatkan data2 seperti kota, gunakan api dari zomato
1. Buka [zomato documentation](https://developers.zomato.com/documentation)
2. Buka end point /cities
3. Parameter user-key di isi dengan API Key yang sudah kita generate. Jika lupa, kita dapat melihat nya pada bagian API Credentials
4. Parameter q di isi nama kota yang ingin kita cari. Kita akan coba dengan nama Jakarta
5. Klik try it out
6. Catat id kota tersebut.
7. Ulangi kembali langkah nomor 4 dan 5 dengan nama kota lain

# 02_Fungsional_Home_Page
Menghubungkan Fungsional di Home page
1. Install axios
`$ npm i --save axios`

# Menyimpan Key Pada File Env
Variabel baseUrl Zomato dan API Key Zomato sudah terpusat pada satu file yaitu api.js. Data-data credentials seperti api key, secret key, password dan data sensitif biasanya disimpan di file terpisah yaitu di file .env. File .env ini tidak ikut di push ke repository, sehingga secret key / api key tidak muncul di repository kita.

Untuk memakai file .env pada React, ikuti langkah-langkah berikut:
1. Buat sebuah file bernama .env pada folder proyek (root folder)
2. Tambahkan kode berikut pada file .env
`REACT_APP_API_KEY_ZOMATO=ISI_API_KEY_ANDA (key api tanpa tanda petik)`
3. INstall package dotenv
`npm i --save dotenv`

# Setting Router
Install react-router-dom
`$ npm i -S react-router-dom`

## Dummy Data for Categories
1. Buka dokumentasi Zomato API, klik end point /categories. End point /categories hanya memerlukan user-key pada header dan tidak memerlukan parameter lain.
2. Masukan API key Zomato Anda pada kolom user-key dan klik try it out.
3. Copy isi dari response body tersebut, ambil hanya array of object dari categories. Bisa mengambil hanya sebagian atau seluruhnya. Sebagai contoh, saya akan ambil 4 data categories saja. Data tersebut akan kita gunakan sebagai data dummy.
4. Buka file City.js, buat konstanta categoriesDummy

# Cara Ambil data Dari API Zomato untuk API Search
1. Masuk ke https://developers.zomato.com/documentation#!/restaurant/search
2. Masukan user-key, entity_id (74, adalah entity_id jakarta ), entity_type ubah ke city
3. Click Try It Out!
4. Liat file ResponseBodySearch.txt itu adalah hasil response setelah di click tombol Try It Out!

# Deploy to Firebase
1. Install firebase-tools
`$ npm i -g firebase-tools`
2. Login to girebase
`$ firebase login`
3. Masuk ke page console.firebase.google.com
4. Buat project app disitu
5. Masukan root directory ke project react di terminal
`$ firebase init`
- Are you ready to proceed? (Y/n) , jawab Y aja
- Pilih Hosting: Configure and deploy Firebase Hosting sites (cara pilih dengan arah panah, dan klik space untuk memilihnya)
- Pilih Use existing project
- Pilih nama project yang telah di buat di Firebase pada langkah 4 diatas
- What do you want to use as your public directory? (awalnya public ganti jadi build)
- Configure as a single-page app (rewrite all urls to /index.html)? (y/N) , jawab Y aja
6. Setup package.json untuk misalnya supaya tidak mengetikan dua kali  perintah saat akan deploy lagi