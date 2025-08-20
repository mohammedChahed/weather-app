 const API_KEY = "b7d0bac7f589ba8656c056b2c9faa2f8"; // هنا حط الكي ديالك

    function getWeather() {
      const city = document.getElementById("city").value;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ar`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.cod !== 200) {
            document.getElementById("result").innerHTML = "⚠ المدينة غير موجودة";
            return;
          }else{
            console.log(Object.values(data))
          }

          const temp = data.main.temp;
          const desc = data.weather[0].description;
          const hum = data.main.humidity;

          document.getElementById("result").innerHTML = `
            <h2><span class="icon">📍</span>${data.name}</h2>
            <p><span class="icon">🌡</span> الحرارة: ${temp} °C</p>
            <p><span class="icon">☁</span> الجو: ${desc}</p>
            <p><span class="icon">💧</span> الرطوبة: ${hum}%</p>
          `;
        })
        .catch(err => {
          document.getElementById("result").innerHTML = "❌ خطأ في جلب الطقس";
          console.error(err);
        });
    }