import $ from 'jquery';
let stContent2 = `

<style>
  #tapeCounter{
    max-width: 1350px;
    margin: auto;
    width: 100%;
  }
  .tape-show-columns{
    display: none;
  
    text-align: right;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #000000;
  }
  .tape-container {
    border-radius: 10px;

    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    text-align: center;
  }
  .tape-main-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    text-transform: uppercase;
    color: #ffffff;
    border-top: 1px solid #C4C4C4;
    border-bottom: 1px solid #C4C4C4;
    border-right: 1px solid #C4C4C4;
    border-left: 1px solid #C4C4C4;
    display : flex;
    align-items : center;
    justify-content : right;
    padding-right: 30px;   
  }
  .tape-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    color: #000000;
    border-bottom: 1px solid #C4C4C4;
    border-right: 1px solid #C4C4C4;
    border-left: 1px solid #C4C4C4;
    display: flex;
    align-items: center;
    justify-content: right;   
    padding-right: 30px;
  }


  .tape-subtitle {
    display : flex;
    align-items : center;
    justify-content : center;   
  
    border-top: 1px solid #C4C4C4;
    border-bottom: 1px solid #C4C4C4;
    border-right: 1px solid #C4C4C4;
    height: 175px;
    position: relative;
  }
  .tape-subtitle-text{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    color: #000000;
 
  }
  .tape-text {
    font-family: 'Poppins';
    font-style: normal;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding-right: 5px;
    color: #000000;
    border-right: 1px solid #C4C4C4;
    padding-left: 20px;
    border-bottom: 1px solid #C4C4C4;
    display: flex;
    align-items: center;
    justify-content: left;
    /* height: 240px !important; */
  }
  @media(max-width: 1400px){
    .tape-text{
      height: 280px !important; 
    }
    .tape-mobile-title2 {
      height: 280px !important;
    }
    
  }
  .tape-box{
    border-right: 1px solid #C4C4C4;
    height: 60px;
    display : flex;
    align-items : center;
    justify-content : center;
    border-bottom: 1px solid #C4C4C4;

  }
  .tape-question {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    display : flex;
    align-items : center;
    justify-content : center;
    color: #000000;
    border-right: 1px solid #C4C4C4;
    height: 60px;
    border-bottom: 1px solid #C4C4C4;

  }
  .tape-empty{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    display : flex;
    align-items : center;
    justify-content : center;
    color: #000000;
    border-right: 1px solid #C4C4C4;
    height: 60px;
    border-bottom: 1px solid #C4C4C4;
  }
  .tape-double{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    padding-left: 5px;
    padding-right: 5px;
  }
  .tape-button{
    position: absolute;
    top: 5px;
    right: 5px;
  }
  .tape-header{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    line-height: 36px;
    text-align: left;
    color: #000000;
    padding-top: 4vh;
    padding-bottom: 3vh;
  }
  .tape-footer{
    height: 6vh;
  }
  .tape-feature-container{
    display: grid;
    margin: auto;
    max-width: 1350px;
    height: 26px;
  }

  .tape-show-break{
    display: none;
  }
  .tape-hide-break{
    display: block;
  }

  @media(max-width: 420px){
    .tape-new-line{
      display: block !important; 
    }
    .tape-show-break{
      display: block;
    }
    .tape-hide-break{
      display: none;
    }
    
  }
 
  
  @media(max-width: 1210px){
    .tape-mobile-container{
      display: block !important;
    }
    .tape-container{
      display: none !important;
    }
    #tapeShowColumnsContainer{
      display: none !important;
    }
    .tape-header{
    }
    .tape-footer{
      display: none !important;
    }
  }
  .tape-mobile-container{
    display: none;
    max-width: 500px;
    margin: auto;
  }
  @media(max-width: 500px){
    .tape-mobile-container{
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  .tape-mobile-header{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    text-align: center;
    padding-top: 2vh;
    padding-bottom: 2vh;
  }
  .tape-mobile-body{
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 3vw;
    margin-right: 3vw;
    margin: auto;
  }
  .tape-mobile-footer{
    height: 33px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .tape-mobile-content{
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: left;   
    border: 1px solid #C4C4C4;
  }
  .tape-mobile-pad{
    height: 20px;
  }
  .tape-mobile-subtitle{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: left;  
  }
  @media(max-width: 330px){
    .tape-mobile-subtitle{
      font-size: 11px;
    }
  }
  .tape-mobile-box{
    height: 34px;
    width: 34px;
    text-align: center;
    color: white;
    font-weight: 400;
    font-size: 30px;
    line-height: 25px;
    margin: auto;
  }
  .tape-mobile-split{
    display: grid;
    grid-template-columns: 13fr 2fr;
    margin: auto;
    width: 100%;
  }
  .tape-mobile-hidden{
    display: none;
    grid-template-columns: 2fr 1fr 1fr;
    margin: auto;
    width: 100%;
    border-bottom: 1px solid #C4C4C4;
  }
  .tape-mobile-title{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 45px;
    height: 45px;
    text-align: center;
    border-bottom: 1px solid #C4C4C4;
    text-transform: uppercase;
  }
  .tape-mobile-text{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    padding-left: 2px;
    padding-right: 2px;
    text-align: center;
  }
  .tape-mobile-question{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    height: 135px;
    text-align: center;
  }
  .tape-mobile-check{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 135px;
  }
  .tape-mobile-split-2{
    display: grid;  
  }
</style>

<div id="tapeContainer" class="tape-container">
  <div id="columnOne">
    <div class="tape-main-title" style="height: 175px;"></div>
    <div class="tape-title" style="height: 60px;">Poly</div>
    <div class="tape-title" style="background: none; height: 60px;">Lace</div>
    <div class="tape-title  tape-mobile-title2" style="background: none; height: 245px;"><span style="height: 230px">Description</span></div>

  </div>
  <div id="columnTwo">
    <div class="tape-subtitle">
      <div class="tape-subtitle-text">
          <img style="width: 100px;" src="/content/images/marketing/tape/monthly1.jpg">
        <div>3M/1522<br/>(Rolls & Strips)</div>
      </div>   
      <button id="TB1" class="tape-button" onclick="hideColumn(b)"><img src="/content/images/marketing/tape/close.png"></button>
    </div>
    <div class="tape-box"><img src="/content/images/marketing/tape/checkmark.png"></div>
    <div class="tape-box"><img src="/content/images/marketing/tape/checkmark.png"></div>
    <div class="tape-text" style="height: 245px">
      <ul style="text-align: left; margin-bottom: 0; margin-left: 10px; height: 230px;">
      <li>Lasts: 3-5 weeks</li>
      <li>Clear</li>
      <li>A favorite with many lace front users</li>
      </ul>
    </div>



  
  </div>
  <div id="columnThree">
    <div class="tape-subtitle">
      <div class="tape-subtitle-text">
        <div class="tape-double">
            <img style="width: 100px;" src="/content/images/marketing/tape/monthly2.jpg">
            <img style="width: 100px;" src="/content/images/marketing/tape/monthly3.jpg">
          </div>
        <div>Vapon Topstick<br/> Pre-cut</div>
      </div>     
      <button id="TB2" class="tape-button" onclick="hideColumn(c)"><img src="/content/images/marketing/tape/close.png"></button>
    </div>
    <div class="tape-box"><img src="/content/images/marketing/tape/checkmark.png"></div>
    <div class="tape-box"><img src="/content/images/marketing/tape/checkmark.png"></div>
    <div class="tape-text" style="height: 245px">
      <ul style="text-align: left; margin-bottom: 0; margin-left: 10px; height: 230px;">
        <li>Lasts: 3-4 weeks</li>
        <li>Clear</li>
        <li>Less residue, Easy clean</li>
        <li>Strong hold</li>
      </ul>
    </div>
 


  </div>
  <div id="columnFour">
    <div class="tape-subtitle">
      <div class="tape-subtitle-text">
        <div class="tape-double">
          <img style="width: 100px;" src="/content/images/marketing/tape/monthly4.jpg">
          <img style="width: 100px;" src="/content/images/marketing/tape/monthly5.jpg">
        </div>
        <div>Davlyn #52 <br/>(Rolls & Strips)</div>
      </div>
      <button id="TB3" class="tape-button" onclick="hideColumn(d)"><img src="/content/images/marketing/tape/close.png"></button>
    </div>
    <div class="tape-box"><img src="/content/images/marketing/tape/checkmark.png"></div>
    <div class="tape-box"><img src="/content/images/marketing/tape/checkmark.png"></div>
    <div class="tape-text" style="height: 245px">
      <ul style="text-align: left; margin-bottom: 0; margin-left: 10px; height: 230px;">
        <li>Lasts: 3-4 weeks</li>
        <li>Clear</li>
        <li>Current leader in wig tapes</li>
        <li>Extreme hold-super tacky, flexible</li>
      </ul>
    </div>



  </div>
  <div id="columnFive">
    
    <div class="tape-subtitle">
      <div class="tape-subtitle-text">
          <img style="width: 100px;" src="/content/images/marketing/tape/monthly6.jpg">
        <div>Red liner/super red <br/>(Rolls & Strips)</div>
      </div>
      <button id="TB4" class="tape-button" onclick="hideColumn(e)"><img src="/content/images/marketing/tape/close.png"></button>

    </div>
    <div class="tape-box"><img src="/content/images/marketing/tape/checkmark.png"></div>
    <div class="tape-box"><img src="/content/images/marketing/tape/checkmark.png"></div>
    <div class="tape-text" style="height: 245px">
      <ul style="text-align: left; margin-bottom: 0; margin-left: 10px; height: 230px;">
        <li>Lasts: 3-4 weeks</li>
        <li>Maximum hold, thin</li>
        <li>Tape in glue form</li>
        <li>Gooey, recommend for professionals only</li>
      </ul>
    </div>



  </div>
  <div id="columnSix">
    <div class="tape-subtitle">
      <div class="tape-subtitle-text">
        <img style="width: 100px;" src="/content/images/marketing/tape/monthly7.jpg">
        <div>Davlyn Red Liner</div>
      </div>   
      <button id="TB5" class="tape-button" onclick="hideColumn(f)"><img src="/content/images/marketing/tape/close.png"></button>

    </div>
    <div class="tape-box"><img src="/content/images/marketing/tape/checkmark.png"></div>
    <div class="tape-box"><img src="/content/images/marketing/tape/checkmark.png"></div>
    <div class="tape-text" style="height: 245px">
      <ul style="text-align: left; margin-bottom: 0; margin-left: 10px; height: 230px;">
        <li>Lasts: 4+ weeks</li>
        <li>Low shine</li>
        <li>Medical grade</li>
     
      </ul>
    </div>



  </div>
  <div id="columnSeven" >
    <div class="tape-subtitle" style="border-right: 1px solid #C4C4C4;">
      <div class="tape-subtitle-text">
        <div class="tape-double">
            <img style="width: 100px;" src="/content/images/marketing/tape/monthly8.jpg">
            <img style="width: 100px;" src="/content/images/marketing/tape/monthly9.jpg" >
          </div>
        <div>Sunshine to base<br/>(Strips Only)</div>
      </div>  
      <button id="TB6" class="tape-button" onclick="hideColumn(g)"><img src="/content/images/marketing/tape/close.png"></button>
    </div>
    <div class="tape-box" style="border-right: 1px solid #C4C4C4;"><img src="/content/images/marketing/tape/checkmark.png"></div>
    <div class="tape-box" style="border-right: 1px solid #C4C4C4;"><img src="/content/images/marketing/tape/checkmark.png"></div>
    <div class="tape-text"style="height: 245px"  style="border-right: 1px solid #C4C4C4;">
      <ul style="text-align: left; margin-bottom: 0; margin-left: 10px; height: 230px;">
        <li>Lasts: 4-5 weeks</li>
        <li>Solid surface for Greater Strength</li>
    
      </ul>
    </div>
  </div>
</div>
    <script>
      var b = "columnTwo";
var c = "columnThree";
var d = "columnFour";
var e = "columnFive";
var f = "columnSix";
var g = "columnSeven";
counter = 0;
function hideColumn(n){
    document.getElementById(n).style.display = "none";
    document.getElementById("tapeShowColumns").style.display = "block";
    counter += 1;
    var total = 6 - counter;
    if(counter == 1){
      document.getElementById("tapeContainer").style.gridTemplateColumns="5fr 6fr 6fr 6fr 6fr 6fr ";
    }
    else if(counter == 2){
      document.getElementById("tapeContainer").style.gridTemplateColumns="2fr 3fr 3fr 3fr 3fr";
    }
    else if(counter == 3){
      document.getElementById("tapeContainer").style.gridTemplateColumns="1fr 2fr 2fr 2fr";

    } 
    else if(counter == 4){
      document.getElementById("tapeContainer").style.gridTemplateColumns="1fr 3fr 3fr";
      var elements = document.getElementsByClassName('tape-button');
      for(var i=0; i<elements.length; i++) { 
        elements[i].style.display='none';
      }
    } 
   
}

function showColumns(){

  document.getElementById("tapeShowColumns").style.display="none";
  document.getElementById("tapeContainer").style.gridTemplateColumns="10fr 10fr 10fr 10fr 10fr 10fr 10fr ";
  document.getElementById("columnTwo").style.display = "grid";
  document.getElementById("columnThree").style.display = "grid";
  document.getElementById("columnFour").style.display = "grid";
  document.getElementById("columnFive").style.display = "grid";
  document.getElementById("columnSix").style.display = "grid";
  document.getElementById("columnSeven").style.display = "grid";
  counter = 0;
  var elements = document.getElementsByClassName('tape-button');
    for(var i=0; i<elements.length; i++) { 
      elements[i].style.display='block';
    }
}


  function revealButton(a,b,c,d){
      document.getElementById(a).style.display="grid";
      document.getElementById(b).style.display="none";
      document.getElementById(c).style.display="grid";

  }
  function hideButton(a,b,c,d){

      document.getElementById(a).style.display="none";
      document.getElementById(b).style.display="grid";
      document.getElementById(c).style.display="none";

  }
<\/script>
<div class='tape-mobile-container'>
<div class="tape-mobile-top"id="tape-target"></div>
  <div class="tape-mobile-bottom"id="tape-target-2"></div>

  <div class="tape-mobile-body">

    <div id="itemOne">
      <div  class="tape-mobile-content">
          <div class="tape-mobile-split">
            <div class="tape-mobile-split-2" style="grid-template-columns: 1fr 17fr 20fr">
              <div class="tape-mobile-subtitle" style="margin-left: 2vw;"><li></li></div>
              <div class="tape-mobile-subtitle">3M/1522<br /> (Rolls & Strips)</div>
              <div style="display: flex;
              justify-content: flex-end;
              align-items: center;"><img class="tape-mobile-img" style="max-width: 58px; max-height: 58px;" src="/content/images/marketing/tape/monthly1.jpg"></div>
            </div>
            <button id="buttonOne" class="tape-mobile-box" style="padding: 0" onclick="revealButton(c1,b1,br1,i1)"><img src="/content/images/marketing/tape/plus.png"></button>
            <button id="buttonOneReveal" class="tape-mobile-box" style="padding: 0;display: none" onclick="hideButton(c1,b1,br1,i1)"><img src="/content/images/marketing/tape/minus.png"></button>

          </div>
      </div>
      <div id="contentOne" class="tape-mobile-hidden">
        <div style="border-left: 1px solid #C4C4C4; border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Description</div>
          <div class="tape-mobile-text">Last: 3-5 weeks<br/><br/>Clear<br/><br/>A favorite with many lace front users</div>
        </div>

        <div style="border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Poly</div>
          <div class="tape-mobile-check"><img src="/content/images/marketing/tape/checkmark.png"></div>
        </div>

        <div style="border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Lace</div>
          <div class="tape-mobile-question"><img src="/content/images/marketing/tape/checkmark.png"></div>
        </div>


      </div>
      <div class="tape-mobile-pad"></div>
    </div>

    <div id="itemTwo">
      <div class="tape-mobile-content">
        <div class="tape-mobile-split">
          <div class="tape-mobile-split-2" style="grid-template-columns: 1fr 8fr 20fr">
            <div class="tape-mobile-subtitle" style="margin-left: 2vw;"><li></li></div>
            <div class="tape-mobile-subtitle">Vapon Topstick Pre-cut</div>
            <div style="    display: flex;
            justify-content: flex-end;
            align-items: center;"><img class="tape-mobile-img" style="max-width: 62px; max-height: 62px;" src="/content/images/marketing/tape/monthly2.jpg"><img class="tape-mobile-img" style="max-width: 62px; max-height: 62px;" src="/content/images/marketing/tape/monthly3.jpg"></div>
          </div>
          <button id="buttonTwo" class="tape-mobile-box" style="padding: 0" onclick="revealButton(c2,b2,br2,i2)"><img src="/content/images/marketing/tape/plus.png"></button>
          <button id="buttonTwoReveal" class="tape-mobile-box" style="padding: 0;display: none" onclick="hideButton(c2,b2,br2,i2)"><img src="/content/images/marketing/tape/minus.png"></button>

        </div>
      </div>
      <div id="contentTwo" class="tape-mobile-hidden" >
        <div style="border-left: 1px solid #C4C4C4; border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Description</div>
          <div class="tape-mobile-text">Last: 3-4 weeks<br/><br/>Clear<br/><br/>Less residue, Easy clean<br/><br/>Strong hold</div>
        </div>

        <div style="border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Poly</div>
          <div class="tape-mobile-check"><img src="/content/images/marketing/tape/checkmark.png"></div>
        </div>

        <div style="border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Lace</div>
          <div class="tape-mobile-question"><img src="/content/images/marketing/tape/checkmark.png"></div>
        </div>

      </div>
      <div class="tape-mobile-pad"></div>
    </div>

    <div id="itemThree">
      <div class="tape-mobile-content">
        <div class="tape-mobile-split">
          <div class="tape-mobile-split-2" style="grid-template-columns: 1fr 12fr 20fr">
            <div class="tape-mobile-subtitle" style="margin-left: 2vw;"><li></li></div>
            <div class="tape-mobile-subtitle">Davlyn #52<br/>(Rolls & Strips)</div>
            <div style="    display: flex;
            justify-content: flex-end;
            align-items: center;"><img class="tape-mobile-img" style="max-width: 55px; max-height: 55px;" src="/content/images/marketing/tape/monthly4.jpg"><img class="tape-mobile-img" style="max-width: 55px; max-height: 55px;" src="/content/images/marketing/tape/monthly5.jpg"></div>
          </div>
          <button id="buttonThree" class="tape-mobile-box" style="padding: 0" onclick="revealButton(c3,b3,br3,i3)"><img src="/content/images/marketing/tape/plus.png"></button>
          <button id="buttonThreeReveal" class="tape-mobile-box" style="padding: 0;display: none" onclick="hideButton(c3,b3,br3,i3)"><img src="/content/images/marketing/tape/minus.png"></button>

        </div>
      </div>
      <div id="contentThree" class="tape-mobile-hidden">
        <div style="border-left: 1px solid #C4C4C4; border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Description</div>
          <div class="tape-mobile-text">Last: 3-4 weeks<br/><br/>Clear<br/><br/>Current leader in wig tapes<br/><br/>Extreme hold-super tacky, flexible</div>
        </div>

        <div style="border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Poly</div>
          <div class="tape-mobile-check"><img src="/content/images/marketing/tape/checkmark.png"></div>

        </div>

        <div style="border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Lace</div>
          <div class="tape-mobile-question"><img src="/content/images/marketing/tape/checkmark.png"></div>
        </div>

      </div>
      <div class="tape-mobile-pad"></div>
    </div>

    <div id="itemFour">
      <div class="tape-mobile-content">
        <div class="tape-mobile-split">
          <div class="tape-mobile-split-2"  style="grid-template-columns: 1fr 17fr 20fr">
            <div class="tape-mobile-subtitle" style="margin-left: 2vw;"><li></li></div>
            <div class="tape-mobile-subtitle">Red liner/super red<br/>(Rolls&Strips)</div>
            <div style="    display: flex;
            justify-content: flex-end;
            align-items: center;"><img class="tape-mobile-img" style="max-width: 54px; max-height: 54px;" src="/content/images/marketing/tape/monthly6.jpg"></div>
          </div>
          <button id="buttonFour" class="tape-mobile-box" style="padding: 0" onclick="revealButton(c4,b4,br4,i4)"><img src="/content/images/marketing/tape/plus.png"></button>
          <button id="buttonFourReveal" class="tape-mobile-box" style="padding: 0;display: none" onclick="hideButton(c4,b4,br4,i4)"><img src="/content/images/marketing/tape/minus.png"></button>

        </div>
      </div>
      <div id="contentFour" class="tape-mobile-hidden">
        <div style="border-left: 1px solid #C4C4C4; border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Description</div>
          <div class="tape-mobile-text">Lasts: 3-4 weeks<br/><br/>Maximum hold, thin<br/><br/>Tape in glue form<br/><br/>Gooey, recommend for professionals only</div>
        </div>

        <div style="border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Poly</div>
          <div class="tape-mobile-check"><img src="/content/images/marketing/tape/checkmark.png"></div>

        </div>

        <div style="border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Lace</div>
          <div class="tape-mobile-question"><img src="/content/images/marketing/tape/checkmark.png"></div>
        </div>


      </div>
      <div class="tape-mobile-pad"></div>
    </div>

    <div id="itemFive">
      <div class="tape-mobile-content">
        <div class="tape-mobile-split">
          <div class="tape-mobile-split-2" style="grid-template-columns: 1fr 25fr 10fr">
            <div class="tape-mobile-subtitle" style="margin-left: 2vw;"><li></li></div>
            <div class="tape-mobile-subtitle">Davlyn red liner</div>
            <div style="    display: flex;
            justify-content: flex-end;
            align-items: center;"><img class="tape-mobile-img" style="max-width: 107px; max-height: 58px;" src="/content/images/marketing/tape/monthly7.jpg"></div>
          </div>
          <button id="buttonFive" class="tape-mobile-box" style="padding: 0" onclick="revealButton(c5,b5,br5,i5)"><img src="/content/images/marketing/tape/plus.png"></button>
          <button id="buttonFiveReveal" class="tape-mobile-box" style="padding: 0;display: none" onclick="hideButton(c5,b5,br5,i5)"><img src="/content/images/marketing/tape/minus.png"></button>

        </div>
      </div>
      <div id="contentFive" class="tape-mobile-hidden">
        <div style="border-left: 1px solid #C4C4C4; border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Description</div>
          <div class="tape-mobile-text">Last: 4+ weeks<br/><br/>Low shine<br/><br/>Medical grade</div>
        </div>

        <div style="border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Poly</div>
          <div class="tape-mobile-check"><img src="/content/images/marketing/tape/checkmark.png"></div>

        </div>

        <div style="border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Lace</div>
          <div class="tape-mobile-question"><img src="/content/images/marketing/tape/checkmark.png"></div>
        </div>


      </div>
      <div class="tape-mobile-pad"></div>
    </div>

    <div id="itemSix">
      <div class="tape-mobile-content">
        <div class="tape-mobile-split">
          <div class="tape-mobile-split-2" style="grid-template-columns: 1fr 20fr 20fr">
            <div class="tape-mobile-subtitle" style="margin-left: 2vw;"><li></li></div>
            <div class="tape-mobile-subtitle">Sunshine to base<br/>(Strips only)</div>
            <div style="    display: flex;
            justify-content: flex-end;
            align-items: center;"><img class="tape-mobile-img" style="max-width: 93px; max-height: 51px;" src="/content/images/marketing/tape/monthly8.jpg"><img class="tape-mobile-img" style="max-width: 93px; max-height: 51px;" src="/content/images/marketing/tape/monthly9.jpg"></div>
          </div>
          <button id="buttonSix" class="tape-mobile-box" style="padding: 0" onclick="revealButton(c6,b6,br6,i6)"><img src="/content/images/marketing/tape/plus.png"></button>
          <button id="buttonSixReveal" class="tape-mobile-box" style="padding: 0;display: none" onclick="hideButton(c6,b6,br6,i6)"><img src="/content/images/marketing/tape/minus.png"></button>

        </div>
      </div>
      <div id="contentSix" class="tape-mobile-hidden">
        <div style="border-left: 1px solid #C4C4C4; border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Description</div>
          <div class="tape-mobile-text">Last: 4-5 weeks<br/><br/>Solid surface for greater strenth</div>
        </div>

        <div style="border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Poly</div>
          <div class="tape-mobile-check"><img src="/content/images/marketing/tape/checkmark.png"></div>

        </div>

        <div style="border-right: 1px solid #C4C4C4;">
          <div class="tape-mobile-title">Lace</div>
          <div class="tape-mobile-check"><img src="/content/images/marketing/tape/checkmark.png"></div>
        </div>

      </div>
      <div class="tape-mobile-pad"></div>

    </div>
  </div>

  <div class="tape-mobile-footer"></div>
</div>
  `
  export default function() {
    const tabHead = $('.st-ann2').data('name')
    if (tabHead === 'Monthly') {
          $(".st-ann3").empty()
    $(".st-ann3").css('display','block')

    $(".st-ann3").removeAttr('id');
    $(".st-ann3").append(stContent2)
    }
    $(".tapeTabs-head").on('click', function(n) {
      if (n.target.innerHTML === 'Monthly') {
                 $(".st-ann3").empty()
            $(".st-ann3").css('display','block')

            $(".st-ann3").removeAttr('id');
            $(".st-ann3").append(stContent2)
      }
  })
  }
