fetch('https://ig.instant-tokens.com/users/a894c61e-1c13-4978-94cd-f9fe73fbb5d2/instagram/17841404340334440/token?userSecret=52x5h0jrs231k4gr6f08ds')
  .then(resp => resp.json())
  .then(data => {
        var feed = new Instafeed({
          get: 'user',
          target: "instafeed-container",
          limit: 6,
          resolution: 'low_resolution',
          accessToken: data.Token,
          template: '<a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}" /><div></div></a>',
        });
        feed.run();
});
