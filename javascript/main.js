document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let nomer = parent.querySelector('.nomer').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML:'<i>Tidak ada informasi yang tersedia</i>';
        console.log(`deskripsi: ${deskripsi}`)



        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();


        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        const nohp = '6287864766667'
        let pesan = `https://api.whatsapp.com/send?phone=${nomer}&text=Halo kak, saya mau pesan produk ${judul}`;

        document.querySelector('.btnBeli').href = pesan;

    })

});
