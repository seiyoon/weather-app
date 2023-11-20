## 설치 및 실행

프로젝트 레포지토리 클론   
`$ git clone https://github.com/seiyoon/weather-app.git`

weather-app 폴더로 이동 후 remote 갱신   
`$ git remote update`

package.json의 모듈 설치   
`$ npm install`

⚠️ .env.local 파일에 Open Weather API에서 발급받은 자신의 API KEY를 넣어야지 프로젝트가 실행됩니다.

실행   
`$ npm run dev`

빌드   
`$ npm run build`

## 폴더 구조
```
├── 📂.github
├── 📂components
├── 📂graphql
│ └── 📂queries
├── 📂pages
│ ├── 📂[location]
│ └── 📂api
├── 📂public
│ ├── 📂assets
│ │ ├── 📂icons 🗂 아이콘 저장
│ │ └── 📂images 🗂 이미지 저장
│ └── 📂fonts
├── 📂styles
├── 📂utils
└── 📜각종 세팅 파일
```
