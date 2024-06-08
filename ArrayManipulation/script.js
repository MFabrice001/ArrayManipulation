function checkSubarraySum() {
  const arrayInput = document.getElementById('arrayInput').value;
  const targetInput = document.getElementById('targetInput').value;
  const resultElement = document.getElementById('result');

  // Parse the input values
  const arr = arrayInput.split(',').map(Number);
  const target = Number(targetInput);

  // Function to check if a subarray with the given sum exists
  function hasSubarrayWithSum(arr, target) {
      let currentSum = 0;
      const sumMap = new Map();

      for (let i = 0; i < arr.length; i++) {
          currentSum += arr[i];

          if (currentSum === target) {
              return true;
          }

          if (sumMap.has(currentSum - target)) {
              return true;
          }

          sumMap.set(currentSum, i);
      }

      return false;
  }

  // Check the result
  const result = hasSubarrayWithSum(arr, target);
  resultElement.textContent = result ? 'True: Subarray exists' : 'False: Subarray does not exist';
}
