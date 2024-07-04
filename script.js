// let results = {
//   tag: "",
//   free: true,
//   role: false,
//   user: "bandarurajesh4134",
//   email: "bandarurajesh4134@gmail.com",
//   score: 0.64,
//   state: "deliverable",
//   domain: "gmail.com",
//   reason: "valid_mailbox",
//   mx_found: true,
//   catch_all: null,
//   disposable: false,
//   smtp_check: true,
//   did_you_mean: "",
//   format_valid: true,
// };
// let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Clicked");
  resultCont.innerHTML = `<img src="./images/loading.svg" width="50px" alt="">`
//   let apiKey = "ema_live_EXz0OFULltHk2iePHJdXdI8TUvwwRAq5D1TjGHev";
  let email = document.getElementById("email").value;
  //   return;
  let url = `https://api.emailvalidation.io/v1/info?apikey=ema_live_EXz0OFULltHk2iePHJdXdI8TUvwwRAq5D1TjGHev&email=${email}`;
  let res = await fetch(url);
  let results = await res.json();
  let str = ``;
  for (key of Object.keys(results)) {
    //   console.log(item);
    if (results[key] !== "" && results[key] !== " ") {
      str = str + `<div>${key}: ${results[key]}</div>`;
    }
  }
//   console.log(str);
  resultCont.innerHTML = str;
});
