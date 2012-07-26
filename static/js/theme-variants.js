(function (window, $) {
  $.cookie.defaults.expires = 30;
  $.cookie.defaults.path = '/';

  function set_link_label() {
      var link = $('a.switch-theme');

      if($.cookie('dark_theme') === "true") {
          link.text('light');
      } else {
          link.text('dark');
      };
  }

  $(function() {
    set_link_label();

    if($.cookie('dark_theme') === "true") {
      $('body').addClass('dark');
    }
  });

  $('a.switch-theme').click(function() {
    // toogle css class.
    $('body').toggleClass('dark');
    // set cookie
    $.cookie('dark_theme', $('body').hasClass('dark'));

    set_link_label();
  });
})(window, $, undefined);