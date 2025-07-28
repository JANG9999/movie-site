<h1>🎥영화사이트 제작</h1>
<br><br>

## 👩‍💻작업자
장서연
<br><br>

## 📅 제작기간 :(5일)
2025.07.09~2025.07.15
<br><br>

## 📎 페이지 개수
메인페이지 + 서브페이지 4개
<br><br>

## API 불러오기
저는 TMDB(The Movie Database)에서 제공하는 영화 정보를 API로 받아와 영화 소개 웹사이트를 제작했습니다. 
이때 API 호출에는 JavaScript의 async/await 비동기 처리 방식을 사용했습니다. fetch() 함수를 async 함수 안에서 사용하여, 
TMDB에서 영화 데이터(JSON 형식)를 받아오고 이를 await로 처리해 응답이 완전히 도착한 후에 다음 작업이 실행되도록 구성했습니다.


## ✏️ 메인페이지지

### main 메인 
<img width="2842" height="826" alt="Image" src="https://github.com/user-attachments/assets/5b6bfe53-bbba-4f6c-a5ee-57f8528a670d" />
<br><br>
<img width="2530" height="876" alt="Image" src="https://github.com/user-attachments/assets/2f540b5e-58a0-4104-9321-a147c0e21e22" />
<img width="2473" height="831" alt="Image" src="https://github.com/user-attachments/assets/bdd14233-0b99-4b0a-93f3-69a47d7de06a" />
<img width="2534" height="880" alt="Image" src="https://github.com/user-attachments/assets/14825667-5299-495a-bf4d-17cc04ba362c" />
<img width="2439" height="845" alt="Image" src="https://github.com/user-attachments/assets/8194b05e-f549-41b5-8816-23b7df291d92" />

<br><br><br>
배너와 popular, top10, nowplaying, upcoming으로 구성되어있습니다.
<br><br>

### 트레일러
<img width="2841" height="1515" alt="Image" src="https://github.com/user-attachments/assets/921b5cf1-9c9b-47d9-a313-414168d3db40" />
<br><br><br>
배너에 있는 trailer 버튼을 클릭하면 모달창으로 트레일러가 나타납니다.
<br><br>

## 📄 서브페이지
### detail 페이지
<img width="2873" height="1534" alt="Image" src="https://github.com/user-attachments/assets/92998e45-e9d3-4ae3-9c6a-03798dde21b3" />

<img width="2879" height="1527" alt="Image" src="https://github.com/user-attachments/assets/d9be728f-a436-4942-92bf-474b037efa8c" />
<br><br><br>
디테일 페이지 상단에는 영화 제목, 줄거리, 트레일러 버튼 등이 위치해 있으며, 그 아래에는 출연진 정보와 갤러리 섹션이 구성되어 있습니다. 
출연진과 갤러리 섹션의 데이터는 TMDB의 Movie Detail API를 통해 받아와 화면에 출력했습니다.
<br><br>

### 영화 리스트 페이지
<img width="2874" height="1527" alt="Image" src="https://github.com/user-attachments/assets/0ab30365-c3d7-420b-ae03-e3311033a8b6" />
<br><br><br>
영화 리스트 페이지에서는 여러 개의 영화 카드가 표시되며, 메인 페이지와 마찬가지로 각 카드를 클릭하면 해당 영화의 디테일 페이지로 이동합니다.
<br><br>
<img width="2874" height="1531" alt="Image" src="https://github.com/user-attachments/assets/e4676fc0-4110-45e5-bf03-21754022dae7" />
<br><br>
검색창에 영화 제목을 검색하면 해당하는 영화가 나타납니다.
<br><br>

### 마이페이지
<img width="2829" height="1457" alt="Image" src="https://github.com/user-attachments/assets/36b3692c-6f79-44ad-aad3-8cb3cb3d7883" />
왼쪽에는 개인정보가, 오른쪽에는 시청내역이 있습니다. 마찬가지로 시정내용에 있는 영화 카드를 클릭하면 해당 영화의 디테일 페이지로 이동합니다.
<br><br>

### 로그인페이
<img width="2876" height="1540" alt="Image" src="https://github.com/user-attachments/assets/ad9f2f16-186e-4f1f-939d-b71c07f40317" />
<br><br><br>
화면 우측에는 로그인 폼이 위치해 있으며, 현재는 실제 로그인 기능은 구현되어 있지 않고 추후에 추가할 예정입니다.
<br><br>

## 🔗 링크
- [리뉴얼 작업 피그마 주소](https://www.figma.com/design/kkVYWA4VeuOWiijjzSKz5M/%EB%A6%AC%EC%97%91%ED%8A%B8-%EC%98%81%ED%99%94?node-id=0-1&t=xfZJxVzQNAlsJtak-1)

## 영화사이트
- [영화사이트 링크](https://lambent-beignet-3e6b43.netlify.app/)
