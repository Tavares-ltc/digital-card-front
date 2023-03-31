# digital-card (front-end)
Gone are the days of carrying around stacks of paper cards or relying on outdated designs. With Digital Business Card, you can easily create and share your digital cards with just a few taps on your phone or tablet.

- Poduction deploy avaliable on AWS: http://100.26.109.233/

### Nice design
![image](https://user-images.githubusercontent.com/98609823/228962312-95e4da8c-7fad-4d82-a40d-fcc13b6b9c7a.png)


### Simple to use
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/98609823/228964982-2f3f5893-bec0-40df-b16e-4b941c398f89.gif)

## Technologies
The following tools and frameworks were used in the construction of this application:

  ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
  ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
  ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## How to run

* You can start both projects with docker-compose, check the monorepo here: https://github.com/Tavares-ltc/digital-card-app
<br>

1. Clone this repository

```
git clone https://github.com/Tavares-ltc/digital-card-front.git
```

2. Create .env like the .env.example file
    
3. Start the back end, use the documantation avaliable here: https://github.com/Tavares-ltc/digital-card-back

    
4. To start the project you will have tree options:
  * With Docker:  <br>  
  1.``docker build -t card-front:latest .``   <br>  
  2.``docker run -p 3000:3000 card-front:latest``   <br>
    <br>    
  * Withou Docker as dev:  <br>  
  1.``npm run dev``   <br>  
    <br>  
  * Withou Docker as prod:  <br>  
  1.``npm run build``   <br>  
  2.``npm run start``   <br> 
    <br>  

5. Thats it, just navigate to http://localhost:3000
