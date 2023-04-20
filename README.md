# 3D-WebGL-Articulated-Model

> Disusun untuk memenuhi Tugas 3 IF3260 Grafika Komputer 3D WebGL Articulated Model

## Daftar Isi

- [Deskripsi Singkat](#deskripsi-singkat)
- [Struktur Program](#struktur-program)
- [Fitur Program](#fitur-program)

## Deskripsi Singkat

WebGL (Web Graphics Library) adalah API Javascript untuk melakukan rendering grafik 2D dan 3D pada web yang kompatibel tanpa perlu menggunakan plugin. Hal ini dicapai dengan memanfaatkan API yang mirip dengan OpenGL ES 2.0 yang dapat digunakan dalam elemen canvas pada HTML. Hampir seluruh browser modern memiliki support untuk WebGL.<br>
Pada Tugas 3 IF3260 Grafika Komputer 3D WebGL Articulated Model ini kelompok kami telah membuat sebuah program 3D menggunakan WebGL murni, tanpa library/framework tambahan yang mampu menampilkan model Articulated Object yang dapat dimanipulasi antara objeknya ataupun posisi kamera. Terdapat empat jenis model articulated object beserta animasinya yang didefinisikan oleh masing-masing anggota. Semua definisi model disimpan dalam sebuah file.<br>
Program ini memiliki beberapa fitur, yaitu: mengubah jenis proyeksi untuk tampilan semua objek, melakukan transformasi pada objek, mengubah jarak (radius) kamera mendekat atau menjauhi model serta mengitari model, reset view ke default view, menampilkan shading pada model, mengubah jenis tekstur model, memutar animasi milik objek, menampilkan salah satu komponen pembangun objek, dan melakukan transformasi terhadap salah satu komponen tersebut.<br>

## Struktur Program

```
.
├── LICENSE
├── README.md
├── nodemon.json
├── package.json
├── public
│   ├── dist
│   │   └── index.js
│   ├── images
│   │   ├── bumped.png
│   │   ├── logo.svg
│   │   ├── neg-x.jpg
│   │   ├── neg-y.jpg
│   │   ├── neg-z.jpg
│   │   ├── pos-x.jpg
│   │   ├── pos-y.jpg
│   │   ├── pos-z.jpg
│   │   └── wood.png
│   ├── index.html
│   └── styles
│       └── index.css
├── shapes
│   ├── godzilla-kawaii.json
│   ├── hormanoid.json
│   ├── humanoid-running-with-boots-and-biceps.json
│   └── humanoid-running.json
├── src
│   ├── Constants
│   │   └── closest-to-zero.ts
│   ├── Factories
│   │   ├── animation-factory.ts
│   │   ├── articulated-factory.ts
│   │   ├── draw-factory.ts
│   │   ├── face-factory.ts
│   │   ├── lambda-factory.ts
│   │   ├── node-factory.ts
│   │   ├── point-factory.ts
│   │   ├── shape-factory.ts
│   │   ├── texture-factory.ts
│   │   └── vector-factory.ts
│   ├── Files
│   │   ├── file-handling.ts
│   │   └── file-system.ts
│   ├── Interfaces
│   │   ├── animation-interface.ts
│   │   ├── articulated-interface.ts
│   │   ├── camera-interface.ts
│   │   ├── color-interface.ts
│   │   ├── coordinate-interface.ts
│   │   ├── draw-interface.ts
│   │   ├── face-interface.ts
│   │   ├── lambda-interface.ts
│   │   ├── light-interface.ts
│   │   ├── matrix-interface.ts
│   │   ├── node-interface.ts
│   │   ├── point-interface.ts
│   │   ├── shape-interface.ts
│   │   ├── texture-interface.ts
│   │   └── vector-interface.ts
│   ├── Objects
│   │   ├── animation.ts
│   │   ├── articulated.ts
│   │   ├── camera.ts
│   │   ├── color.ts
│   │   ├── coordinate.ts
│   │   ├── draw.ts
│   │   ├── face.ts
│   │   ├── lambda.ts
│   │   ├── light.ts
│   │   ├── matrix.ts
│   │   ├── node.ts
│   │   ├── point.ts
│   │   ├── shape.ts
│   │   ├── texture.ts
│   │   └── vector.ts
│   ├── Operations
│   │   ├── projection.ts
│   │   └── transformation.ts
│   ├── Types
│   │   ├── animation-type.ts
│   │   ├── environment-face.ts
│   │   ├── environment-info.ts
│   │   ├── mapping-mode.ts
│   │   ├── program-buffer.ts
│   │   ├── program-info.ts
│   │   ├── program-param.ts
│   │   ├── projection-params.ts
│   │   ├── projection-type.ts
│   │   └── shader-status.ts
│   ├── Utils
│   │   ├── angle.ts
│   │   ├── power.ts
│   │   ├── program.ts
│   │   ├── renderer.ts
│   │   ├── resize-canvas.ts
│   │   └── shader.ts
│   ├── default-ambient-color.ts
│   ├── default-array-of-face.ts
│   ├── default-articulated.ts
│   ├── default-camera.ts
│   ├── default-directional-light.ts
│   └── index.ts
├── tsconfig.json
├── webpack.config.js
└── yarn.lock
```

## Fitur Program

1. Pemodelan Articulated Object
2. Penyimpanan dan Pengunggahan Model Articulated Object dengan Format `.json`
3. Penerapan Teknik Transformasi Geometri (Translasi, Rotasi, Skala)
4. Penerapan Teknik Proyeksi _Orthographic_, _Perspective_, dan _Oblique_
5. Penerapan Teknik Transformasi Kamera (Translasi dan Rotasi)
6. Penerapan Teknik Pencahayaan (Ambient dan Directional)
7. Penerapan Teknik Texturing (Mapping Mode, Environment Mapping, dan Bump Mapping)
8. Penerapan Teknik Animasi Articulated Object

## Cara Penggunaan

1. Lakukan `git clone` terhadap repository ini
2. Jalankan perintah `yarn install` pada terminal untuk menginstalasi _library_ pendukung bahasa TypeScript

## Cara Menjalankan Program

1. Jalankan perintah `yarn nodemon` untuk menjalankan kompilasi secara _hot reload_
2. Buka browser dan akses `localhost` untuk melihat hasil kompilasi
3. Dapat juga diakses menggunakan pranala berikut ini
