// const request = new XMLHttpRequest();
// request.open('GET', 'http://qq.com:8080/data.json');
// request.onreadystatechange = ()=> {
//   if(request.readyState === 4 && request.status === 200) {
//     console.log(request.response);
//   }
// }

// request.send();

// const random = 'nuolu9999' + Math.random();
// console.log(random);
// window[random] = (data)=> {
//   console.log(data);
// }

// const script = document.createElement('script');
// script.src = `http://qq.com:8080/data.js?functionName=${random}`;
// script.onload = ()=> {
//   script.remove();
// }
// document.body.appendChild(script);

// 封装JSONP
function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = 'nuolu' + Math.random();
    window[random]= data => {
      resolve(data);
    };
    const script = document.createElement("script");
    script.src = `${url}?callback=${random}`;
    script.onload = () => {
      script.remove();
    };
    script.onerror = () => {
      reject();
    };
    document.body.appendChild(script);
  });
}

jsonp("http://qq.com:8080/data.js").then(data => {
  console.log(data);
});
// function jsonp(url) {
//   return new Promise((resolve, reject)=> {
//     const random = "nuolu" + Math.random();
//     window[random] = data => {
//       resolve(data);
//     };
//     const script = document.createElement("script");
//     script.src = `${url}?function=${random}`;
//     script.onload = ()=> {
//       script.remove();
//     };
//     script.onerror = ()=> {
//       reject();
//     };
//     document.body.appendChild(script);
//   });
// }
// jsonp('http://qq.com:8080/data.js').then((data)=> {
//   console.log(data);
// })