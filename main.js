

Webcam.set({

    width: 350,
    height: 300,
    image_format : 'png',
    png_quality: 90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach( '#Camera ');
    
    function capture_image() {
    
        Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    
        });
    }
    
    console.log('ml5 version :', ml5.version);
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bjm3wx5iE/model.json', modelloaded);
        
    function modelloaded() {
    console.log('Model Loaded!');
    }
    
    function identify_image() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult)
    }
    
    function gotResult(error, results) {
    
        if(error) {
            console.log(error);
        }
        else{
    console.log(results);
    document.getElementById("object").innerHTML = results[0].label ;
    document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3) ;
    
        }
    
    
    
    
    
    }
        
        