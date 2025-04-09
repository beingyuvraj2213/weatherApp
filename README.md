# 🌦️ Weather Dashboard

An animated weather dashboard built using **React** and **Framer Motion**. It allows users to search for current weather and a 5-day forecast of any city using the OpenWeatherMap API. The app also supports a light/dark mode toggle and stores recent searches locally.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, JSX  
- **Animations**: Framer Motion  
- **HTTP Requests**: Axios  
- **Styling**: Tailwind CSS 
- **Local Storage**: For saving recent searches  
- **API**: OpenWeatherMap API  

---

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Environment Variables**

Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

4. **Start the development server**

```bash
npm run dev
```

---

## 🌐 API Integration Details

### 🔗 API Used:
**[OpenWeatherMap API](https://openweathermap.org/api)**

This app uses two endpoints:
- **Current Weather**:  
  `https://api.openweathermap.org/data/2.5/weather`
- **5-Day**:  
  `https://api.openweathermap.org/data/2.5/forecast`

### 🔑 API Key

You must sign up on [OpenWeatherMap](https://openweathermap.org/appid) to obtain a free API key. This key should be placed in your `.env` file like so:

```env
VITE_WEATHER_API_KEY=api_key
```

### 📊 Rate Limits (Free Tier)

- **60 requests per minute**
- **1,000,000 requests per month**
- If we exceed these limits, OpenWeatherMap may temporarily block your requests.

---

## 💡 Features

- 🌍 Search for any city’s current weather
- 📅 View 5-day weather forecast (daily at 12:00 PM)
- 🔄 Refresh data with a single click
- 🕓 Recent searches stored locally
- 🌙 Toggle between Light and Dark modes (custom CSS)
- 🎞️ Smooth animations using Framer Motion

---
## 🧑‍💻 Author

**Yuvraj Preet**  
[GitHub](https://github.com/beingyuvraj2213) • [Email](mailto:yuvraj13preet@gmail.com)

---
