# Create React App in the current directory
`$ npx create-react-app .`

# Persiapan Bootstrap
1. Download bootstrap-4.5.0-dist (tergantung versi berapa)
2. Copy kan folder bootstrap-4.5.0-dist ke dalam folder /public
3. Masuk ke folder /css di /bootstrap-4.5.0-dist
4. Masuk ke folder /js di /bootstrap-4.5.0-dist, Kita hanya akan menggunakan file bootstrap.bundle.min.js. Hapus file selain file tersebut

# Persiapan Bootstrap
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