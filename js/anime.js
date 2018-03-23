var pageAnime = {
	progressLine:anime.timeline({
      duration: 3500,
      delay:1000,
      loop: true,
      autoplay:false,
      update:function(anim){
        // console.log("progress",anim.progress);
        if(Math.round(anim.progress) == 28){
          $('#progress .cube').eq(0).attr('class','cube active');
        }

        if(Math.round(anim.progress) == 37){
          $('#progress .cube').eq(1).attr('class','cube active');
        }

        if(Math.round(anim.progress) == 48){
          $('#progress .cube').eq(2).attr('class','cube active');
        }

        if(Math.round(anim.progress) == 55){
          $('#progress .cube').eq(3).attr('class','cube active');
        }

        if(Math.round(anim.progress) == 65){
          $('#progress .cube').eq(4).attr('class','cube active');
        }

        if(Math.round(anim.progress) == 100){
          $('#progress .cube').attr('class','cube');
        }
      }
    }),
    earthEffect:anime.timeline({
    	autoplay:false,
    }),
    init:function(){
    	this.progressLine.add({
	      targets: '.progress-line .st0',
	      strokeDashoffset: [anime.setDashoffset, 0],
	      easing: 'linear',
	      opacity:1
	    }).add({
	      targets: '.progress-line .st0',
	      duration: 300,
	      opacity:0,
	      easing: 'linear',
	    });

	    this.earthEffect
	    .add({
	    	targets:".earth",
	    	opacity:0,
	    	scale:0.8,
	    	duration: 1,
	    })
	    .add({
	    	targets:".earth",
	    	opacity:1,
	    	scale:1,
	    	duration: 800,
	    	easing: 'easeInQuad',
	    })
	    .add({
	    	targets:".earth #outline .st0",
	    	duration: 800,
	    	strokeDashoffset: [anime.setDashoffset, 0],
	    	easing: 'linear',
	    })
	    .add({
	    	targets:".earth #outline .st27",
	    	duration: 800,
	    	strokeDashoffset: [anime.setDashoffset, 0],
	    	easing: 'linear',
	    })
	    .add({
	    	targets:".earth #backline path",
	    	duration: 800,
	    	strokeDashoffset: [anime.setDashoffset, 0],
	    	easing: 'linear',
	    })
	    .add({
	    	targets:".earth #point .st28",
	    	duration: 200,
	    	opacity:1,
	    	easing: 'linear',
	    	delay: function(el, i, l) {
			    return i * 50;
		    }
	    })
	    
	    var line27 = anime({
	    	targets:"#line .st27",
	    	fillOpacity:0.1,
	    	direction: 'alternate',
	    	loop: true,
		  	autoplay:false,
	    	delay: function(el, i, l) {
			    return i * 300;
			}
	    })
	    var point29 = anime({
		  targets: '#point .st29',
		  opacity:.2,
		  direction: 'alternate',
		  loop: true,
		  autoplay:false,
		  duration: 800,
		  delay: function(el, i, l) {
		    return i * 200;
		  }
		})

		var earth = anime({
	    	targets:".earth",
	    	rotate:360,
	    	duration: 98800,
	    	loop: true,
		  	autoplay:false,
		  	easing: 'linear',
	    })

	    this.earthEffect.complete = function(){
	    	console.log("earthEffect-complete");
	    	point29.play();
	    	line27.play();
	    	earth.play();
	    }



	    var contact12 =  anime({
	    	targets:".contact-svg .st12",
	    	opacity:1,
	    	direction: 'alternate',
	    	duration: 400,
	    	loop: true,
		  	// autoplay:false,
		  	easing: 'linear',
		  	delay: function(el, i, l) {
			    return i * 100;
		  	},
		  	update:function(anim){
		  		if(Math.round(anim.progress) == 50){
		  		contact13.play();
		  		}
		  	}
	    })

	    var contact13 =  anime({
	    	targets:".contact-svg .st13",
	    	opacity:0.2,
	    	direction: 'alternate',
	    	duration: 800,
	    	loop: true,
		  	autoplay:false,
		  	easing: 'linear',
		  	delay: function(el, i, l) {
			    return i * 200;
		  	}
	    })
	    




    }
    
}



var open = {
  
  logoPath:anime.timeline({
    targets: '#logo polygon',
    easing: 'easeInOutSine',
    duration: 500,
    delay: function(el, i) { return i * 100 },
    autoplay:false,
    
  }),

  line:anime.timeline({
    targets: '#line',
    easing: 'easeInOutQuad',
    duration: 1000,
    delay:1500
    
    //loop:true
  }),

  cssPie: anime.timeline({
    targets: '#sectorPie',
    easing: 'linear',
    duration: 3000,
    run: function(anim) {
      if(Math.round(anim.progress) >=40){
        open.shadowPie.play();
      }
    },
  }),

  shadowPie:anime.timeline({
    targets: '#sectorPie .shadow',
    easing: 'easeInOutQuad',
    duration: 700,
    autoplay:false
  }),

  thPie:anime({
    targets: '#thPie circle',
    strokeDasharray: '100 100',
    easing: 'easeInOutQuad',
    duration: 800,
    opacity:0,
    delay:500
  }),

  cssHexagon:anime.timeline({
    targets: '#sectorHexagon .hexagon',
    easing: 'easeInOutQuad',
    delay: function(el, i, l) {
      return i * 400;
    },
    complete: function(anim) {},
    duration: 2000,
    //loop:true
  }),

  init:function(){
    open.logoPath
    // .add({
    //   strokeDashoffset: [anime.setDashoffset, 0],
    // })
    .add({
      opacity:1,
      offset:700
    });
    // .add({
    //   opacity:0,
    //   translateY: -250,
    // });

	open.logoPath.complete=function(anim) {
      logo.play();
    }

    open.line.add({
      width:'100vw',
      height:'100vw',
    }).add({
      opacity: 0,
      offset: 1000
    });

    open.cssPie.add({
      scale:1.5,
      duration: 2000
    }).add({
      scale:1.8,
      opacity:0,
      offset:1000
    });

    open.shadowPie.add({
      opacity:1,
    }).add({
      opacity:0,
    })



   

    open.cssHexagon.add({
      opacity: 0,
      //duration: 500,
    }).add({
      opacity: 1,
      scale:0.15,
      duration: 1800,
      offset: 50
    }).add({
      opacity: 0,
      //duration: 1200,
      offset: 1500
    });


    var inner=anime({
	    targets: '.open-wrapper .inner',
	    easing: 'easeInOutQuad',
	    duration: 4000,
	    rotate: '0.2turn',
	    run: function(anim) {
	      if(Math.round(anim.progress) ==55){
	        open.logoPath.play();
	      }
	    },
	    //loop:true
	  })

    var cssCircle = anime({
	    targets: '#sectorPie circle',
	    strokeDasharray: '25.132741228718345 100',
	    easing: 'easeInOutQuad',
	    duration: 800,
	    //loop:true
	  })

    var logo=anime({
	    targets:'#logo',
	    easing: 'easeInOutSine',
	    duration: 500,
	    opacity:0,
	    delay:1000,
	    translateY: -250,
	    autoplay:false
	  })

    logo.complete = function(){
    	$('.open-wrapper').fadeOut(function(){
    		$('body').addClass('open-end');
    		$('#home.part').addClass('active');
    		pageAnime.earthEffect.play();
    	});
    	
    }
  }
}