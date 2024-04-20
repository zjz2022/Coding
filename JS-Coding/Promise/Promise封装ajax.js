//Promise封装ajax
function myAjax(url, method, data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.send(data)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText)
      }
    }
  })
}

myAjax('http://localhost:3000', 'GET').then(
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  }
)
