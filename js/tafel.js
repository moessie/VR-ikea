var audio = new Audio("img/hamer.mp3")
homelat = 52.1675221;
homelng = 4.4682125;
ikeachange = false;

window.onload = function() {

  // hand 1 = tafelblad
  // hand 2 = tafelpoot
  // hand 3 = deuvel`
  // hand 4 = schroef
  // hand p4 = screwdriver
  hand = '';

  // Variabele kast
  stepsTaken = 0;
  stepArray = [];
  kastDeuvelsVerplaatst = 0;

  // Variabele tafel
  tafelStepArray = []
  tafelStepsTaken = 0;
  schroefVerplaatst = 0;

  document.querySelector('a-scene').addEventListener('enter-vr', function () {
        document.querySelector('a-camera').setAttribute('camera','userHeight: 1.6');
});

  // tafelPoot
  tafelPoot1 = document.getElementById("tafelPoot1");
  tafelPoot2 = document.getElementById("tafelPoot2");
  tafelPoot3 = document.getElementById("tafelPoot3");
  tafelPoot4 = document.getElementById("tafelPoot4");

  // boxTafelPoot
  boxTafelPoot1 = document.getElementById("boxTafelPoot1");
  boxTafelPoot2 = document.getElementById("boxTafelPoot2");
  boxTafelPoot3 = document.getElementById("boxTafelPoot3");
  boxTafelPoot4 = document.getElementById("boxTafelPoot4");


  // Schroeven
  schroef1 = document.getElementById("schroef1");
  schroef2 = document.getElementById("schroef2");
  schroef3 = document.getElementById("schroef3");
  schroef4 = document.getElementById("schroef4");

  boxSchroef1 = document.getElementById("boxSchroef1");
  boxSchroef2 = document.getElementById("boxSchroef2");
  boxSchroef3 = document.getElementById("boxSchroef3");
  boxSchroef4 = document.getElementById("boxSchroef4");


  tafelBlad = document.getElementById("tafelBlad");



  handhamer = '<a-entity class="hand" id="handhamer" scale="0.1 0.1 0.1" position="0.5 -0.4 -0.8" rotation="30 180 0" obj-model="obj: #hammer-obj; mtl: #hammer-mtl"></a-entity>';


    // Tafel functies //
    setTafelStappen('box1','0 0 0','0 0 0','1','0.1','1','green','0.2','plaatsTafelblad','1','box');

    setTafelStappen('sd1','-0.458 0.141 -0.476','0 0 0','0.25','0.3','0.25','#d000ff','0.5','plaatsSchroef','8','cylinder','0.015','d1');
    setTafelStappen('sd2','0.473 0.140 -0.442','0 0 0','0.25','0.3','0.25','#d000ff','0.5','plaatsSchroef','8','cylinder','0.015','d2');
    setTafelStappen('sd3','0.427 0.140 0.487','0 0 0','0.25','0.3','0.25','#d000ff','0.5','plaatsSchroef','8','cylinder','0.015','d3');
    setTafelStappen('sd4','-0.447 0.140 0.474','0 0 0','0.25','0.3','0.25','#d000ff','0.5','plaatsSchroef','8','cylinder','0.015','d4');

    setTafelStappen('sbox1','-0.426 0.372 -0.416','0 0 0','0.15','0.65','0.15','green','0.2','plaatsTafelpoot','2','box');
    setTafelStappen('sbox2','0.422 0.377 -0.426','0 0 0','0.15','0.65','0.15','green','0.2','plaatsTafelpoot','2','box');
    setTafelStappen('sbox3','0.427 0.364 0.420','0 0 0','0.15','0.65','0.15','green','0.2','plaatsTafelpoot','2','box');
    setTafelStappen('sbox4','-0.419 0.374 0.425','0 0 0','0.15','0.65','0.15','green','0.2','plaatsTafelpoot','2','box');


      /* kast functies */
    setKastStappen('box1','0.5 0.02 -0.250','0 0 0','2','0.05','0.5','green','0.2','plaatsKastPlank2','4','box');

    setKastStappen('sd1','0 0.090 -0.482','0 0 0','0','0.08','0','#d000ff','0.5','plaatsKastDeuvel','7','cylinder','0.015','d1');
    setKastStappen('sd2','0 0.090 -0.022','0 0 0','0','0.08','0','#d000ff','0.5','plaatsKastDeuvel','7','cylinder','0.015','d2');
    setKastStappen('sd3','0.518 0.090 -0.482','0 0 0','0','0.08','0','#d000ff','0.5','plaatsKastDeuvel','7','cylinder','0.015','d3');
    setKastStappen('sd4','0.518 0.090 -0.022','0 0 0','0','0.08','0','#d000ff','0.5','plaatsKastDeuvel','7','cylinder','0.015','d4');
    setKastStappen('sd5','1 0.090 -0.494','0 0 0','0','0.08','0','#d000ff','0.5','plaatsKastDeuvel','7','cylinder','0.015','d5');
    setKastStappen('sd6','1 0.090 -0.022','0 0 0','0','0.08','0','#d000ff','0.5','plaatsKastDeuvel','7','cylinder','0.015','d6');

    setKastStappen('sbox1','0 0.290 -0.255','0 0 0','0.05','0.5','0.5','green','0.2','plaatsKastPlank3','5','box');
    setKastStappen('sbox2','0.518 0.290 -0.255','0 0 0','0.05','0.5','0.5','green','0.2','plaatsKastPlank3','5','box');
    setKastStappen('sbox3','1 0.290 -0.255','0 0 0','0.05','0.5','0.5','green','0.2','plaatsKastPlank3','5','box');

    setKastStappen('sd7','0 0.590 -0.484','0 0 0','0','0.08','0','#d000ff','0.5','plaatsKastDeuvel','7','cylinder','0.015','d7');
    setKastStappen('sd8','0 0.590 -0.025','0 0 0','0','0.08','0','#d000ff','0.5','plaatsKastDeuvel','7','cylinder','0.015','d8');
    setKastStappen('sd9','0.518 0.590 -0.486','0 0 0','0','0.08','0','#d000ff','0.5','plaatsKastDeuvel','7','cylinder','0.015','d9');
    setKastStappen('sd10','0.518 0.590 -0.023','0 0 0','0','0.08','0','#d000ff','0.5','plaatsKastDeuvel','7','cylinder','0.015','d10');
    setKastStappen('sd11','1 0.590 -0.485','0 0 0','0','0.08','0','#d000ff','0.5','plaatsKastDeuvel','7','cylinder','0.015','d11');
    setKastStappen('sd12','1 0.590 -0.023','0 0 0','0','0.08','0','#d000ff','0.5','plaatsKastDeuvel','7','cylinder','0.015', 'd12');

    setKastStappen('box2','0.5 0.57 -0.26','0 0 0','2','0.05','0.5','green','0.2','plaatsKastPlank2','4','box');

    setKastStappen('topbox2','-0.473 0.3 -0.24','0 0 0','0.05','0.5','0.5','green','0.2','plaatsKastPlank3Top','5','box');

    setKastStappen('sc1','-0.544 0.57 -0.481','0 0 90','0','0.3','0','#ff0022','0.5','placeschroef','8','cylinder','0.015','s1');
    setKastStappen('sc2','-0.516 0.07 -0.475','0 0 90','0','0.3','0','#ff0022','0.5','placeschroef','8','cylinder','0.015','s2');
    setKastStappen('sc3','-0.542 0.568 -0.071','0 0 90','0','0.3','0','#ff0022','0.5','placeschroef','8','cylinder','0.015','s3');
    setKastStappen('sc4','-0.518 0.05 -0.019','0 0 90','0','0.3','0','#ff0022','0.5','placeschroef','8','cylinder','0.015','s4');

    setKastStappen('topbox1','1.48 0.3 -0.26','0 0 0','0.05','0.5','0.5','green','0.2','plaatsKastPlank3Top','5','box');

    setKastStappen('sc5','1.535 0.572 -0.5','0 0 90','0','0.08','0','#ff0022','0.5','placeschroef','8','cylinder','0.015','s5');
    setKastStappen('sc6','1.527 0.026 -0.478','0 0 90','0','0.08','0','#ff0022','0.5','placeschroef','8','cylinder','0.015','s6');
    setKastStappen('sc7','1.531 0.560 -0.062','0 0 90','0','0.08','0','#ff0022','0.5','placeschroef','8','cylinder','0.015','s7');
    setKastStappen('sc8','1.523 0.020 -0.042','0 0 90','0','0.08','0','#ff0022','0.5','placeschroef','8','cylinder','0.015','s8');





}


