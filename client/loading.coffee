Template.loading.rendered = ->
  if !Session.get('loadingSplash')
    @loading = window.pleaseWait(
      backgroundColor: '#544c4c'
      loadingHtml: message + spinner)
    Session.set 'loadingSplash', true

Template.loading.destroyed = ->
  if @loading
    @loading.finish()
  return

message = '<p class="loading-message">Loading Message</p>'
spinner = '<div class="sk-spinner sk-spinner-rotating-plane"></div>'
