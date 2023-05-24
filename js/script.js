"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-02-HTML/sw.js", {
    scope: "/ICS2O-Unit6-02-HTML/",
  })
}

function cookies() {
  if (localStorage.hits) {
    localStorage.hits++
  } else {
    localStorage.hits = 1
  }

  document.getElementById("total").innerHTML =
    "You have click" + localStorage.hits + "!"
}
