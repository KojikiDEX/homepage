$(document).ready(function () {
  new fullpage("#fullpage", {
    licenseKey: "gplv3-license",
    navigation: false,
    scrollingSpeed: 1000,
    scrollHorizontally: true,
    loopHorizontal: false,
    slidesNavigation: false,
    controlArrows: true,
    afterRender: function () {
      var arrowColor = "#95a6b4";
      $(".fp-controlArrow.fp-next").each(function () {
        this.style.setProperty("border-left-color", arrowColor, "important");
      });
      $(".fp-controlArrow.fp-prev").each(function () {
        this.style.setProperty("border-right-color", arrowColor, "important");
      });
    },
    afterSlideLoad: function (section, origin, destination, direction) {
      var loadedSlide = this;
      //first slide of the second section
      if (destination.index == 1) {
        $(destination.item)
          .find(".has-animation")
          .each(function (index) {
            $(this)
              .delay($(this).data("delay"))
              .queue(function () {
                $(this).addClass("animate-in");
              });
          });
      }
    },
  });
});

$(".navbar a.clickable-text").on("click", function (e) {
  e.preventDefault();
  var target = parseInt($(this).data("target"));
  fullpage_api.moveTo(1, target - 1);
});
