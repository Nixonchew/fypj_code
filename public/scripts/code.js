const chinatown = [ 
    { 
        name: "Chinese Heritage Center", 
        location: { 
            lat: 1.445757, // add here latitude if using static data 
            lng: 103.795065, // add here longitude if using static data 
  
        },
        content:"Get transported back in time and experience the footsteps \n of migrants in the late 19th century of singapore",
        src:'https://rayrixo.github.io/Fyp_testingAR/testin.html' 
    }, 
  
    { 
        name: "Sri Maraimman Temple", 
        location:{ 
            lat:1.445405, 
            lng:103.795335, 
        },
        content:'This hindu temple is the oldest \n and largest of its kind in singapore',
        src:'https://rayrixo.github.io/Fyp_testingAR/SriMariamman.html'  
    }, 
  
    { 
        name: "Masjid Jamae", 
        location:{ 
            lat:1.445077, 
            lng:103.794433, 
        },
        content:'Established in 1826 it is one of the oldest mosque in \n singapore One of the only six in the \n country that conducts sermons in tamil',
        src:'https://rayrixo.github.io/Fyp_testingAR/MasjidJamae.html' 
    }, 
  
    { 
        name: "Mural at Mohamed Ali Lane", 
        location:{ 
            lat:1.2827594818546095,  
            lng:103.84583411762635, 
        }, 
        content:'Witness murals that depict the past \n through the eyes of singaporean artist Yip Yew Chong.',
        src:'https://rayrixo.github.io/Fyp_testingAR/MuralStreet.html'
    }, 
  
    { 
        name: "Tong Heng", 
        location:{ 
            lat:1.281370, 
            lng:103.844937, 
        },
        content:'Tong Heng is the oldest confectioneries. \n Witness a story of resilience, \n determination and resourcefulness.',
        src:'https://rayrixo.github.io/Fyp_testingAR/TongHeng.html'
    }, 
  
    { 
        name: "Buddha Tooth Relic Temple", 
        location:{ 
            lat:1.281458, 
            lng:103.844192, 
        },
        content:'This place hold special meaning for buddhist people as it stores the left canine tooth of buddha',
        src:'https://rayrixo.github.io/Fyp_testingAR/BuddhaToothRelic.html' 
    }, 
  
    { 
        name: "Sago Street", 
        location:{ 
            lat:1.281683, 
            lng:103.844203, 
        },
        content:'Experience the street of the dead where immigrants of the past with no family lived and died',
        src:'https://rayrixo.github.io/Fyp_testingAR/SagoStreet.html' 
    }, 
  ];
  
  window.onload = () => {
    var landmarkIndex
    var localStorage= window.localStorage 
  
    const congratButton = document.getElementById('congrats_button');
    if (congratButton){
        congratButton.onclick = function(){
            window.location = "https://nixonchew.github.io/fypj/main.html";
        }
    }
    const indexButton_Testin = document.getElementById('complete_testin');
    indexButton_Testin.onclick = function(){
        window.location.href = "https://finalyearproject-631fc.web.app/main.html";
        if (localStorage.getItem('landmarkIndex')){ 
            var landmarkIndex=parseInt(localStorage.getItem('landmarkIndex')); 
            
        } else{ 
            var landmarkIndex = 0
        }
        landmarkIndex +=1
        localStorage.setItem('landmarkIndex',landmarkIndex)
    } 
 
      
}