// Algemene functies //

function loadCursor(){
    document.getElementById('cursor-loader').setAttribute('material', 'color: lightgreen');
}

function quitCursor(){
    document.getElementById('cursor-loader').setAttribute('material', 'color:#3b4f70');
}


function pickup(selector) {
    if(hand == '') {
        loadCursor();
        var timer = setTimeout(function () {
            if (selector == '1') {
                $('#hammer').remove();
                $('#camera').append('<a-entity class="hand" id="handhammer" scale="0.15 0.15 0.15" position="0.5 -0.7 -0.8" rotation="30 180 0" obj-model="obj: #hammer-obj; mtl: #hammer-mtl"></a-entity>');
                hand = 'p1';
                quitCursor();
            }else if(selector == '2'){
                $('#screwdriver').remove();
                $('#camera').append('<a-entity class="hand" id="handdraaier" scale="0.03 0.03 0.03" position="0.5 -0.4 -0.8" rotation="0 180 0" obj-model="obj: #screwdriver-obj; mtl: #screwdriver-mtl"></a-entity>');
                hand = 'p2';
                quitCursor();
            }
        },1050);
        document.getElementById('pickup'+selector).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}



function emptyHand(){
    if(hand != '') {
        loadCursor();
        var timer = setTimeout(function () {
            if(hand == 'p1'){
                $('#scene').append('<a-entity onmouseenter="pickup(\'1\')" id="pickup1" geometry="primity:box; width:1; height:0.1; depth:0.4;" material="color:red; opacity:0" position="1.115 0.1 -0.524><a-entity id="hammer" scale="0.1 0.1 0.1" position="0 0 0" rotation="0 180 45" obj-model="obj: #hammer-obj; mtl: #hammer-mtl"></a-entity></a-entity>');
            }else if(hand == 'p2'){
                $('#scene').append('<a-entity onmouseenter="pickup(\'2\')" id="pickup2" geometry="primity:box; width:1; height:0.1; depth:0.4;" material="color:red; opacity:0" position="1.46 0.316 -0.116"><a-entity id="screwdriver" scale="0.03 0.03 0.03" position="-0.2 0 -0.04" rotation="45 -90 90" obj-model="obj: #screwdriver-obj; mtl: #screwdriver-mtl"></a-entity></a-entity>');
            }
            $('.hand').remove();
            quitCursor();
            hand = '';
        },1050);
        document.getElementById('emptyhand').addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}

function pakMateriaal(selector){
    if(hand == '') {
        loadCursor();
        var timer = setTimeout(function () {
            if (selector == '1') {
                $('#camera').append('<a-box class="hand" id="handbox" color="grey" rotation="90 0 0" position="0 -0.3 -0.8" width="0.6" height="0.6" depth="0.05"></a-box>');
                hand = '1';
                quitCursor()
            }else if(selector == '2'){
                $('#camera').append('<a-box class="hand" id="handbox" color="grey" rotation="0 0 0" position="0 -1 -1.2" depth="0.2" height="1.6" width="0.2"></a-box>');
                hand = '2';
                quitCursor()
            }else if(selector == '3'){
                $('#camera').append('<a-box class="hand" id="handbox" color="grey" rotation="0 -15 25" position="0 -0.3 -0.8" depth="0.75" height="0.05" width="1.6"></a-box>');
                hand = '3';
                quitCursor()
            }else if(selector == '4'){
                $('#camera').append('<a-box class="hand" id="handbox" color="grey" rotation="0 -15 25" position="0 -0.3 -0.8" depth="0.375" height="0.05" width="1.6"></a-box>');
                hand = '4';
                quitCursor()
            }else if(selector == '5'){
                $('#camera').append('<a-box class="hand" id="handbox" color="grey" rotation="0 -15 25" position="0 -0.3 -0.8" depth="0.375" height="0.475" width="0.075"></a-box>');
                hand = '5';
                quitCursor()
            }else if(selector == '6'){
                $('#camera').append(' <a-box class="hand" id="handbox" color="grey" position="0 -0.3 -0.8" rotation="0 -15 25" depth="0.125" height="0.475" width="0.05"></a-box>');
                hand = '6';
                quitCursor()
            }else if(selector == '7'){
                $('#camera').append(' <a-entity class="hand" id="handdeuvel" scale="0.015 0.015 0.015" position="0.2 -0.3 -0.8" rotation="0 0 -25" obj-model="obj: #deuvel-obj; mtl: #deuvel-mtl"></a-entity>');
                hand = '7';
                quitCursor()
            }else if(selector == '8'){
                $('#camera').append(' <a-entity class="hand" id="handschroef" scale="0.04 0.04 0.04" position="0.3 -0.2 -0.8" rotation="50 -90 0" obj-model="obj: #schroef-obj; mtl: #schroef-mtl"></a-entity>');
                hand = '8';
                quitCursor();
            }
        },1050);
        document.getElementById('selector'+selector).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}



/*  Tafel functies */

function laadTafel()
{
  loadCursor();
  var timer = setTimeout(function () {
    document.getElementById('selector1').setAttribute('position', '2.4 0.5 -0.5');
    document.getElementById('selector2').setAttribute('position', '2.4 0 0.4');
    document.getElementById('selector8').setAttribute('position', '1.3 0.25 -0.3');
    document.getElementById('pickup1').setAttribute('position', '1.1 0.2 -0.7');
    document.getElementById('handleiding1').setAttribute('position', '1.534 1 1.770');
    document.getElementById('handleidingTafel').setAttribute('position', '1.88 0.5 2.163');
    document.getElementById('kleed').setAttribute('position', '1.7 0.1 0.9');
    document.getElementById('kleed').setAttribute('height', '4');
    document.getElementById('emptyhand').setAttribute('position', '1.5 0.1 0.4');
    document.getElementById('tekstEmptyHand').setAttribute('position', '1.5 0.12 0.4');
    document.getElementById('keuzeTafel').setAttribute('position', '1.5 0.75 -8');
    document.getElementById('keuzeKast').setAttribute('position', '1.5 0.75 -8');
    document.getElementById('lamp2').setAttribute('position', '1.5 0.75 - 8');
    document.getElementById('introductieTekst').setAttribute('position', '1.5 0.75 -10');
    document.getElementById('introductieTekst2').setAttribute('position', '1.5 0.75 -10');
    document.getElementById('standaard1').setAttribute('position', '1.5 0.75 -10');
    document.getElementById('standaard2').setAttribute('position', '1.5 0.75 -10');
    document.getElementById('kastTekst').setAttribute('position', '1.5 0.75 -8');
    document.getElementById('tafelTekst').setAttribute('position', '1.5 0.75 -8');
    maakTafelStappen();
  },1050);
  document.getElementById('keuzeTafel').addEventListener('mouseleave', function () {
      clearTimeout(timer);
      quitCursor();
  })

}







/*
id = id
pos = position
rot = rotation
w = width
h = heigth
d = depth
c = color
o = opacity
f = function
s = size

sid = second id
*/

function setTafelStappen(id,pos,rot,w,h,d,c,o,f,s,p,r,sid){
    var tafelStap = {id:id,pos:pos,rot:rot,h:h,w:w,d:d,c:c,o:o,f:f,s:s,p:p,r:r,sid:sid};
    tafelStepArray.push(tafelStap);
}



function maakTafelStappen(){
  console.log("maak kast stappen functie betreden");
  console.log(tafelStepsTaken);
  console.log(tafelStepArray[0]);
    if(tafelStepsTaken < 5 || (tafelStepsTaken > 5 && tafelStepsTaken <10)) {
        if (tafelStepArray[0].p == 'box') {
            if(tafelStepsTaken < 24){
                console.log('test1');
                var fun = tafelStepArray[0].f + "('" + tafelStepArray[0].id + "','" + tafelStepArray[0].s + "')";
                $('#tafelbox').append('<a-box onmouseenter="' + fun +  '" id="' + tafelStepArray[0].id + '" position="' + tafelStepArray[0].pos + '" rotation="' + tafelStepArray[0].rot + '" color="' + tafelStepArray[0].c + '" height="' + tafelStepArray[0].h + '" width="' + tafelStepArray[0].w + '" depth="' + tafelStepArray[0].d + '" opacity="' + tafelStepArray[0].o + '"></a-box>');

            }
        } if(tafelStepsTaken < 20) {
                var fun = tafelStepArray[0].f + "('" + tafelStepArray[0].id + "','" + tafelStepArray[0].sid + "','" + tafelStepArray[0].s + "')";
                $('#tafelbox').append('<a-entity id="' + tafelStepArray[0].sid + '" geometry="primitive:box; width:0.2; height:0.1; depth:0.2;" material="color:red; opacity:0;" position="' + tafelStepArray[0].pos + '" onmouseenter="' + fun + '"  hit="animation:x; from:0 180 0; id:handhammer; rotation:30 180 0;"><a-cylinder id="' + tafelStepArray[0].id + '" position="0 0 0" rotation="' + tafelStepArray[0].rot + '" color="' + tafelStepArray[0].c + '" height="' + tafelStepArray[0].h + '"  radius="' + tafelStepArray[0].r + '" opacity="' + tafelStepArray[0].o + '"></a-cylinder></a-entity>');
                console.log('test4');
            }
    }else if(tafelStepsTaken == 5 && schroefVerplaatst == 4){
        var fun = tafelStepArray[0].f + "('" + tafelStepArray[0].id + "','" + tafelStepArray[0].s + "')";
        $('#tafelbox').append('<a-box onmouseenter="' + fun + '" id="' + tafelStepArray[0].id + '" position="' + tafelStepArray[0].pos + '" rotation="' + tafelStepArray[0].rot + '" color="' + tafelStepArray[0].c + '" height="' + tafelStepArray[0].h + '" width="' + tafelStepArray[0].w + '" depth="' + tafelStepArray[0].d + '" opacity="' + tafelStepArray[0].o + '"></a-box>');
        console.log("test5");

    } else if(tafelStepsTaken == 10){
      console.log("tafel is in elkaar gezet");
      document.querySelector('#tafelbox').emit('tafelgemaakt');
      document.querySelector('#tafelbox').emit('tafelgemaakt2');
      document.getElementById('eindTekstTafel').setAttribute('position', '2.3 1.6 0.19');
    }
    tafelStepsTaken += 1;

}



function plaatsTafelblad(ele,selector){
  console.log("plaatsTafelblad functie betreden");
  console.log(ele);
  console.log(hand);
  console.log(selector);
    if(selector == hand){
        loadCursor();
        var timer = setTimeout(function () {
            $('#'+ele).attr({
                color:'grey',
                opacity:'1'
            });
            document.getElementById(ele).removeAttribute('onmouseenter');
            $('#handbox').remove();
            hand = '';
            tafelStepArray.shift();
            volgendeStap();
            maakTafelStappen();
            quitCursor();
        },1050);
        document.getElementById(ele).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}

function plaatsTafelpoot(ele, selector){
    if(selector == hand){
        loadCursor();
        var timer = setTimeout(function () {
          if(ele == 'sbox1'){
            $('#d1').remove();
            console.log('sd1 is verwijderd');
          } else if(ele == 'sbox2'){
            $('#d2').remove();
            console.log('sd2 is verwijderd');
          } else if(ele == 'sbox3'){
            $('#d3').remove();
            console.log('sd3 is verwijderd');
          } else if(ele == 'sbox4'){
            $('#d4').remove();
            console.log('sd4 is verwijderd');
          }

            $('#'+ele).attr({
                color:'grey',
                opacity:'1'
            });
            document.getElementById(ele).removeAttribute('onmouseenter');
            tafelStepArray.shift();

            maakTafelStappen();
            quitCursor();
        },1050);
        document.getElementById(ele).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }

}

function plaatsSchroef(ele2,ele,selector){
  console.log("deuvel geplaatst");
    if(selector == hand){
        loadCursor();
        var timer = setTimeout(function () {
                $('#'+ele2).remove();
                if(ele2 == 'sc1' || ele2 == 'sc2' || ele2 == 'sc3' || ele2 =='sc4') {
                    $('#' + ele).append('<a-entity id="schroefappend" scale="0.03 0.03 0.03" position="0 0 0" rotation="90 180 0" obj-model="obj: #schroef-obj; mtl: #schroef-mtl"></a-entity>');
                }else{
                    $('#' + ele).append('<a-entity id="schroefappend" scale="0.03 0.03 0.03" position="0 0 0" rotation="90 180 0" obj-model="obj: #schroef-obj; mtl: #schroef-mtl"></a-entity>');
                }
            document.getElementById(ele).removeAttribute('onmouseenter');
            document.getElementById(ele).setAttribute('onmouseenter','movePos("'+ele+'")');
            // $('#handdeuvel').remove();
            // hand = '';
            tafelStepArray.shift();
            volgendeStap();
            maakTafelStappen();
            quitCursor();

        },1050);
        document.getElementById(ele).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}

function movePos(id){
    if(hand == 'p1'){

        $('#'+id).removeAttr('onmouseenter');
        var changePos = parseFloat(Object.values($('#'+id).attr('position'))[1]);
        var y = 0;
        var i = 0.015;
        var inter = setInterval(function () {
            newz = changePos-i;
            console.log(schroefVerplaatst);
            var newPos = Object.values($('#'+id).attr('position'))[0] + " "+ newz + " " + Object.values($('#'+id).attr('position'))[2];
            $('#'+id).attr('position',newPos);
            i+=0.015;
            y++;
            if(y>=3){
                clearTimeout(inter);

                schroefVerplaatst += 1;
                console.log(schroefVerplaatst);
                if(schroefVerplaatst == 4 ){
                    volgendeStap();
                    maakTafelStappen();
                }
            }
        },400)
    }
}



function volgendeStap(){
  if(tafelStepsTaken == 1){
      volgendBlad();
  } else if(tafelStepsTaken == 5){
      volgendBlad();
  } else if(tafelStepsTaken == 6){
      volgendBlad();
  }
}


function volgendBlad(){
    uitleg = document.getElementById('handleiding1');
    if(uitleg.getAttribute('src') != '4stap.jpg'){
        uitleg.setAttribute("src", parseInt(handleiding1.getAttribute("src")) + 1 + "stap.jpg" );
    }
}





/* Kast functies */

function laadKast()
{
  loadCursor();
  var timer = setTimeout(function () {
    document.getElementById('selector4').setAttribute('position', '2.3 0.75 -0.465');
    document.getElementById('selector5').setAttribute('position', '2.3 0.3 0.2');
    document.getElementById('selector7').setAttribute('position', '1.4 0.108 0.562');
    document.getElementById('selector8').setAttribute('position', '1.25 0.15 0.270');
    document.getElementById('pickup1').setAttribute('position', '1.115 0.1 -0.524');
    document.getElementById('pickup2').setAttribute('position', '1.46 0.316 -0.116');
    document.getElementById('handleidingKast').setAttribute('position', '1.77 1 1.8');
    document.getElementById('handleidingTafel').setAttribute('position', '2.2 0.5 2.2');
    document.getElementById('emptyhand').setAttribute('position', '1.3 0.1 -1.1');
    document.getElementById('tekstEmptyHand').setAttribute('position', '1.32 0.1 -1.1');
    document.getElementById('keuzeTafel').setAttribute('position', '1.5 0.75 -8');
    document.getElementById('keuzeKast').setAttribute('position', '1.5 0.75 -8');
    document.getElementById('lamp2').setAttribute('position', '1.5 0.75 - 8');
    document.getElementById('kleed').setAttribute('position', '1.7 0.02 0.7');
    document.getElementById('kleed').setAttribute('height', '4.5');
    document.getElementById('kleed').setAttribute('width', '2');
    document.getElementById('introductieTekst').setAttribute('position', '1.5 0.75 -10');
    document.getElementById('introductieTekst2').setAttribute('position', '1.5 0.75 -10');
    document.getElementById('standaard1').setAttribute('position', '1.5 0.75 -10');
    document.getElementById('standaard2').setAttribute('position', '1.5 0.75 -10');
    document.getElementById('kastTekst').setAttribute('position', '1.5 0.75 -8');
    document.getElementById('tafelTekst').setAttribute('position', '1.5 0.75 -8');
    document.getElementById('tekstKastPlank2').setAttribute('position', '2.2 0.8 -0.4');
    document.getElementById('tekstKastPlank3').setAttribute('position', '2.2 0.3 0.21');
    maakKastStappen();
  },1050);
  document.getElementById('keuzeKast').addEventListener('mouseleave', function () {
      clearTimeout(timer);
      quitCursor();
  })
}





function setKastStappen(id,pos,rot,w,h,d,c,o,f,s,p,r,sid){
    var kastStep = {id:id,pos:pos,rot:rot,h:h,w:w,d:d,c:c,o:o,f:f,s:s,p:p,r:r,sid:sid};
    stepArray.push(kastStep);
}



function maakKastStappen(){
  console.log("functie maakKastStappen betreden");


  // If statement die checken welke stap het is
  // en op basis daarvan stappen blad veranderen

  // Plaats deuvels
  if(stepsTaken == 1){
      volgendKastBlad();
      console.log("volgende kast stap getriggered");
  } // Sla deuvels erin
  else if(stepsTaken == 7){
      volgendKastBlad();
  } // Plaats plank 3
  else if(stepsTaken == 8){
      volgendKastBlad();
  } // Plaats deuvels
  else if(stepsTaken == 11){
      volgendKastBlad();
  } // Sla deuvels erin
  else if(stepsTaken == 17 ){
      volgendKastBlad();
  } // Plaats plank 2
  else if(stepsTaken == 18){
      volgendKastBlad();
  } // Plaats plank 3
  else if(stepsTaken == 19){
      volgendKastBlad();
  } // Plaats schroef
  else if(stepsTaken == 20){
      volgendKastBlad();
  } // Draai Schroeven
  else if(stepsTaken == 24){
      volgendKastBlad();
  } // Plaats plank 3
  else if(stepsTaken == 25){
      volgendKastBlad();
  } // Plaats Schroeven
  else if(stepsTaken == 26){
      volgendKastBlad();
  } // Draai Schroeven
  else if(stepsTaken == 30){
      volgendKastBlad();
  }

  console.log(stepsTaken);
    if(stepsTaken < 7 || (stepsTaken > 8 && stepsTaken <17) || (stepsTaken >= 20 && kastDeuvelsVerplaatst >= 12 && kastDeuvelsVerplaatst < 20)) {
        if (stepArray[0].p == 'box') {
            if(stepsTaken < 24){

                var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].s + "')";
                $('#kastent').append('<a-box onmouseenter="' + fun + '" id="' + stepArray[0].id + '" position="' + stepArray[0].pos + '" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '" width="' + stepArray[0].w + '" depth="' + stepArray[0].d + '" opacity="' + stepArray[0].o + '"></a-box>');
            }
            if(stepsTaken == 24){
            }
            else if(stepsTaken == 25 || kastDeuvelsVerplaatst == 16){
                document.querySelector('#kastent').emit('setsec');
                document.querySelector('#kastent').emit('setsec2');
                $('#s1').remove();
                $('#s2').remove();
                $('#s3').remove();
                $('#s4').remove();

                var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].s + "')";
                $('#kastent').append('<a-box onmouseenter="' + fun + '" id="' + stepArray[0].id + '" position="' + stepArray[0].pos + '" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '" width="' + stepArray[0].w + '" depth="' + stepArray[0].d + '" opacity="' + stepArray[0].o + '"></a-box>');
            }
        } else {
            if(stepsTaken >= 20){
                if(stepsTaken == 20){
                    document.querySelector('#kastent').emit('setfirst');
                }
                var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].sid + "','" + stepArray[0].s + "')";
                $('#kastent').append('<a-entity id="' + stepArray[0].sid + '" geometry="primitive:box; width:0.2; height:0.1; depth:0.2;" material="color:red; opacity:0;" position="' + stepArray[0].pos + '" onmouseenter="' + fun + '" ><a-cylinder id="' + stepArray[0].id + '" position="0 0 0" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '"  radius="' + stepArray[0].r + '" opacity="' + stepArray[0].o + '"></a-cylinder></a-entity>');
            }else {
                var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].sid + "','" + stepArray[0].s + "')";
                $('#kastent').append('<a-entity id="' + stepArray[0].sid + '" geometry="primitive:box; width:0.2; height:0.1; depth:0.2;" material="color:red; opacity:0;" position="' + stepArray[0].pos + '" onmouseenter="' + fun + '"  hit="animation:x; from:0 180 0; id:handhammer; rotation:30 180 0;"><a-cylinder id="' + stepArray[0].id + '" position="0 0 0" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '"  radius="' + stepArray[0].r + '" opacity="' + stepArray[0].o + '"></a-cylinder></a-entity>');
            }
        }
    }else if((stepsTaken == 8 && kastDeuvelsVerplaatst == 6) || (stepsTaken == 18 && kastDeuvelsVerplaatst == 12)){

        var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].s + "')";
        $('#kastent').append('<a-box onmouseenter="' + fun + '" id="' + stepArray[0].id + '" position="' + stepArray[0].pos + '" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '" width="' + stepArray[0].w + '" depth="' + stepArray[0].d + '" opacity="' + stepArray[0].o + '"></a-box>');
    }else if(stepsTaken >= 19 && kastDeuvelsVerplaatst == 12 && stepsTaken <= 20){

        var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].s + "')";
        $('#kastent').append('<a-box onmouseenter="' + fun + '" id="' + stepArray[0].id + '" position="' + stepArray[0].pos + '" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '" width="' + stepArray[0].w + '" depth="' + stepArray[0].d + '" opacity="' + stepArray[0].o + '"></a-box>');

    }else if(stepsTaken == 30){
        $('#s5').remove();
        $('#s6').remove();
        $('#s7').remove();
        $('#s8').remove();
        console.log('Einde VR - Beleving');
        document.querySelector('#kastent').emit('setthird');
        document.querySelector('#kastent').emit('setthird3');
        document.getElementById('eindTekstKast').setAttribute('position', '2.3 1.75 0.19');

    }
    stepsTaken += 1;





}


function plaatsKastPlank3Top(ele, selector){
    if(selector == hand){
        loadCursor();
        var timer = setTimeout(function () {
            $('#'+ele).attr({
                color:'grey',
                opacity:'1'
            });
            document.getElementById(ele).removeAttribute('onmouseenter');
            $('#handbox').remove();
            hand = '';
            stepArray.shift();
            maakKastStappen();
            quitCursor();
        },1050);
        document.getElementById(ele).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}





function plaatsKastPlank2(ele,selector){
  console.log("plaatsKastPlank1 functie betreden");
  console.log("ele: " + ele);
  console.log("selector:  " + selector);
  console.log("hand : " + hand);
    if(selector == hand){
        loadCursor();
        var timer = setTimeout(function () {
            $('#'+ele).attr({
                color:'grey',
                opacity:'1'
            });
            document.getElementById(ele).removeAttribute('onmouseenter');
            $('#handbox').remove();
            $('#sd7').remove();
            $('#sd8').remove();
            $('#sd9').remove();
            $('#sd10').remove();
            $('#sd11').remove();
            $('#sd12').remove();
            hand = '';
            stepArray.shift();
            maakKastStappen();
            quitCursor();
        },1050);
        document.getElementById(ele).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}



function plaatsKastDeuvel(ele2,ele,selector){
  console.log("kast deuvel is geplaatst");
    if(selector == hand){
        loadCursor();
        var timer = setTimeout(function () {
            $('#'+ele2).attr({
                color:'#ffc570',
                opacity:'1'
            });
            document.getElementById(ele).removeAttribute('onmouseenter');
            document.getElementById(ele).setAttribute('onmouseenter','moveKastDeuvelPos("'+ele+'")');

            stepArray.shift();
            maakKastStappen();
            quitCursor();

        },1050);
        document.getElementById(ele).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}


function moveKastDeuvelPos(id){
    if(hand == 'p1'){

        $('#'+id).removeAttr('onmouseenter');
        var changePos = parseFloat(Object.values($('#'+id).attr('position'))[1]);
        var y = 0;
        var i = 0.015;
        var inter = setInterval(function () {
            newz = changePos-i;
            console.log(schroefVerplaatst);
            var newPos = Object.values($('#'+id).attr('position'))[0] + " "+ newz + " " + Object.values($('#'+id).attr('position'))[2];
            $('#'+id).attr('position',newPos);
            i+=0.015;
            y++;
            if(y>=3){
                clearTimeout(inter);

                kastDeuvelsVerplaatst += 1;
                console.log(kastDeuvelsVerplaatst);
                if(kastDeuvelsVerplaatst == 6 || kastDeuvelsVerplaatst == 12){
                    maakKastStappen();
                }
            }
        },400)
    }
}



function plaatsKastPlank3(ele, selector){
    console.log("plaatsKastPlank3 betreden");
    if(selector == hand){
        loadCursor();
        var timer = setTimeout(function () {
          if(ele == 'sbox1'){
            $('#d1').remove();
            $('#d2').remove();
            console.log('kd1 en kd2 verwijderd');
          } else if(ele == 'sbox2'){
            $('#d3').remove();
            $('#d4').remove();
            console.log('kd3 en kd4 verwijderd');
          } else if(ele == 'sbox3'){
            $('#d5').remove();
            $('#d6').remove();
            console.log('kd5 en kd6 verwijderd');
          }

            $('#'+ele).attr({
                color:'grey',
                opacity:'1'
            });
            document.getElementById(ele).removeAttribute('onmouseenter');
            stepArray.shift();
            maakKastStappen();
            quitCursor();
        },1050);
        document.getElementById(ele).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }

}


function placeschroef(ele2,ele,selector){
    if(selector ==  hand){
        loadCursor();
        var timer = setTimeout(function () {
            $('#'+ele2).remove();
            if(ele2 == 'sc1' || ele2 == 'sc2' || ele2 == 'sc3' || ele2 =='sc4')
            {
                $('#' + ele).append('<a-entity id="schroefappend" scale="0.03 0.03 0.03" position="0 0 0" rotation="0 90 0" obj-model="obj: #schroef-obj; mtl: #schroef-mtl"></a-entity>');
            }else{
                $('#' + ele).append('<a-entity id="schroefappend" scale="0.03 0.03 0.03" position="0 0 0" rotation="0 90 0" obj-model="obj: #schroef-obj; mtl: #schroef-mtl"></a-entity>');
            }

            if(ele2 == 'sc5' || ele2 == 'sc6' || ele2 == 'sc7' || ele2 =='sc8'){
                $('#' + ele).append('<a-entity id="schroefappend" scale="0.03 0.03 0.03" position="0 0 0" rotation="0 -90 0" obj-model="obj: #schroef-obj; mtl: #schroef-mtl"></a-entity>');
            }else{
                $('#' + ele).append('<a-entity id="schroefappend" scale="0.03 0.03 0.03" position="0 0 0" rotation="0 -90 0" obj-model="obj: #schroef-obj; mtl: #schroef-mtl"></a-entity>');
            }

            document.getElementById(ele).removeAttribute('onmouseenter');
            document.getElementById(ele).setAttribute('onmouseenter','movePosSchroef("'+ele+'")');

            stepArray.shift();
            maakKastStappen();
            quitCursor();
        },1050);
        document.getElementById(ele).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}



function movePosSchroef(id) {
    if (hand == 'p2') {
        $('#' + id).removeAttr('onmouseenter');
        var changePos = parseFloat(Object.values($('#' + id).attr('position'))[0]);
        var y = 0;
        if (id == 's5' || id == 's6' || id == 's7' || id == 's8') {
            var ii = 0.05;
            var inter = setInterval(function () {
                newzp = changePos - ii;
                var newPos = newzp + " " + Object.values($('#' + id).attr('position'))[1] + " " + Object.values($('#' + id).attr('position'))[2];

                $('#' + id).attr('position', newPos);
                ii += 0.05;
                y++;
                if (y >= 3) {
                    clearTimeout(inter);

                    kastDeuvelsVerplaatst += 1;
                    if (kastDeuvelsVerplaatst == 20) {
                        maakKastStappen();
                    }
                }
            }, 400)
        } else {
            var i = -0.05;
            var inters = setInterval(function () {
                var newzm = changePos - i;
                var newPos = newzm + " " + Object.values($('#' + id).attr('position'))[1] + " " + Object.values($('#' + id).attr('position'))[2];
                $('#' + id).attr('position', newPos);
                i -= 0.05;
                y++;
                if (y >= 3) {
                    clearTimeout(inters);

                    kastDeuvelsVerplaatst += 1;
                    if (kastDeuvelsVerplaatst == 16) {
                        maakKastStappen();
                    }
                }
            }, 400)
        }
    }
}



function volgendKastBlad(){
    kastUitleg = document.getElementById('handleidingKast');
    if(kastUitleg.getAttribute('src') != '13kaststap.jpg'){
        kastUitleg.setAttribute("src", parseInt(handleidingKast.getAttribute("src")) + 1 + "kaststap.jpg" );
    }
}







AFRAME.registerComponent("hit",{
    schema : {
        rotation : {type : "string"},
        from: {type: "string"},
        id : {type: "string"},
        animation : {type: "string"}
    },
    init : function(){
        this.el.addEventListener("mouseenter",function(){
            if(hand == 'p1'){
                audio.play();
            }
            var animation = document.createElement("a-animation");
            animation.setAttribute("id",this.data.animation);
            animation.setAttribute("attribute","rotation");
            animation.setAttribute("from",this.data.from);
            animation.setAttribute("to",this.data.rotation);
            animation.setAttribute("direction","alternate");
            animation.setAttribute("dur","250");
            animation.setAttribute("repeat","5");
            document.getElementById(this.data.id).appendChild(animation);
        }.bind(this));
    }
});



/* API functies */

function ikeahover(selector) {
  console.log('ikea seen');
  if (ikeachange == false) {

    loadCursor();
    var timer = setTimeout(function() {
      document.getElementById('ikea').setAttribute("text", "align: center; width: 3; value: " + afstand());
      document.getElementById('ikea').setAttribute('position', '-0.5 1.3 3.3');
      $('#scene').append('<a-box id="ikeawebsite"  position="0 1 3.3" color="red" opacity="0" width="3" height="0.4"></a-box>');

      ikeachange = true;
    }, 1050);

    document.getElementById(selector).addEventListener('mouseleave', function() {
      clearTimeout(timer);
      quitCursor();
    })
  }
}




function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  homelat = position.coords.latitude;
  homelng = position.coords.longitude;
}

function afstand() {
  var data = $.getJSON({
    url: 'locaties.JSON',
    async: false
  }).responseJSON.items;
  vorigeAfstand = 0;
  kleinsteAfstand = 0;
  afstand = 500;

  // loop door de json array waar de locaties inzitten
  for (var i = 0; i < data.length; i++) {

    if (afstand > onLocationChanged(data[i])) {
      vorigeAfstand = kleinsteAfstand;
      afstand = onLocationChanged(data[i]);
      kleinsteAfstand = i;

    } else if ((afstand < onLocationChanged(data[i])) && (kleinsteAfstand > onLocationChanged(data[i]))) {
      vorigeAfstand = i;
    }
  }

  return String(data[kleinsteAfstand].name + ' is op ' + round(onLocationChanged(data[kleinsteAfstand]), 2) + ' km afstand \n '


    +
    '\n' + data[vorigeAfstand].name + ' is op ' + round(onLocationChanged(data[vorigeAfstand]), 2) + ' km afstand \n');
}

// afstand berekenen
function onLocationChanged(location) {

  var lat2 = location.long;
  var lng2 = location.lat;
  return distance(homelat, homelng, lat2, lng2);

}

/** afstand tussen twee locaties berekenen in miles */
function distance(lat1, lng1, lat2, lng2) {

  var earthRadius = 6371; // om miles om te zetten naar kilometer

  var dLat = Math.radians(lat2 - lat1);
  var dLng = Math.radians(lng2 - lng1);

  var sindLat = Math.sin(dLat / 2);
  var sindLng = Math.sin(dLng / 2);

  var a = Math.pow(sindLat, 2) + Math.pow(sindLng, 2) * Math.cos(Math.radians(lat1)) * Math.cos(Math.radians(lat2));

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  var dist = earthRadius * c;
  return parseFloat(dist); // output is in k
}

// omzetten van degrees naar radians
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

// omzetten van radians naar degrees
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
