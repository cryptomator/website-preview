function guessDownloadTab() {
  if (navigator.appVersion.indexOf('iPhone') !== -1 || navigator.appVersion.indexOf('iPad') !== -1 || navigator.appVersion.indexOf('iPod') !== -1) {
    return 'ios';
  } else if (navigator.appVersion.indexOf('Android') !== -1) {
    return 'android';
  } else if (navigator.appVersion.indexOf('Linux') !== -1 ||┬ánavigator.appVersion.indexOf('X11') !== -1) {
    return 'linux';
  } else if (navigator.appVersion.indexOf('Mac') !== -1) {
    return 'mac';
  } else {
    return 'win';
  }
}
