    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let points = [];
    let cycles = [];

    // Handle canvas click to add points
    canvas.addEventListener('click', (event) => {
      if (points.length < 30) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        points.push({ x, y });
        
        // Draw the point on the canvas
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
      } else {
        alert("Cycle limit reached: 30 points. Save the cycle before adding more points.");
      }
    });

    // Save a complete cycle
    function saveCycle() {
      if (points.length !== 30) {
        alert("A cycle must contain exactly 30 points.");
        return;
      }
      cycles.push({ cycle: cycles.length + 1, points: [...points] });
      points = [];
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas for the next cycle
      alert("Cycle saved successfully.");
    }

    // Download all cycles as a JSON file
    function downloadJSON() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cycles));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "mapping_data.json");
      downloadAnchor.click();
    }

    // Load and draw the average cycle
    async function loadAverageCycle() {
      try {
        const response = await fetch('average_cycle.json');  // Fetch JSON file from server
        const data = await response.json();
        
        // Calculate color intensity based on deviation
        data.points.forEach(point => {
          let color = calculatePointColor(point.deviation); // Add deviation field in JSON if available
          drawPoint(point.x, point.y, color);
        });
      } catch (error) {
        console.error("Failed to load average_cycle.json", error);
      }
    }

    // Function to draw a point with a specific color
    function drawPoint(x, y, color) {
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    }

    // Calculate color based on deviation - more red for higher deviation
    function calculatePointColor(deviation) {
      const maxDeviation = 10; // Define a max deviation for color scaling
      const intensity = Math.min(255, (deviation / maxDeviation) * 255);
      return `rgb(${intensity}, 0, ${255 - intensity})`; // Gradient from blue to red
    }