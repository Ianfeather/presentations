var frontEndOps = (function(){

  NodeList.prototype["forEach"] = []["forEach"];

  var hasSubsteps = function(slide){
    return slide.querySelectorAll('.js-substep').length
  },

  showLinks = function(slide) {
    slide.querySelector('.js-links').classList.toggle('is-hidden')
  };

  shuffleActiveStep = function(slide) {
    var substeps = slide.querySelectorAll('.js-substep'),
        next = false;
    
    if (substeps[substeps.length -1].classList.contains('is-active')) {
      return impress().processKeyup(event);
    }

    substeps.forEach(function(substep, index){
      if (substep.classList.contains('is-active')) {
        next = true;
        substep.classList.remove('is-active');
      } else {
        if (next) {
          substep.classList.add('is-active');
        }
      }
    });

  }

  document.addEventListener("keyup", function ( event ) {
    var keyCode = event.keyCode || event.which || event.charCode,
        $this = document.getElementById(location.hash.split(/#\//)[1]),
        userHelpButton = 73; // i

    if (keyCode === userHelpButton) {
      showLinks($this)
    } else {
      if (hasSubsteps($this)) {
        shuffleActiveStep($this);
      } else {
        // Just get on with the presentation
        impress().processKeyup(event);
      }
    }
    
  }, false);

})()

