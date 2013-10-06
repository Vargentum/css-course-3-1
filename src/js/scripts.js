(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    function equalise($obj){
      var height = $obj.parent().outerHeight();
      $obj.outerHeight(height);
    }
    if(!Modernizr.flexbox){
      var aboutAuthor = $('.aboutAuthor');
      var aboutAuthorElems = $('.aboutAuthor').children();
      equalise(aboutAuthorElems);
      equalise(aboutAuthor);
    }
  });

})(jQuery, window, document);
