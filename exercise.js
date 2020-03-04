var level;
var currentLevel = parseInt(window.localStorage.getItem('currentLevel'), 10) || 0;
$(document).ready(function () {
  (function () {

    var tour = new Tour();

    tour.addSteps([
      {
        element: "h1",
        placement: "bottom",
        backdrop: true,
        title: "Welcome to the `locator game`!",
        content: "Find here the assignments you have to complete."
      },
      {
        element: ".html",
        placement: "bottom",
        backdrop: true,
        title: "HTML",
        content: "This is how the HTML looks like."
      },
      {
        element: "#render",
        placement: "top",
        backdrop: true,
        title: "Rendered",
        content: "This is how the HTML will look like once rendered."
      },
      {
        element: "#type",
        placement: "top",
        backdrop: true,
        title: "Select type",
        content: "Select how you want to locate the element. CSS or XPath."
      },
      {
        element: "#expression",
        placement: "top",
        backdrop: true,
        title: "Locate",
        content: "Type the locator expression."
      },
      {
        element: "#toggleHelp",
        placement: "bottom",
        backdrop: true,
        title: "Help",
        content: "Click here if you need help."
      }
    ]);

    // Initialize the tour
    tour.init();

    // Start the tour
    tour.start();

  }());


  level = levels[currentLevel];
  loadLevel();

  setProgress();

  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block);
  });

  $('#toggleHelp').click(function (event) {
    $('#help').toggle();
  });

  $('#try').click(function (event) {
    event.preventDefault();
    var userExpr;
    if ($("#type").val() === 'XPath') {
      userExpr = $('#render').find(_x($("[name='expression']").val()));
    } else {
      userExpr = $('#render').find($("[name='expression']").val())
    }
    userExpr.addClass('highlight');
    setTimeout(function () {
      userExpr.removeClass('highlight');
    }, 500);
  });

  $('form').submit(function (event) {
    event.preventDefault();
    var win = false;
    var userExpr;
    var ruleExpr;
    if (level.selector.css === undefined) {
      ruleExpr = $('#render').find(_x(level.selector.xpath));
    } else {
      ruleExpr = $("#render").find(level.selector.css);
    }

    if ($("#type").val() === 'XPath') {
      userExpr = $('#render').find(_x($("[name='expression']").val()));
    } else {
      userExpr = $('#render').find($("[name='expression']").val())
    }
    userExpr.addClass('highlight');

    win = (userExpr.sequenceEqual(ruleExpr));
    if (win) {
      currentLevel++;
      $.toaster({message: 'Well done!', title: '', priority: 'info'});
      // $('#console').text("Well done!");

      setProgress();

      if (currentLevel >= levels.length) {
        $.toaster({message: 'Completed everything!', title: '', priority: 'success'});

        // $('#console').text("Completed everything");
        window.localStorage.setItem("currentLevel", 0);
        $("#type").prop("disabled", true);
        $('input[name="expression"]').prop("disabled", true);
        $('button').prop("disabled", true);
        $('#share').modal('toggle');
      } else {
        setTimeout(function () {
          loadLevel();
        }, 500);
      }
    } else {
      setTimeout(function () {
        userExpr.removeClass('highlight');
        $('input[name="expression"]').val('');
        // $('#console').text("Please, try agian!");
        $.toaster({message: 'Please, try again...', title: '', priority: 'warning'});
      }, 500);
    }
  });
});

$.fn.sequenceEqual = function (compareTo) {
  if (!compareTo || !compareTo.length || this.length !== compareTo.length) {
    return false;
  }
  for (var i = 0, length = this.length; i < length; i++) {
    if (this[i] !== compareTo[i]) {
      return false;
    }
  }
  return true;
}

$.fn.contentsEqual = function (compareTo) {
  return compareTo && this.length === compareTo.length && this.length === this.filter(compareTo).length;
}

function loadLevel() {
  // clean form
  $('#help').hide();
  $('#type').val('CSS');
  $('input[name="expression"]').val('');
  $('#console').text('');
  $('#helpTitle').text('');
  $('#helpText').html('');
  $('#examples').html('');

  window.localStorage.setItem("currentLevel", currentLevel);

  level = levels[currentLevel];
  $('h1').text(level.instruction);
  $('#render').html(level.html);
  $('pre code').text(level.html);
  $('#helpTitle').text(level.helpTitle);
  $('#helpText').html(level.helpText);
  level.examples.forEach(function (item) {
    $('#examples').append('<div>' + item + '</div>');
  });
}

function setProgress() {
  var progress = 100 / (levels.length / currentLevel);
  $('.progress-bar').css('width', progress + '%').attr('aria-valuenow', progress).text("Level " + (currentLevel) + " of " + levels.length);
}

function _x(STR_XPATH) {
  var xresult = document.evaluate(STR_XPATH, document, null, XPathResult.ANY_TYPE, null);
  var xnodes = [];
  var xres;
  while (xres = xresult.iterateNext()) {
    xnodes.push(xres);
  }

  return xnodes;
}
