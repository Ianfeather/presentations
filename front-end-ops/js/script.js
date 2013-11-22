var frontEndOps = (function(){

  NodeList.prototype["forEach"] = []["forEach"];

  var hasSubsteps = function(slide){
    return slide.querySelectorAll('.js-substep').length
  },

  showLinks = function(slide) {
    slide.classList.toggle('showing-links');
  },


  shuffleActiveStep = function(slide) {
    var substeps = slide.querySelectorAll('.js-substep'),
        foundNext = false;

    if (substeps.length === 1) {
      return impress().processKeyup(event);
    }

    substeps.forEach(function(substep, index){
      if (substep.classList.contains('is-active') && !foundNext) {
        substep.classList.remove('is-active');
        substep.classList.remove('js-substep');
        substep.nextElementSibling.classList.add('is-active')
        foundNext = true;
      }
    });

  };

  document.addEventListener("keyup", function ( event ) {
    var keyCode = event.keyCode || event.which || event.charCode,
        hash = location.hash.split(/#\//)[1],
        $this = document.getElementById(hash),
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

