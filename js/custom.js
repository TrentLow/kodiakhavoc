$(document).ready(function() {
  var userFeed = new Instafeed({
    get: "user",
    userId: "10436365382",
    limit: 8,
    resolution: "thumbnail",
    accessToken: "10436365382.1677ed0.2e58e08cfe5e472eb8132b6de9c777f3",
    sortBy: "most-recent",
    template:
      '<div class="gallery instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
  });
  userFeed.run();
});
