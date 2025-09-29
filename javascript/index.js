let artikel=[
    {
        judul:'judul_1',
        srcGambar: 'gambar/artikel1.png',
        textArtikel: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis, optio dolore sunt facilis esse. Exercitationem id voluptatibus recusandae facilis laudantium aspernatur non molestiae iusto fugiat quisquam, error cum sapiente, voluptates eaque perferendis officiis nisi voluptate accusamus quos nulla veritatis qui facere optio distinctio. Voluptate beatae, accusantium minus ratione dolore, repellendus sunt ad dicta inventore molestiae autem, quis expedita harum eveniet quod alias magni earum optio suscipit ipsam reprehenderit quae! Blanditiis placeat error ipsum alias nostrum magni quisquam iure explicabo illum animi corporis, eos commodi at culpa voluptate. Eum necessitatibus repellendus enim minus at quod, eaque adipisci ratione delectus vitae?</p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum at modi dolorum cumque soluta. Dignissimos, eligendi? Ex nemo tenetur magni consequatur, ut, soluta eius quibusdam eaque, voluptatem cumque culpa? Perferendis?</p>'
    },
    {
        judul: 'judul_2',
        srcGambar: 'gambar/artikel2.png',
        textArtikel: '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum at modi dolorum cumque soluta. Dignissimos, eligendi? Ex nemo tenetur magni consequatur, ut, soluta eius quibusdam eaque, voluptatem cumque culpa? Perferendis?</p>'
    },
    {
        judul: 'judul_3',
        srcGambar: 'gambar/artikel3.png',
        textArtikel: '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum at modi dolorum cumque soluta. Dignissimos, eligendi? Ex nemo tenetur magni consequatur, ut, soluta eius quibusdam eaque, voluptatem cumque culpa? Perferendis?</p>'
    }
]

function tambahBoxArtikel(){
    
    for(let i=0; i<artikel.length;i++){
        let main_main=document.querySelectorAll(".main-main");
        let boxArtikel = document.createElement("div");
        main_main[0].appendChild(boxArtikel).classList.add("boxArtikel");
    }

    for(let i=0; i<artikel.length; i++){
        let boxArtikel = document.querySelectorAll(".main-main .boxArtikel");
        let boxGambar = document.createElement("div");
        boxArtikel[i].appendChild(boxGambar).classList.add('boxGambar');
    }

    for(let i=0; i<artikel.length; i++){
        let boxGambar = document.querySelectorAll('.boxArtikel .boxGambar');
        let gambar = document.createElement('img');
        boxGambar[i].appendChild(gambar);
    }
    
    for(let i=0; i<artikel.length; i++){
        let boxArtikel = document.querySelectorAll(".main-main .boxArtikel");
        let a = document.createElement('a');
        boxArtikel[i].appendChild(a);
    }

    for(let i=0; i<artikel.length; i++){
        let a = document.querySelectorAll('.main-main .boxArtikel a');
        a[i].innerHTML=artikel[i].judul;
    }


    // ================<PENAMBAHAN ATRIBUTE>====================
    for(let i=0; i<artikel.length; i++){
        let img = document.querySelectorAll('.boxArtikel .boxGambar img');
        img[i].setAttribute('src', artikel[i].srcGambar);
    }

    for(let i=0; i<artikel.length; i++){
        let a = document.querySelectorAll('.boxArtikel a');
        a[i].setAttribute('href', '#')
    }
}

tambahBoxArtikel();
// let main_main=document.getElementsByClassName('main-main');


        let boxGambar = document.querySelectorAll('.boxArtikel .boxGambar');