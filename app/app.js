for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    document.getElementById("square-container").innerHTML += `
    <div class="bg-secondary d-flex justify-content-center align-items-center square rounded-3 mb-3">
        <div class="text-center">
            Fizz Buzz
        </div>
    </div>
    `;
  } else if (i % 3 == 0) {
    document.getElementById("square-container").innerHTML += `
    <div class="bg-secondary d-flex justify-content-center align-items-center square rounded-3 mb-3">
        <div class="text-center">
            Fizz
        </div>
    </div>
    `;
  } else if (i % 5 == 0) {
    document.getElementById("square-container").innerHTML += `
    <div class="bg-secondary d-flex justify-content-center align-items-center square rounded-3 mb-3">
        <div class="text-center">
            Buzz
        </div>
    </div>
    `;
  } else {
    document.getElementById("square-container").innerHTML += `
    <div class="bg-secondary d-flex justify-content-center align-items-center square rounded-3 mb-3">
        <div class="text-center">
            ${i}
        </div>
    </div>
    `;
  }
}
