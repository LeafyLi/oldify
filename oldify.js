console.log('does this happen?');
if (window.location.href.includes('www.reddit.com')) {
  window.location.href = window.location.href.replace('www.reddit.com', 'old.reddit.com');

}