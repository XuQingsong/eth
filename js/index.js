var page = {
  scoll:function(){
    $(window).scroll(function(e){
      var e = e || window.event;
      var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
      // console.log("scrolltop",scrolltop);
      
      if (scrolltop>100){
        $(".header").addClass('scollon');
      }else{
        $(".header").removeClass('scollon');
      }
      
      if($(".fix-bar").length>0){
        if (scrolltop>100){
          $(".fix-bar").fadeIn();
        }
        else
        {
          $(".fix-bar").fadeOut();
        }
      }
      
      $(".part").each(function(){
        // console.log("Top", $(this).height(),$(this).index());
        if(scrolltop >= $(this).offset().top - $(window).height() + 600){
          var id = $(this).attr("id");
          if(!$(this).hasClass('active')){
            $(this).addClass('active');
            
            console.info('To:'+ id);

            switch(id){
              case "progress":
                pageAnime.progressLine.play();
                break;
              case "home":
              console.log('home');
                pageAnime.earthEffect.play();
                 break;
            }


            
          }

          
              

          $(".home-side-nav a").removeClass('active');
          $(".home-side-nav a[href=#"+id+"]").addClass('active');

        }
        //还原
        // if(scrolltop > $(this).height()*$(this).index() - 200){
        //   if($(this).hasClass('active')){
        //     $(this).removeClass('active');
        //   }
        // }
      })
      
    });
    

  },
  setEvent:function(){
    var _self = this;
    $( document ).on( "click", "#top", function() {
      //返回顶部 当点击跳转链接后，回到页面顶部位置 
      $('body,html').animate({scrollTop:0},500);
      return false;
    }).on("click",".home-side-nav a",function(){
      var target = $(this).attr('href');
      if($(target).length > 0){
        $('body,html').animate({scrollTop:$(target).offset().top - 80},500);
      }
      return false;
    }).on("click",".nav-bar a[rel=toPage]",function(){
      var target = $(this).attr('href');
      var page = 'page-' + target.replace(/#/,'');
      //console.log("page",page);
      _self.setTpl(page,config);
      $('.nav-bar a').removeClass('active');
      setTimeout(function(){
        $('body,html').animate({scrollTop:0},500);
        // $(this).addClass('active').parent('.sub-nav').prev('a').addClass('active');
        $(".nav-bar a[href="+target+"]").addClass('active').parent('.sub-nav').prev('a').addClass('active');
        $(target).addClass('active');
        _self.btnEffect();
        pageAnime.init();
      },200)
      
      
      return false;
    });
  },
  setTpl:function(page,data){
    var tpl = template(page,data);
    $('.wrapper-inner').html(tpl);
  },
  setCarousel:function(){
    $('.team-list').owlCarousel({
      items:4,
      //dots:false
      // nav:true,
    });

    $('.partner-list').owlCarousel({
      items:1
    });

    $('.news-list').owlCarousel({
      items:3,
    });
  },
  btnEffect:function(){
    $('.primary-button').on('mousemove',function(e){
      var x = e.pageX - e.target.offsetLeft
      var y = e.pageY - e.target.offsetTop

      e.target.style.setProperty('--x', `${ x }px`);
      e.target.style.setProperty('--y', `${ y }px`);
    })
  },
  homeBar:function(){
    $('.home-bar').on('click','.ctrl',function(){
      if($('.home-bar').hasClass('open')){
        $('.home-bar').removeClass('open');
      }else{
        $('.home-bar').addClass('open');
      }
    })
  },
  opening:function(){
    var open_flag = localStorage.getItem('op');
    console.log(open_flag);
    if(open_flag == null){
      localStorage.setItem('op',1);
       open.init();
    }else{
      $('.open-wrapper').hide();
      setTimeout(function(){
        $('body').addClass('open-end');
        $('#home.part').addClass('active');
        pageAnime.earthEffect.play();
      },100)
    }
  },
  init:function(){
    this.scoll();
    this.setEvent();
    this.setTpl('page-index',config);
    this.setCarousel();
    this.btnEffect();
    this.homeBar();
    this.opening();
    pageAnime.init();
    
  }
}


htmlImport.getFile(config.file);
htmlImport.ready(page,'init');