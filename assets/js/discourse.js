var url = document.currentScript.getAttribute('x-url');
DiscourseEmbed = { discourseUrl: 'https://community.cryptomator.org/', discourseEmbedUrl: url };
(function() {
  var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;
  d.src = DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
})();
