/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-100%)" }, //เริ่มจากข้างบน
          "100%": { transform: "translateY(100vh)" }, //ไปถึงขอบล่าง
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
      },

      fontFamily: {
        Great: ["Great Vibes", "cursive"],
        Kalam: ["kalam","cursive"]
      },

      animation: {
        fall: "fall 10s linear infinite",
        shake: "shake 5s ease-in-out infinite", //ให้หิมะสั่นไปมาทุก 3 วิ
      },
    },
  },
  plugins: [],
};
