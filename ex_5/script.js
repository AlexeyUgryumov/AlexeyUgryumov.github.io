  window.addEventListener('DOMContentLoaded', function (event) {
    let re = /^\d+$/;
    console.log("DOM fully loaded and parsed");
    document.getElementById("button1").addEventListener("click", function (event) {
        if(re.test(document.getElementById("field1").value) && re.test(document.getElementById("field2").value)){
            document.getElementById("result").innerHTML = parseInt(document.getElementById("field1").value) * parseInt(document.getElementById("field2").value);
        } else {
            document.getElementById("result").innerHTML = "Введите корректные данные";
        }
    });
  });