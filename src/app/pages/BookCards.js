export default function BookCard() {
    return(
    <div className="BookCards">
      <div class="containerCard">
    {/* <div class="card">
      <div class="img-container">
        <img src="http://santoshg.com/codepen/iron_man.jpg" alt=""/>
      </div>
      <div class="card-details">
        <h2>Iron Man</h2>
        <p>Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. </p>
      </div>
    </div> */}
    <div class="card">
      <div class="img-container">
        <img src="http://santoshg.com/codepen/thor_card.jpg" alt=""/>
      </div>
      <div class="card-details">
        {/* <h2>Thor</h2>
        <p>In Germanic mythology, Thor (/θɔːr/; from Old Norse: Þórr) is a hammer-wielding god associated with thunder, lightning, storms, oak trees, strength, the protection of mankind and also hallowing and fertility. Besides Old Norse Þórr, extensions of the god occur in Old English as Þunor and in Old High German as Donar (runic þonar ᚦᛟᚾᚨᚱ).</p> */}
      </div>
    </div>
    <div class="card">
      <div class="img-container">
        <img src="http://santoshg.com/codepen/ant_man.png" alt=""/>
      </div>
      <div class="card-details">
        {/* <h2>Ant Man</h2>
        <p>Ant-Man is the name of several fictional superheroes appearing in books published by Marvel Comics. Created by Stan Lee, Larry Lieber and Jack Kirby, Ant-Man's first appearance was in Tales to Astonish #35 (September 1962).</p> */}
      </div>
    </div>
    <div class="card">
      <div class="img-container">
        <img src="http://santoshg.com/codepen/Dr_Strange.jpg" alt=""/>
      </div>
      <div class="card-details">
        {/* <h2>Dr. Strange</h2>
        <p>Doctor Stephen Strange is a fictional superhero appearing in American comic books published by Marvel Comics. Created by artist Steve Ditko and writer Stan Lee,[1] the character first appeared in Strange Tales #110 (cover-dated July 1963). Doctor Strange serves as the Sorcerer Supreme.</p> */}
      </div>
    </div>
    <div class="card">
      <div class="img-container">
        <img src="http://santoshg.com/codepen/captain_america.jpg" alt=""/>
      </div>
      <div class="card-details">
        {/* <h2>Captain America</h2>
        <p>Captain America is a fictional superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics.</p> */}
      </div>
    </div>
    {/* <div class="card">
      <div class="img-container">
        <img src="http://santoshg.com/codepen/black_widow.jpg" alt=""/>
      </div>
      <div class="card-details">
        <h2>black widow</h2>
        <p>Black Widow appears in a relaunched ongoing series by writer Nathan Edmondson and artist Phil Noto. The first issue debuted in January 2014. In October 2015, it was announced that Mark Waid and Chris Samnee would be launching a new Black Widow series for 2016 as part of Marvel's post-Secret Wars relaunch.</p>
      </div>
    </div> */}
    </div>
  </div>
    );
}

 // BookCard css

// .container{
//   width: 100%;
//   display:flex;
//   /* flex-wrap:wrap; */
//   justify-content:center;
//   flex-direction: row;
// }

// .card{
//   position:relative;
//   margin:20px 0;
//   width:80%;
//   height:20vh;
//   background: #fff;
//   transform-style:preserve-3d;
//   transform:perspective(2000px);
//   transition:1s;
//   box-shadow:inset 100px 0 50px rgba(0,0,0,0.5);
// }

// .card:hover{
//   z-index:1111;
//   transform:perspective(2000px) rotate(-10deg);
//   box-shadow:inset 20px 0 50px rgba(0,0,0,0.5);
// }

// .card .img-container{
//   position:relative;
//   width:100%;
//   height:100%;
//   border:1px solid #000;
//   box-sizing:border-box;
//   transform-origin:left;
//   z-index:1;
//   transition:1s;
// }

// .card .img-container img{
//   position:absolute;
//   left:0;
//   top:0;
//   height:100%;
//   width:100%;
//   object-fit:cover;
// }

// .card:hover .img-container{
//   transform:rotateY(-135deg);
// }

// .card .card-details{
//   position:absolute;
//   left:0;
//   top:0;
//   box-sizing:border-box;
//   padding:20px;
//   color:#000;
// }

//  .card .card-details h2{
//   margin:0;
//   padding:0.5em 0;
//   text-transform:uppercase;
//   font-size:2em;
//   color:#ed363a;
// }

// .card .card-details p{
//   margin:0;
//   padding:0;
//   line-height:25px;
//   font-size:1.1em;
// }