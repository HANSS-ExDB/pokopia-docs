const pokemonDb = [
  {
    "id": 1,
    "pokedex_no": "1",
    "name": "이상해씨",
    "specialties": [
      "재배"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "부드러운 것",
      "깜찍한 것",
      "물이 느껴지는 것",
      "다 같이 사용하는 것"
    ],
    "flavor": "단맛"
  },
  {
    "id": 2,
    "pokedex_no": "2",
    "name": "이상해풀",
    "specialties": [
      "재배"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "부드러운 것",
      "깜찍한 것",
      "만발한 꽃",
      "컬러풀"
    ],
    "flavor": "신맛"
  },
  {
    "id": 3,
    "pokedex_no": "3",
    "name": "이상해꽃",
    "specialties": [
      "재배",
      "어지르기"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "부드러운 것",
      "깜찍한 것",
      "만발한 꽃",
      "럭셔리"
    ],
    "flavor": "신맛",
    "produce": "잎사귀"
  },
  {
    "id": 4,
    "pokedex_no": "4",
    "name": "파이리",
    "specialties": [
      "점화"
    ],
    "env": "따뜻함",
    "likes": [
      "불꽃이 느껴지는 것",
      "목제",
      "딱딱한 것",
      "트레이닝에 쓰는 것",
      "다 같이 사용하는 것"
    ],
    "flavor": "매운맛"
  },
  {
    "id": 5,
    "pokedex_no": "5",
    "name": "리자드",
    "specialties": [
      "점화"
    ],
    "env": "따뜻함",
    "likes": [
      "불꽃이 느껴지는 것",
      "목제",
      "딱딱한 것",
      "트레이닝에 쓰는 것",
      "탈것"
    ],
    "flavor": "매운맛"
  },
  {
    "id": 6,
    "pokedex_no": "6",
    "name": "리자몽",
    "specialties": [
      "점화",
      "공중날기"
    ],
    "env": "따뜻함",
    "likes": [
      "불꽃이 느껴지는 것",
      "바람이 느껴지는 것",
      "목제",
      "트레이닝에 쓰는 것",
      "럭셔리"
    ],
    "flavor": "매운맛"
  },
  {
    "id": 7,
    "pokedex_no": "7",
    "name": "꼬부기",
    "specialties": [
      "급수"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "청결",
      "상처를 치유하는 것",
      "깜찍한 것",
      "다 같이 사용하는 것"
    ],
    "flavor": "단맛"
  },
  {
    "id": 8,
    "pokedex_no": "8",
    "name": "어니부기",
    "specialties": [
      "급수"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "청결",
      "상처를 치유하는 것",
      "트레이닝에 쓰는 것",
      "딱딱한 것"
    ],
    "flavor": "매운맛"
  },
  {
    "id": 9,
    "pokedex_no": "9",
    "name": "거북왕",
    "specialties": [
      "급수",
      "거래"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "청결",
      "상처를 치유하는 것",
      "트레이닝에 쓰는 것",
      "럭셔리"
    ],
    "flavor": "신맛"
  },
  {
    "id": 10,
    "pokedex_no": "10",
    "name": "구구",
    "specialties": [
      "공중날기",
      "탐색"
    ],
    "env": "밝음",
    "likes": [
      "부드러운 것",
      "바람이 느껴지는 것",
      "보고 즐길 수 있는 것",
      "자연이 느껴지는 것",
      "놀이 공간"
    ],
    "flavor": "신맛"
  },
  {
    "id": 11,
    "pokedex_no": "11",
    "name": "피죤",
    "specialties": [
      "공중날기",
      "탐색"
    ],
    "env": "밝음",
    "likes": [
      "부드러운 것",
      "바람이 느껴지는 것",
      "보고 즐길 수 있는 것",
      "자연이 느껴지는 것",
      "음식 같은 것"
    ],
    "flavor": "매운맛"
  },
  {
    "id": 12,
    "pokedex_no": "12",
    "name": "피죤투",
    "specialties": [
      "공중날기",
      "절삭"
    ],
    "env": "밝음",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 13,
    "pokedex_no": "13",
    "name": "뚜벅쵸",
    "specialties": [
      "재배"
    ],
    "env": "촉촉함",
    "likes": [
      "자연이 느껴지는 것",
      "흙이 느껴지는 것",
      "부드러운 것",
      "만발한 꽃",
      "물이 느껴지는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 14,
    "pokedex_no": "14",
    "name": "냄새꼬",
    "specialties": [
      "재배"
    ],
    "env": "촉촉함",
    "likes": [
      "자연이 느껴지는 것",
      "흙이 느껴지는 것",
      "부드러운 것",
      "만발한 꽃",
      "쓰레기"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 15,
    "pokedex_no": "15",
    "name": "라플레시아",
    "specialties": [
      "재배",
      "어지르기"
    ],
    "env": "촉촉함",
    "likes": [],
    "flavor": "nan",
    "produce": "덩굴 끈"
  },
  {
    "id": 16,
    "pokedex_no": "16",
    "name": "아르코",
    "specialties": [
      "재배",
      "분위기 메이킹"
    ],
    "env": "밝음",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 17,
    "pokedex_no": "17",
    "name": "파라스",
    "specialties": [
      "탐색"
    ],
    "env": "촉촉함",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "보고 즐길 수 있는 것",
      "흙이 느껴지는 것",
      "음식 같은 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 18,
    "pokedex_no": "18",
    "name": "파라섹트",
    "specialties": [
      "탐색"
    ],
    "env": "촉촉함",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "보고 즐길 수 있는 것",
      "흙이 느껴지는 것",
      "신기한 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 19,
    "pokedex_no": "19",
    "name": "콘팡",
    "specialties": [
      "탐색"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "보고 즐길 수 있는 것",
      "어려워 보이는 것",
      "문자가 있는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 20,
    "pokedex_no": "20",
    "name": "도나리",
    "specialties": [
      "탐색"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "보고 즐길 수 있는 것",
      "바람이 느껴지는 것",
      "만발한 꽃"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 21,
    "pokedex_no": "21",
    "name": "모다피",
    "specialties": [
      "재배",
      "어지르기"
    ],
    "env": "촉촉함",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "흙이 느껴지는 것",
      "물이 느껴지는 것",
      "만발한 꽃"
    ],
    "flavor": " 떫은맛",
    "produce": "덩굴 끈"
  },
  {
    "id": 22,
    "pokedex_no": "22",
    "name": "우츠동",
    "specialties": [
      "재배",
      "어지르기"
    ],
    "env": "nan",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "흙이 느껴지는 것",
      "물이 느껴지는 것",
      "만발한 꽃"
    ],
    "flavor": " 떫은맛",
    "produce": "덩굴 끈"
  },
  {
    "id": 23,
    "pokedex_no": "23",
    "name": "우츠보트",
    "specialties": [
      "재배",
      "절삭"
    ],
    "env": "nan",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "흙이 느껴지는 것",
      "컬러풀",
      "만발한 꽃"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 24,
    "pokedex_no": "24",
    "name": "야돈",
    "specialties": [
      "급수",
      "하품"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "청결",
      "신기한 것",
      "부드러운 것",
      "상처를 치유하는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 25,
    "pokedex_no": "25",
    "name": "야도란",
    "specialties": [
      "급수",
      "거래"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "청결",
      "신기한 것",
      "다 같이 사용하는 것",
      "상처를 치유하는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 26,
    "pokedex_no": "26",
    "name": "야도킹",
    "specialties": [
      "급수",
      "순간이동"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "청결",
      "신기한 것",
      "다 같이 사용하는 것",
      "상처를 치유하는 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 27,
    "pokedex_no": "27",
    "name": "코일",
    "specialties": [
      "발전"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "메탈릭",
      "반짝이는 것",
      "딱딱한 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 28,
    "pokedex_no": "28",
    "name": "레어코일",
    "specialties": [
      "발전"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "메탈릭",
      "반짝이는 것",
      "모여 있는 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 29,
    "pokedex_no": "29",
    "name": "자포코일",
    "specialties": [
      "발전",
      "리사이클"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 30,
    "pokedex_no": "30",
    "name": "롱스톤",
    "specialties": [
      "분쇄",
      "땅고르기"
    ],
    "env": "건조함",
    "likes": [
      "석조",
      "흙이 느껴지는 것",
      "네모난 것",
      "홀쭉한 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 31,
    "pokedex_no": "31",
    "name": "강철톤",
    "specialties": [
      "분쇄",
      "땅고르기"
    ],
    "env": "건조함",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 32,
    "pokedex_no": "32",
    "name": "탕구리",
    "specialties": [
      "건축"
    ],
    "env": "건조함",
    "likes": [
      "흙이 느껴지는 것",
      "건설",
      "트레이닝에 쓰는 것",
      "홀쭉한 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 33,
    "pokedex_no": "33",
    "name": "텅구리",
    "specialties": [
      "건축"
    ],
    "env": "건조함",
    "likes": [
      "흙이 느껴지는 것",
      "건설",
      "트레이닝에 쓰는 것",
      "홀쭉한 것",
      "럭셔리"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 34,
    "pokedex_no": "34",
    "name": "베루키",
    "specialties": [
      "거래"
    ],
    "env": "nan",
    "likes": [
      "트레이닝에 쓰는 것",
      "다 같이 사용하는 것",
      "천으로 만든 것",
      "석조",
      "동그란 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 35,
    "pokedex_no": "35",
    "name": "시라소몬",
    "specialties": [
      "거래"
    ],
    "env": "밝음",
    "likes": [
      "트레이닝에 쓰는 것",
      "다 같이 사용하는 것",
      "천으로 만든 것",
      "석조",
      "동그란 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 36,
    "pokedex_no": "36",
    "name": "홍수몬",
    "specialties": [
      "거래"
    ],
    "env": "밝음",
    "likes": [
      "트레이닝에 쓰는 것",
      "다 같이 사용하는 것",
      "천으로 만든 것",
      "석조",
      "동그란 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 37,
    "pokedex_no": "37",
    "name": "카포에라",
    "specialties": [
      "거래"
    ],
    "env": "nan",
    "likes": [
      "트레이닝에 쓰는 것",
      "다 같이 사용하는 것",
      "천으로 만든 것",
      "석조",
      "동그란 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 38,
    "pokedex_no": "38",
    "name": "또가스",
    "specialties": [
      "리사이클"
    ],
    "env": "어두움",
    "likes": [
      "쓰레기",
      "모여있는 것",
      "어려워 보이는 것",
      "부드러운 것",
      "흔들리는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 39,
    "pokedex_no": "39",
    "name": "또도가스",
    "specialties": [
      "리사이클"
    ],
    "env": "nan",
    "likes": [
      "쓰레기",
      "모여있는 것",
      "어려워 보이는 것",
      "부드러운 것",
      "흔들리는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 40,
    "pokedex_no": "40",
    "name": "덩쿠리",
    "specialties": [
      "재배",
      "어지르기"
    ],
    "env": "밝음",
    "likes": [],
    "flavor": "nan",
    "produce": ""
  },
  {
    "id": 41,
    "pokedex_no": "41",
    "name": "덩쿠림보",
    "specialties": [
      "감정"
    ],
    "env": "촉촉함",
    "likes": [
      "자연이 느껴지는 것",
      "어려워 보이는 것",
      "문자가 있는 것",
      "신기한 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 42,
    "pokedex_no": "42",
    "name": "스라크",
    "specialties": [
      "절삭"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "바람이 느껴지는 것",
      "목제",
      "뾰족한 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 43,
    "pokedex_no": "43",
    "name": "핫삼",
    "specialties": [
      "절삭"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "메탈릭",
      "목제",
      "딱딱한 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 44,
    "pokedex_no": "44",
    "name": "쁘사이저",
    "specialties": [
      "절삭",
      "건축"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "만발한 꽃",
      "뾰족한 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 45,
    "pokedex_no": "45",
    "name": "잉어킹",
    "specialties": [
      "불명"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "탈것",
      "흔들리는 것",
      "단맛"
    ],
    "flavor": "nan"
  },
  {
    "id": 46,
    "pokedex_no": "46",
    "name": "갸라도스",
    "specialties": [
      "급수"
    ],
    "env": "nan",
    "likes": [
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "바람이 느껴지는 것",
      "청결",
      "홀쭉한 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 47,
    "pokedex_no": "47",
    "name": "메타몽",
    "specialties": [
      "변신"
    ],
    "env": "밝음",
    "likes": [
      "없음"
    ],
    "flavor": "nan"
  },
  {
    "id": 48,
    "pokedex_no": "48",
    "name": "부우부",
    "specialties": [
      "거래",
      "공중날기"
    ],
    "env": "어두움",
    "likes": [
      "부드러운 것",
      "바람이 느껴지는 것",
      "천으로 만든 것",
      "흔들리는 것",
      "보고 즐길 수 있는 것"
    ],
    "flavor": " 떫은 맛"
  },
  {
    "id": 49,
    "pokedex_no": "49",
    "name": "야부엉",
    "specialties": [
      "거래",
      "공중날기"
    ],
    "env": "어두움",
    "likes": [
      "부드러운 것",
      "바람이 느껴지는 것",
      "문자가 있는 것",
      "넣을 수 있는 것",
      "보고 즐길 수 있는 것"
    ],
    "flavor": " 떫은 맛"
  },
  {
    "id": 50,
    "pokedex_no": "50",
    "name": "헤라크로스",
    "specialties": [
      "절삭",
      "건축"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "만발한 꽃",
      "음식 같은 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 51,
    "pokedex_no": "51",
    "name": "볼비트",
    "specialties": [
      "분위기 메이킹"
    ],
    "env": "어두움",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "반짝이는 것",
      "깜찍한 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 52,
    "pokedex_no": "52",
    "name": "네오비트",
    "specialties": [
      "분위기 메이킹"
    ],
    "env": "어두움",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "반짝이는 것",
      "깜찍한 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 53,
    "pokedex_no": "53",
    "name": "꼴깍몬",
    "specialties": [
      "수납"
    ],
    "env": "촉촉함",
    "likes": [
      "깜찍한 것",
      "음식 같은 것",
      "동그란 것",
      "넣을 수 있는 것",
      "컬러풀"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 54,
    "pokedex_no": "54",
    "name": "꿀꺽몬",
    "specialties": [
      "수납"
    ],
    "env": "nan",
    "likes": [
      "쓰레기",
      "음식 같은 것",
      "동그란 것",
      "넣을 수 있는 것",
      "컬러풀"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 55,
    "pokedex_no": "55",
    "name": "선인왕",
    "specialties": [
      "재배"
    ],
    "env": "nan",
    "likes": [
      "자연이 느껴지는 것",
      "만발한 꽃",
      "깜찍한 것",
      "동그란 것",
      "뾰족한 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 56,
    "pokedex_no": "56",
    "name": "밤선인",
    "specialties": [
      "재배",
      "어지르기"
    ],
    "env": "건조함",
    "likes": [
      "자연이 느껴지는 것",
      "바람이 느껴지는 것",
      "럭셔리",
      "반짝이는 것",
      "뾰족한 것"
    ],
    "flavor": " 떫은 맛",
    "produce": ""
  },
  {
    "id": 57,
    "pokedex_no": "57",
    "name": "세꿀버리",
    "specialties": [
      "어지르기"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "바람이 느껴지는 것",
      "목제",
      "모여있는 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 단맛",
    "produce": "달콤한 꿀"
  },
  {
    "id": 58,
    "pokedex_no": "58",
    "name": "비퀸",
    "specialties": [
      "꿀 모으기",
      "탐색"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "바람이 느껴지는 것",
      "목제",
      "모여있는 것",
      "어려워 보이는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 59,
    "pokedex_no": "59",
    "name": "깝질무 (서)",
    "specialties": [
      "급수"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "청결",
      "컬러풀",
      "넣을 수 있는 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 60,
    "pokedex_no": "59",
    "name": "깝질무 (동)",
    "specialties": [
      "급수"
    ],
    "env": "nan",
    "likes": [
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "청결",
      "컬러풀",
      "넣을 수 있는 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 61,
    "pokedex_no": "60",
    "name": "트리토돈 (서)",
    "specialties": [
      "급수",
      "거래"
    ],
    "env": "nan",
    "likes": [
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "청결",
      "컬러풀",
      "넣을 수 있는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 62,
    "pokedex_no": "60",
    "name": "트리토돈 (동)",
    "specialties": [
      "급수",
      "거래"
    ],
    "env": "nan",
    "likes": [
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "청결",
      "컬러풀",
      "넣을 수 있는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 63,
    "pokedex_no": "61",
    "name": "흔들풍손",
    "specialties": [
      "꿈섬"
    ],
    "env": "따뜻함",
    "likes": [
      "기이한 것",
      "신기한 것",
      "바람이 느껴지는 것",
      "깜찍한 것",
      "동그란 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 64,
    "pokedex_no": "62",
    "name": "둥실라이드",
    "specialties": [
      "공중날기",
      "분류"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 65,
    "pokedex_no": "63",
    "name": "두더류",
    "specialties": [
      "탐색"
    ],
    "env": "어두움",
    "likes": [
      "흙이 느껴지는 것",
      "석조",
      "자연이 느껴지는 것",
      "보고 즐길 수 있는 것",
      "뾰족한 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 66,
    "pokedex_no": "64",
    "name": "몰드류",
    "specialties": [
      "탐색",
      "절삭"
    ],
    "env": "어두움",
    "likes": [
      "흙이 느껴지는 것",
      "메탈릭",
      "트레이닝에 쓰는 것",
      "보고 즐길 수 있는 것",
      "뾰족한 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 67,
    "pokedex_no": "65",
    "name": "으랏차",
    "specialties": [
      "건축"
    ],
    "env": "밝음",
    "likes": [
      "트레이닝에 쓰는 것",
      "건설",
      "목제",
      "홀쭉한 것",
      "네모난 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 68,
    "pokedex_no": "66",
    "name": "토쇠골",
    "specialties": [
      "건축"
    ],
    "env": "밝음",
    "likes": [
      "트레이닝에 쓰는 것",
      "건설",
      "메탈릭",
      "홀쭉한 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 69,
    "pokedex_no": "67",
    "name": "노보청",
    "specialties": [
      "건축",
      "분쇄"
    ],
    "env": "밝음",
    "likes": [
      "트레이닝에 쓰는 것",
      "건설",
      "석조",
      "홀쭉한 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 70,
    "pokedex_no": "68",
    "name": "불켜미",
    "specialties": [
      "점화"
    ],
    "env": "따뜻함",
    "likes": [
      "기이한 것",
      "신기한 것",
      "불꽃이 느껴지는 것",
      "흔들리는 것",
      "네모난 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 71,
    "pokedex_no": "69",
    "name": "램프라",
    "specialties": [
      "점화"
    ],
    "env": "nan",
    "likes": [
      "기이한 것",
      "신기한 것",
      "불꽃이 느껴지는 것",
      "흔들리는 것",
      "넣을 수 있는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 72,
    "pokedex_no": "70",
    "name": "샹델라",
    "specialties": [
      "점화"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 73,
    "pokedex_no": "71",
    "name": "터검니",
    "specialties": [
      "절삭"
    ],
    "env": "nan",
    "likes": [
      "불꽃이 느껴지는 것",
      "럭셔리",
      "흙이 느껴지는 것",
      "딱딱한 것",
      "뾰족한 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 74,
    "pokedex_no": "72",
    "name": "액슨도",
    "specialties": [
      "절삭"
    ],
    "env": "nan",
    "likes": [
      "불꽃이 느껴지는 것",
      "럭셔리",
      "흙이 느껴지는 것",
      "트레이닝에 쓰는 것",
      "뾰족한 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 75,
    "pokedex_no": "73",
    "name": "액스라이즈",
    "specialties": [
      "절삭",
      "어지르기"
    ],
    "env": "nan",
    "likes": [
      "불꽃이 느껴지는 것",
      "럭셔리",
      "흙이 느껴지는 것",
      "트레이닝에 쓰는 것",
      "뾰족한 것"
    ],
    "flavor": " 신맛",
    "produce": "통나무"
  },
  {
    "id": 76,
    "pokedex_no": "74",
    "name": "미끄메라",
    "specialties": [
      "급수"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "럭셔리",
      "자연이 느껴지는 것",
      "청결",
      "상처를 치유하는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 77,
    "pokedex_no": "75",
    "name": "미끄네일",
    "specialties": [
      "급수"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "럭셔리",
      "부드러운 것",
      "청결",
      "상처를 치유하는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 78,
    "pokedex_no": "76",
    "name": "미끄래곤",
    "specialties": [
      "급수"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 79,
    "pokedex_no": "77",
    "name": "윽우지",
    "specialties": [
      "공중날기",
      "급수"
    ],
    "env": "촉촉함",
    "likes": [
      "바람이 느껴지는 것",
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "홀쭉한 것",
      "음식 같은 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 80,
    "pokedex_no": "78",
    "name": "피츄",
    "specialties": [
      "발전"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "유리로 만든 것",
      "깜찍한 것",
      "만발한 꽃",
      "천으로 만든 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 81,
    "pokedex_no": "79",
    "name": "피카츄 (창백)",
    "specialties": [
      "발광"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "유리로 만든 것",
      "깜찍한 것",
      "상처를 치유하는 것",
      "문자가 있는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 82,
    "pokedex_no": "79",
    "name": "피카츄",
    "specialties": [
      "발전"
    ],
    "env": "nan",
    "likes": [
      "전기로 움직이는 것",
      "유리로 만든 것",
      "다 같이 사용하는 것",
      "동그란 것",
      "탈것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 83,
    "pokedex_no": "80",
    "name": "라이츄",
    "specialties": [
      "발전",
      "분위기 메이킹"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "유리로 만든 것",
      "다 같이 사용하는 것",
      "동그란 것",
      "놀이 공간"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 84,
    "pokedex_no": "81",
    "name": "주뱃",
    "specialties": [
      "탐색"
    ],
    "env": "어두움",
    "likes": [
      "기이한 것",
      "바람이 느껴지는 것",
      "목제",
      "소리가 나는 것",
      "어려워 보이는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 85,
    "pokedex_no": "82",
    "name": "골뱃",
    "specialties": [
      "탐색"
    ],
    "env": "어두움",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 86,
    "pokedex_no": "83",
    "name": "크로뱃",
    "specialties": [
      "탐색",
      "절삭"
    ],
    "env": "어두움",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 87,
    "pokedex_no": "84",
    "name": "나옹",
    "specialties": [
      "거래"
    ],
    "env": "시원함",
    "likes": [
      "넣을 수 있는 것",
      "다 같이 사용하는 것",
      "반짝이는 것",
      "유리로 만든 것",
      "럭셔리"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 88,
    "pokedex_no": "85",
    "name": "페르시안",
    "specialties": [
      "거래",
      "탐색"
    ],
    "env": "nan",
    "likes": [
      "넣을 수 있는 것",
      "다 같이 사용하는 것",
      "반짝이는 것",
      "보고 즐길 수 있는 것",
      "럭셔리"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 89,
    "pokedex_no": "86",
    "name": "고라파덕",
    "specialties": [
      "탐색"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "신기한 것",
      "어려워 보이는 것",
      "상처를 치유하는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 90,
    "pokedex_no": "87",
    "name": "골덕",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 91,
    "pokedex_no": "88",
    "name": "가디",
    "specialties": [
      "점화",
      "탐색"
    ],
    "env": "따뜻함",
    "likes": [
      "불꽃이 느껴지는 것",
      "석조",
      "바람이 느껴지는 것",
      "문자가 있는 것",
      "만발한 꽃"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 92,
    "pokedex_no": "89",
    "name": "윈디",
    "specialties": [
      "점화",
      "탐색"
    ],
    "env": "nan",
    "likes": [
      "불꽃이 느껴지는 것",
      "석조",
      "바람이 느껴지는 것",
      "보고 즐길 수 있는 것",
      "홀쭉한 것"
    ],
    "flavor": " 상징"
  },
  {
    "id": 93,
    "pokedex_no": "90",
    "name": "파오리",
    "specialties": [
      "절삭",
      "건축"
    ],
    "env": "따뜻함",
    "likes": [
      "부드러운 것",
      "바람이 느껴지는 것",
      "목제",
      "홀쭉한 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 94,
    "pokedex_no": "91",
    "name": "질퍽이",
    "specialties": [
      "어지르기"
    ],
    "env": "nan",
    "likes": [
      "쓰레기",
      "기이한 것",
      "모여있는 것",
      "반짝이는 것",
      "컬러풀"
    ],
    "flavor": " 쓴맛",
    "produce": ""
  },
  {
    "id": 95,
    "pokedex_no": "92",
    "name": "질뻐기",
    "specialties": [
      "어지르기"
    ],
    "env": "nan",
    "likes": [
      "쓰레기",
      "기이한 것",
      "모여있는 것",
      "반짝이는 것",
      "컬러풀"
    ],
    "flavor": " 쓴맛",
    "produce": ""
  },
  {
    "id": 96,
    "pokedex_no": "93",
    "name": "고오스",
    "specialties": [
      "분류",
      "거래"
    ],
    "env": "어두움",
    "likes": [
      "기이한 것",
      "신기한 것",
      "쓰레기",
      "넣을 수 있는 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 97,
    "pokedex_no": "94",
    "name": "고우스트",
    "specialties": [
      "분류",
      "거래"
    ],
    "env": "nan",
    "likes": [
      "기이한 것",
      "신기한 것",
      "쓰레기",
      "흔들리는 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 98,
    "pokedex_no": "95",
    "name": "팬텀",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 99,
    "pokedex_no": "96",
    "name": "찌리리공",
    "specialties": [
      "발전",
      "폭발"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "반짝이는 것",
      "동그란 것",
      "컬러풀",
      "돌아가는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 100,
    "pokedex_no": "97",
    "name": "붐볼",
    "specialties": [
      "발전",
      "폭발"
    ],
    "env": "밝음",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 101,
    "pokedex_no": "98",
    "name": "아라리",
    "specialties": [
      "재배",
      "순간이동"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "신기한 것",
      "모여있는 것",
      "보고 즐길 수 있는 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 102,
    "pokedex_no": "99",
    "name": "나시",
    "specialties": [
      "재배",
      "순간이동"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "신기한 것",
      "모여있는 것",
      "보고 즐길 수 있는 것",
      "목제"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 103,
    "pokedex_no": "100",
    "name": "핑복",
    "specialties": [
      "거래"
    ],
    "env": "밝음",
    "likes": [
      "부드러운 것",
      "천으로 만든 것",
      "상처를 치유하는 것",
      "동그란 것",
      "넣을 수 있는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 104,
    "pokedex_no": "101",
    "name": "럭키",
    "specialties": [
      "거래"
    ],
    "env": "밝음",
    "likes": [
      "부드러운 것",
      "천으로 만든 것",
      "상처를 치유하는 것",
      "동그란 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 105,
    "pokedex_no": "102",
    "name": "해피너스",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 106,
    "pokedex_no": "103",
    "name": "에레키드",
    "specialties": [
      "발전"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "유리로 만든 것",
      "깜찍한 것",
      "동그란 것",
      "돌아가는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 107,
    "pokedex_no": "104",
    "name": "에레브",
    "specialties": [
      "발전"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "유리로 만든 것",
      "불꽃이 느껴지는 것",
      "뾰족한 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 108,
    "pokedex_no": "105",
    "name": "에레키블",
    "specialties": [
      "발전",
      "분쇄"
    ],
    "env": "밝음",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 109,
    "pokedex_no": "106",
    "name": "라프라스",
    "specialties": [
      "급수"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "청결",
      "보고 즐길 수 있는 것",
      "상처를 치유하는 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 110,
    "pokedex_no": "107",
    "name": "먹고자",
    "specialties": [
      "땅고르기"
    ],
    "env": "따뜻함",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 111,
    "pokedex_no": "108",
    "name": "잠만보 (이끼)",
    "specialties": [
      "먹보"
    ],
    "env": "밝음",
    "likes": [
      "부드러운 것",
      "천으로 만든 것",
      "음식 같은 것",
      "보고 즐길 수 있는 것",
      "신기한 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 112,
    "pokedex_no": "108",
    "name": "잠만보",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 113,
    "pokedex_no": "109",
    "name": "페이검",
    "specialties": [
      "어지르기"
    ],
    "env": "촉촉함",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "쓰레기",
      "탈것",
      "컬러풀"
    ],
    "flavor": " 쓴맛",
    "produce": "실뭉치"
  },
  {
    "id": 114,
    "pokedex_no": "110",
    "name": "아리아도스",
    "specialties": [
      "어지르기"
    ],
    "env": "촉촉함",
    "likes": [
      "실뭉치"
    ],
    "flavor": "nan",
    "produce": ""
  },
  {
    "id": 115,
    "pokedex_no": "111",
    "name": "메리프",
    "specialties": [
      "발전",
      "어지르기"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "반짝이는 것",
      "유리로 만든 것",
      "깜찍한 것",
      "천으로 만든 것"
    ],
    "flavor": " 단맛",
    "produce": "솜"
  },
  {
    "id": 116,
    "pokedex_no": "112",
    "name": "보송송",
    "specialties": [
      "발전",
      "어지르기"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "반짝이는 것",
      "유리로 만든 것",
      "깜찍한 것",
      "탈것"
    ],
    "flavor": " 쓴맛",
    "produce": "솜"
  },
  {
    "id": 117,
    "pokedex_no": "113",
    "name": "전룡",
    "specialties": [
      "발전",
      "거래"
    ],
    "env": "nan",
    "likes": [
      "전기로 움직이는 것",
      "반짝이는 것",
      "유리로 만든 것",
      "깜찍한 것",
      "만발한 꽃"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 118,
    "pokedex_no": "114",
    "name": "루리리",
    "specialties": [
      "급수",
      "분위기 메이킹"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "깜찍한 것",
      "청결",
      "상처를 치유하는 것",
      "탈것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 119,
    "pokedex_no": "115",
    "name": "마릴",
    "specialties": [
      "급수",
      "분위기 메이킹"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "깜찍한 것",
      "청결",
      "동그란 것",
      "상징"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 120,
    "pokedex_no": "116",
    "name": "마릴리",
    "specialties": [
      "급수",
      "건축"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "깜찍한 것",
      "건설",
      "흔들리는 것",
      "상징"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 121,
    "pokedex_no": "117",
    "name": "우파 (팔데아)",
    "specialties": [
      "어지르기"
    ],
    "env": "촉촉함",
    "likes": [
      "쓰레기",
      "흙이 느껴지는 것",
      "석조",
      "청결",
      "다 같이 사용하는 것"
    ],
    "flavor": " 신맛",
    "produce": "점토"
  },
  {
    "id": 122,
    "pokedex_no": "118",
    "name": "토오",
    "specialties": [
      "땅고르기",
      "어지르기"
    ],
    "env": "nan",
    "likes": [
      "쓰레기",
      "흙이 느껴지는 것",
      "물이 느껴지는 것",
      "청결",
      "동그란 것"
    ],
    "flavor": " 쓴맛",
    "produce": "점토"
  },
  {
    "id": 123,
    "pokedex_no": "119",
    "name": "루브도 (페인터)",
    "specialties": [
      "페인팅"
    ],
    "env": "밝음",
    "likes": [
      "부드러운 것",
      "천으로 만든 것",
      "신기한 것",
      "컬러풀",
      "반짝이는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 124,
    "pokedex_no": "120",
    "name": "아차모",
    "specialties": [
      "점화"
    ],
    "env": "따뜻함",
    "likes": [
      "불꽃이 느껴지는 것",
      "석조",
      "깜찍한 것",
      "넣을 수 있는 것",
      "만발한 꽃"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 125,
    "pokedex_no": "121",
    "name": "영치코",
    "specialties": [
      "점화",
      "건축"
    ],
    "env": "따뜻함",
    "likes": [
      "불꽃이 느껴지는 것",
      "석조",
      "트레이닝에 쓰는 것",
      "넣을 수 있는 것",
      "건설"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 126,
    "pokedex_no": "122",
    "name": "번치코",
    "specialties": [
      "점화",
      "건축"
    ],
    "env": "nan",
    "likes": [
      "불꽃이 느껴지는 것",
      "럭셔리",
      "트레이닝에 쓰는 것",
      "넣을 수 있는 것",
      "건설"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 127,
    "pokedex_no": "123",
    "name": "갈모매",
    "specialties": [
      "급수",
      "공중날기"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "바람이 느껴지는 것",
      "청결",
      "바다가 느껴지는 것",
      "보고 즐길 수 있는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 128,
    "pokedex_no": "124",
    "name": "패리퍼",
    "specialties": [
      "급수",
      "공중날기"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "바람이 느껴지는 것",
      "청결",
      "바다가 느껴지는 것",
      "보고 즐길 수 있는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 129,
    "pokedex_no": "125",
    "name": "마크탕",
    "specialties": [
      "건축",
      "땅고르기"
    ],
    "env": "밝음",
    "likes": [
      "트레이닝에 쓰는 것",
      "건설",
      "천으로 만든 것",
      "동그란 것",
      "목제"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 130,
    "pokedex_no": "126",
    "name": "하리뭉",
    "specialties": [
      "건축",
      "땅고르기"
    ],
    "env": "밝음",
    "likes": [
      "트레이닝에 쓰는 것",
      "건설",
      "천으로 만든 것",
      "동그란 것",
      "탈것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 131,
    "pokedex_no": "127",
    "name": "앱솔",
    "specialties": [
      "절삭"
    ],
    "env": "어두움",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 132,
    "pokedex_no": "128",
    "name": "팽도리",
    "specialties": [
      "급수"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "바람이 느껴지는 것",
      "청결",
      "넣을 수 있는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 133,
    "pokedex_no": "129",
    "name": "팽태자",
    "specialties": [
      "급수",
      "거래"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "바람이 느껴지는 것",
      "청결",
      "넣을 수 있는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 134,
    "pokedex_no": "130",
    "name": "엠페르트 ",
    "specialties": [
      "급수",
      "거래"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 135,
    "pokedex_no": "131",
    "name": "다부니",
    "specialties": [
      "거래"
    ],
    "env": "밝음",
    "likes": [
      "부드러운 것",
      "천으로 만든 것",
      "상처를 치유하는 것",
      "깜찍한 것",
      "동그란 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 136,
    "pokedex_no": "132",
    "name": "깨봉이",
    "specialties": [
      "리사이클"
    ],
    "env": "촉촉함",
    "likes": [
      "쓰레기",
      "넣을 수 있는 것",
      "어려워 보이는 것",
      "반짝이는 것",
      "모여있는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 137,
    "pokedex_no": "133",
    "name": "더스트나",
    "specialties": [
      "리사이클",
      "어지르기"
    ],
    "env": "촉촉함",
    "likes": [
      "쓰레기",
      "넣을 수 있는 것",
      "어려워 보이는 것",
      "반짝이는 것",
      "모여있는 것"
    ],
    "flavor": " 신맛",
    "produce": ""
  },
  {
    "id": 138,
    "pokedex_no": "134",
    "name": "조로아",
    "specialties": [
      "거래"
    ],
    "env": "어두움",
    "likes": [
      "반짝이는 것",
      "럭셔리",
      "유리로 만든 것",
      "깜찍한 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 139,
    "pokedex_no": "135",
    "name": "조로아크",
    "specialties": [
      "거래",
      "절삭"
    ],
    "env": "어두움",
    "likes": [
      "반짝이는 것",
      "럭셔리",
      "유리로 만든 것",
      "신기한 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 140,
    "pokedex_no": "136",
    "name": "치라미",
    "specialties": [
      "분류"
    ],
    "env": "밝음",
    "likes": [
      "부드러운 것",
      "천으로 만든 것",
      "탈것",
      "깜찍한 것",
      "청결"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 141,
    "pokedex_no": "137",
    "name": "치라치노",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 142,
    "pokedex_no": "138",
    "name": "턱지충이",
    "specialties": [
      "절삭"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "전기로 움직이는 것",
      "보고 즐길 수 있는 것",
      "흙이 느껴지는 것",
      "넣을 수 있는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 143,
    "pokedex_no": "139",
    "name": "전지충이",
    "specialties": [
      "발전",
      "절삭"
    ],
    "env": "nan",
    "likes": [
      "자연이 느껴지는 것",
      "전기로 움직이는 것",
      "보고 즐길 수 있는 것",
      "유리로 만든 것",
      "네모난 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 144,
    "pokedex_no": "140",
    "name": "투구뿌논",
    "specialties": [
      "발전",
      "절삭"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "전기로 움직이는 것",
      "트레이닝에 쓰는 것",
      "유리로 만든 것",
      "바람이 느껴지는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 145,
    "pokedex_no": "141",
    "name": "따라큐",
    "specialties": [
      "거래"
    ],
    "env": "어두움",
    "likes": [
      "기이한 것",
      "깜찍한 것",
      "전기로 움직이는 것",
      "천으로 만든 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 146,
    "pokedex_no": "142",
    "name": "빠모",
    "specialties": [
      "발전"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "반짝이는 것",
      "깜찍한 것",
      "유리로 만든 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 147,
    "pokedex_no": "143",
    "name": "빠모트",
    "specialties": [
      "발전",
      "분쇄"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "반짝이는 것",
      "트레이닝에 쓰는 것",
      "유리로 만든 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 148,
    "pokedex_no": "144",
    "name": "빠르모트",
    "specialties": [
      "발전",
      "분쇄"
    ],
    "env": "nan",
    "likes": [
      "전기로 움직이는 것",
      "반짝이는 것",
      "트레이닝에 쓰는 것",
      "상처를 치유하는 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 149,
    "pokedex_no": "145",
    "name": "싸리용 (젖힌 모습)",
    "specialties": [
      "거래"
    ],
    "env": "촉촉함",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 150,
    "pokedex_no": "145",
    "name": "싸리용 (늘어진 모습)",
    "specialties": [
      "거래"
    ],
    "env": "촉촉함",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 151,
    "pokedex_no": "145",
    "name": "싸리용 (뻗은 모습)",
    "specialties": [
      "거래"
    ],
    "env": "촉촉함",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 152,
    "pokedex_no": "146",
    "name": "아보",
    "specialties": [
      "탐색"
    ],
    "env": "어두움",
    "likes": [
      "쓰레기",
      "보고 즐길 수 있는 것",
      "자연이 느껴지는 것",
      "홀쭉한 것",
      "돌아가는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 153,
    "pokedex_no": "147",
    "name": "아보크",
    "specialties": [
      "탐색"
    ],
    "env": "어두움",
    "likes": [
      "쓰레기",
      "보고 즐길 수 있는 것",
      "자연이 느껴지는 것",
      "홀쭉한 것",
      "돌아가는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 154,
    "pokedex_no": "148",
    "name": "삐",
    "specialties": [
      "분위기 메이킹"
    ],
    "env": "어두움",
    "likes": [
      "깜찍한 것",
      "동그란 것",
      "컬러풀",
      "상처를 치유하는 것",
      "탈것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 155,
    "pokedex_no": "149",
    "name": "삐삐",
    "specialties": [
      "분위기 메이킹"
    ],
    "env": "어두움",
    "likes": [
      "깜찍한 것",
      "놀이 공간",
      "만발한 꽃",
      "상처를 치유하는 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 156,
    "pokedex_no": "150",
    "name": "픽시",
    "specialties": [
      "분위기 메이킹",
      "거래"
    ],
    "env": "어두움",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 157,
    "pokedex_no": "151",
    "name": "푸푸린",
    "specialties": [
      "분위기 메이킹"
    ],
    "env": "nan",
    "likes": [
      "부드러운 것",
      "깜찍한 것",
      "놀이 공간",
      "상처를 치유하는 것",
      "소리가 나는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 158,
    "pokedex_no": "152",
    "name": "푸린",
    "specialties": [
      "분위기 메이킹"
    ],
    "env": "밝음",
    "likes": [
      "부드러운 것",
      "깜찍한 것",
      "놀이 공간",
      "상처를 치유하는 것",
      "흔들리는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 159,
    "pokedex_no": "153",
    "name": "푸크린",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 160,
    "pokedex_no": "154",
    "name": "디그다",
    "specialties": [
      "분위기 메이킹"
    ],
    "env": "어두움",
    "likes": [
      "흙이 느껴지는 것",
      "놀이 공간",
      "깜찍한 것",
      "다 같이 사용하는 것",
      "홀쭉한 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 161,
    "pokedex_no": "155",
    "name": "닥트리오",
    "specialties": [
      "분위기 메이킹",
      "분쇄"
    ],
    "env": "어두움",
    "likes": [
      "흙이 느껴지는 것",
      "놀이 공간",
      "모여있는 것",
      "다 같이 사용하는 것",
      "홀쭉한 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 162,
    "pokedex_no": "156",
    "name": "알통몬",
    "specialties": [
      "건축",
      "분류"
    ],
    "env": "밝음",
    "likes": [
      "트레이닝에 쓰는 것",
      "건설",
      "석조",
      "딱딱한 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 163,
    "pokedex_no": "157",
    "name": "근육몬",
    "specialties": [
      "건축",
      "분류"
    ],
    "env": "밝음",
    "likes": [
      "트레이닝에 쓰는 것",
      "건설",
      "석조",
      "딱딱한 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 164,
    "pokedex_no": "158",
    "name": "괴력몬",
    "specialties": [
      "건축",
      "분류"
    ],
    "env": "nan",
    "likes": [
      "트레이닝에 쓰는 것",
      "건설",
      "석조",
      "딱딱한 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 165,
    "pokedex_no": "159",
    "name": "꼬마돌",
    "specialties": [
      "분쇄"
    ],
    "env": "어두움",
    "likes": [
      "석조",
      "딱딱한 것",
      "돌아가는 것",
      "동그란 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 166,
    "pokedex_no": "160",
    "name": "데구리",
    "specialties": [
      "분쇄"
    ],
    "env": "어두움",
    "likes": [
      "석조",
      "딱딱한 것",
      "돌아가는 것",
      "동그란 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 167,
    "pokedex_no": "161",
    "name": "딱구리",
    "specialties": [
      "분쇄",
      "거래"
    ],
    "env": "nan",
    "likes": [
      "석조",
      "딱딱한 것",
      "돌아가는 것",
      "동그란 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 168,
    "pokedex_no": "162",
    "name": "마그비",
    "specialties": [
      "점화"
    ],
    "env": "따뜻함",
    "likes": [
      "불꽃이 느껴지는 것",
      "석조",
      "보고 즐길 수 있는 것",
      "깜찍한 것",
      "흔들리는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 169,
    "pokedex_no": "163",
    "name": "마그마",
    "specialties": [
      "점화"
    ],
    "env": "따뜻함",
    "likes": [
      "불꽃이 느껴지는 것",
      "석조",
      "전기로 움직이는 것",
      "딱딱한 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 170,
    "pokedex_no": "164",
    "name": "마그마번",
    "specialties": [
      "점화",
      "분쇄"
    ],
    "env": "따뜻함",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 171,
    "pokedex_no": "165",
    "name": "꼬지지",
    "specialties": [
      "땅고르기"
    ],
    "env": "건조함",
    "likes": [
      "석조",
      "딱딱한 것",
      "자연이 느껴지는 것",
      "목제",
      "동그란 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 172,
    "pokedex_no": "166",
    "name": "꼬지모",
    "specialties": [
      "거래"
    ],
    "env": "건조함",
    "likes": [
      "석조",
      "딱딱한 것",
      "자연이 느껴지는 것",
      "목제",
      "동그란 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 173,
    "pokedex_no": "167",
    "name": "니로우",
    "specialties": [
      "거래",
      "공중날기"
    ],
    "env": "어두움",
    "likes": [
      "빈짝이는 것",
      "바람이 느껴지는 것",
      "다 같이 사용하는 것",
      "럭셔리",
      "천으로 만든 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 174,
    "pokedex_no": "168",
    "name": "돈크로우",
    "specialties": [
      "거래",
      "공중날기"
    ],
    "env": "nan",
    "likes": [
      "반짝이는 것",
      "바람이 느껴지는 것",
      "기이한 것",
      "문자가 있는 것",
      "유리로 만든 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 175,
    "pokedex_no": "169",
    "name": "에버라스",
    "specialties": [
      "분쇄",
      "땅고르기"
    ],
    "env": "어두움",
    "likes": [
      "석조",
      "흙이 느껴지는 것",
      "럭셔리",
      "반짝이는 것",
      "음식 같은 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 176,
    "pokedex_no": "170",
    "name": "데기라스",
    "specialties": [
      "분쇄",
      "땅고르기"
    ],
    "env": "어두움",
    "likes": [
      "석조",
      "딱딱한 것",
      "럭셔리",
      "반짝이는 것",
      "보고 즐길 수 있는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 177,
    "pokedex_no": "171",
    "name": "마기라스",
    "specialties": [
      "분쇄",
      "땅고르기"
    ],
    "env": "nan",
    "likes": [
      "석조",
      "딱딱한 것",
      "럭셔리",
      "반짝이는 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 178,
    "pokedex_no": "172",
    "name": "연꽃몬",
    "specialties": [
      "급수"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "자연이 느껴지는 것",
      "청결",
      "넣을 수 있는 것",
      "소리가 나는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 179,
    "pokedex_no": "173",
    "name": "로토스",
    "specialties": [
      "급수"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "자연이 느껴지는 것",
      "청결",
      "넣을 수 있는 것",
      "소리가 나는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 180,
    "pokedex_no": "174",
    "name": "로파파",
    "specialties": [
      "급수",
      "분위기 메이킹"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "자연이 느껴지는 것",
      "놀이 공간",
      "넣을 수 있는 것",
      "소리가 나는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 181,
    "pokedex_no": "175",
    "name": "입치트",
    "specialties": [
      "거래",
      "건축"
    ],
    "env": "nan",
    "likes": [
      "메탈릭",
      "깜찍한 것",
      "컬러풀",
      "음식 같은 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 182,
    "pokedex_no": "176",
    "name": "코터스",
    "specialties": [
      "점화"
    ],
    "env": "따뜻함",
    "likes": [
      "불꽃이 느껴지는 것",
      "석조",
      "메탈릭",
      "딱딱한 것",
      "보고 즐길 수 있는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 183,
    "pokedex_no": "177",
    "name": "귀뚤뚜기",
    "specialties": [
      "분위기 메이킹"
    ],
    "env": "어두움",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "소리가 나는 것",
      "컬러풀",
      "보고 즐길 수 있는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 184,
    "pokedex_no": "178",
    "name": "귀뚤톡크",
    "specialties": [
      "분위기 메이킹"
    ],
    "env": "어두움",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "소리가 나는 것",
      "컬러풀",
      "보고 즐길 수 있는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 185,
    "pokedex_no": "179",
    "name": "페라페",
    "specialties": [
      "분위기 메이킹",
      "공중날기"
    ],
    "env": "따뜻함",
    "likes": [
      "바람이 느껴지는 것",
      "천으로 만든 것",
      "홀쭉한 것",
      "놀이 공간",
      "소리가 나는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 186,
    "pokedex_no": "180",
    "name": "리오르",
    "specialties": [
      "건축"
    ],
    "env": "어두움",
    "likes": [
      "트레이닝에 쓰는 것",
      "천으로 만든 것",
      "건설",
      "모여 있는 것",
      "보고 즐길 수 있는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 187,
    "pokedex_no": "181",
    "name": "루카리오",
    "specialties": [
      "건축"
    ],
    "env": "nan",
    "likes": [
      "트레이닝에 쓰는 것",
      "메탈릭",
      "건설",
      "어려워 보이는 것",
      "상처를 치유하는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 188,
    "pokedex_no": "182",
    "name": "로토무(스테레오)",
    "specialties": [
      "DJ"
    ],
    "env": "밝음",
    "likes": [
      "반짝이는 것",
      "유리로 만든 것",
      "소리가 나는 것",
      "다 같이 사용하는 것",
      "네모난 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 189,
    "pokedex_no": "183",
    "name": "활화르바",
    "specialties": [
      "점화",
      "어지르기"
    ],
    "env": "nan",
    "likes": [
      "자연이 느껴지는 것",
      "불꽃이 느껴지는 것",
      "뾰족한 것",
      "목제",
      "상징"
    ],
    "flavor": " 쓴맛",
    "produce": "실뭉치"
  },
  {
    "id": 190,
    "pokedex_no": "184",
    "name": "불카모스",
    "specialties": [
      "점화",
      "어지르기"
    ],
    "env": "nan",
    "likes": [
      "자연이 느껴지는 것",
      "불꽃이 느껴지는 것",
      "문자가 있는 것",
      "목제",
      "상징"
    ],
    "flavor": " 떫은맛",
    "produce": "실뭉치"
  },
  {
    "id": 191,
    "pokedex_no": "185",
    "name": "나몰빼미",
    "specialties": [
      "재배"
    ],
    "env": "어두움",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "바람이 느껴지는 것",
      "넣을 수 있는 것",
      "돌아가는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 192,
    "pokedex_no": "186",
    "name": "빼미스로우",
    "specialties": [
      "재배",
      "절삭"
    ],
    "env": "어두움",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "바람이 느껴지는 것",
      "홀쭉한 것",
      "청결"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 193,
    "pokedex_no": "187",
    "name": "모크나이퍼",
    "specialties": [
      "재배",
      "절삭"
    ],
    "env": "어두움",
    "likes": [
      "자연이 느껴지는 것",
      "기이한 것",
      "목제",
      "바람이 느껴지는 것",
      "문자가 있는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 194,
    "pokedex_no": "188",
    "name": "염버니",
    "specialties": [
      "점화"
    ],
    "env": "따뜻함",
    "likes": [
      "불꽃이 느껴지는 것",
      "석조",
      "부드러운 것",
      "다 같이 사용하는 것",
      "뾰족한 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 195,
    "pokedex_no": "189",
    "name": "래비풋",
    "specialties": [
      "점화"
    ],
    "env": "nan",
    "likes": [
      "불꽃이 느껴지는 것",
      "석조",
      "놀이 공간",
      "다 같이 사용하는 것",
      "넣을 수 있는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 196,
    "pokedex_no": "190",
    "name": "에이스번",
    "specialties": [
      "점화",
      "분위기 메이킹"
    ],
    "env": "nan",
    "likes": [
      "불꽃이 느껴지는 것",
      "석조",
      "놀이 공간",
      "다 같이 사용하는 것",
      "동그란 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 197,
    "pokedex_no": "191",
    "name": "탐리스",
    "specialties": [
      "탐색",
      "분위기 메이킹"
    ],
    "env": "따뜻함",
    "likes": [
      "부드러운 것",
      "목제",
      "보고 즐길 수 있는 것",
      "음식 같은 것",
      "동그란 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 198,
    "pokedex_no": "192",
    "name": "요씽리스",
    "specialties": [
      "파티"
    ],
    "env": "따뜻함",
    "likes": [
      "부드러운 것",
      "메탈릭",
      "다 같이 사용하는 것",
      "음식 같은 것",
      "럭셔리"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 199,
    "pokedex_no": "193",
    "name": "탄동",
    "specialties": [
      "점화",
      "분류"
    ],
    "env": "따뜻함",
    "likes": [
      "석조",
      "불꽃이 느껴지는 것",
      "딱딱한 것",
      "메탈릭",
      "탈것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 200,
    "pokedex_no": "194",
    "name": "탄차곤",
    "specialties": [
      "점화",
      "분류"
    ],
    "env": "따뜻함",
    "likes": [
      "석조",
      "불꽃이 느껴지는 것",
      "딱딱한 것",
      "메탈릭",
      "탈것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 201,
    "pokedex_no": "195",
    "name": "석탄산",
    "specialties": [
      "점화",
      "분류"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 202,
    "pokedex_no": "196",
    "name": "일레즌",
    "specialties": [
      "발전"
    ],
    "env": "촉촉함",
    "likes": [
      "전기로 움직이는 것",
      "반짝이는 것",
      "소리가 나는 것",
      "유리로 만든 것",
      "쓰레기"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 203,
    "pokedex_no": "197",
    "name": "스트린더 (하이한 모습)",
    "specialties": [
      "발전",
      "분위기 메이킹"
    ],
    "env": "촉촉함",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 204,
    "pokedex_no": "197",
    "name": "스트린더 (로우한 모습)",
    "specialties": [
      "발전",
      "분위기 메이킹"
    ],
    "env": "촉촉함",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 205,
    "pokedex_no": "198",
    "name": "쫀도기",
    "specialties": [
      "탐색"
    ],
    "env": "따뜻함",
    "likes": [
      "깜찍한 것",
      "보고 즐길 수 있는 것",
      "부드러운 것",
      "불꽃이 느껴지는 것",
      "문자가 있는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 206,
    "pokedex_no": "199",
    "name": "바우첼",
    "specialties": [
      "탐색",
      "거래"
    ],
    "env": "nan",
    "likes": [
      "깜찍한 것",
      "보고 즐길 수 있는 것",
      "다 같이 사용하는 것",
      "불꽃이 느껴지는 것",
      "음식 같은 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 207,
    "pokedex_no": "200",
    "name": "카르본",
    "specialties": [
      "점화"
    ],
    "env": "따뜻함",
    "likes": [
      "불꽃이 느껴지는 것",
      "석조",
      "신기한 것",
      "트레이닝에 쓰는 것",
      "럭셔리"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 208,
    "pokedex_no": "201",
    "name": "카디나르마",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 209,
    "pokedex_no": "202",
    "name": "파라블레이즈",
    "specialties": [
      "점화",
      "거래"
    ],
    "env": "nan",
    "likes": [
      "불꽃이 느껴지는 것",
      "석조",
      "기이한 것",
      "신기한 것",
      "럭셔리"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 210,
    "pokedex_no": "203",
    "name": "초롱순",
    "specialties": [
      "어지르기"
    ],
    "env": "어두움",
    "likes": [
      "석조",
      "딱딱한 것",
      "쓰레기",
      "반짝이는 것",
      "어려워 보이는 것"
    ],
    "flavor": " 쓴맛",
    "produce": "철"
  },
  {
    "id": 211,
    "pokedex_no": "204",
    "name": "킬라플로르",
    "specialties": [
      "어지르기"
    ],
    "env": "어두움",
    "likes": [
      "석조",
      "딱딱한 것",
      "쓰레기",
      "반짝이는 것",
      "어려워 보이는 것"
    ],
    "flavor": " 쓴맛",
    "produce": "철"
  },
  {
    "id": 212,
    "pokedex_no": "205",
    "name": "모으령",
    "specialties": [
      "컬렉터"
    ],
    "env": "어두움",
    "likes": [
      "기이한 것",
      "메탈릭",
      "신기한 것",
      "반짝이는 것",
      "어려워 보이는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 213,
    "pokedex_no": "206",
    "name": "타부자고",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 214,
    "pokedex_no": "207",
    "name": "식스테일",
    "specialties": [
      "점화"
    ],
    "env": "따뜻함",
    "likes": [
      "불꽃이 느껴지는 것",
      "부드러운 것",
      "깜찍한 것",
      "동그란 것",
      "만발한 꽃"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 215,
    "pokedex_no": "208",
    "name": "나인테일",
    "specialties": [
      "점화"
    ],
    "env": "nan",
    "likes": [
      "불꽃이 느껴지는 것",
      "부드러운 것",
      "보고 즐길 수 있는 것",
      "럭셔리",
      "만발한 꽃"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 216,
    "pokedex_no": "209",
    "name": "발챙이",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 217,
    "pokedex_no": "210",
    "name": "슈륙챙이",
    "specialties": [
      "급수"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 218,
    "pokedex_no": "211",
    "name": "강챙이",
    "specialties": [
      "급수",
      "건축"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "청결",
      "건설",
      "트레이닝에 쓰는 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 219,
    "pokedex_no": "212",
    "name": "왕구리",
    "specialties": [
      "급수",
      "분위기 메이킹"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "놀이 공간",
      "소리가 나는 것",
      "모여 있는 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 220,
    "pokedex_no": "213",
    "name": "캐이시",
    "specialties": [
      "순간이동"
    ],
    "env": "어두움",
    "likes": [
      "신기한 것",
      "흔들리는 것",
      "메탈릭",
      "부드러운 것",
      "보고 즐길 수 있는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 221,
    "pokedex_no": "214",
    "name": "윤겔라",
    "specialties": [
      "순간이동"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 222,
    "pokedex_no": "215",
    "name": "후딘",
    "specialties": [
      "순간이동",
      "거래"
    ],
    "env": "어두움",
    "likes": [
      "신기한 것",
      "흔들리는 것",
      "메탈릭",
      "문자가 있는 것",
      "보고 즐길 수 있는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 223,
    "pokedex_no": "216",
    "name": "흉내내",
    "specialties": [
      "분류"
    ],
    "env": "nan",
    "likes": [
      "신기한 것",
      "깜찍한 것",
      "탈것",
      "놀이 공간",
      "컬러풀"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 224,
    "pokedex_no": "217",
    "name": "마임맨",
    "specialties": [
      "분류",
      "건축"
    ],
    "env": "밝음",
    "likes": [
      "신기한 것",
      "깜찍한 것",
      "탈것",
      "흔들리는 것",
      "보고 즐길 수 있는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 225,
    "pokedex_no": "218",
    "name": "폴리곤",
    "specialties": [
      "리사이클"
    ],
    "env": "밝음",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 226,
    "pokedex_no": "219",
    "name": "폴리곤2",
    "specialties": [
      "리사이클"
    ],
    "env": "nan",
    "likes": [
      "부드러운 것",
      "신기한 것",
      "동그란 것",
      "건설",
      "컬러풀"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 227,
    "pokedex_no": "220",
    "name": "폴리곤Z",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 228,
    "pokedex_no": "221",
    "name": "미뇽",
    "specialties": [
      "급수"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "불꽃이 느껴지는 것",
      "청결",
      "깜찍한 것",
      "홀쭉한 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 229,
    "pokedex_no": "222",
    "name": "신뇽",
    "specialties": [
      "급수"
    ],
    "env": "nan",
    "likes": [
      "물이 느껴지는 것",
      "불꽃이 느껴지는 것",
      "청결",
      "유리로 만든 것",
      "홀쭉한 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 230,
    "pokedex_no": "223",
    "name": "망나뇽",
    "specialties": [
      "급수",
      "공중날기"
    ],
    "env": "촉촉함",
    "likes": [
      "불꽃이 느껴지는 것",
      "바람이 느껴지는 것",
      "청결",
      "상징",
      "만발한 꽃"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 231,
    "pokedex_no": "224",
    "name": "브케인",
    "specialties": [
      "점화"
    ],
    "env": "따뜻함",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 232,
    "pokedex_no": "225",
    "name": "마그케인",
    "specialties": [
      "점화"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 233,
    "pokedex_no": "226",
    "name": "블레이범",
    "specialties": [
      "점화",
      "거래"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 234,
    "pokedex_no": "227",
    "name": "무우마",
    "specialties": [
      "거래"
    ],
    "env": "어두움",
    "likes": [
      "기이한 것",
      "신기한 것",
      "반짝이는 것",
      "컬러풀",
      "보고 즐길 수 있는 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 235,
    "pokedex_no": "228",
    "name": "무우마직",
    "specialties": [
      "분류",
      "거래"
    ],
    "env": "nan",
    "likes": [
      "기이한 것",
      "신기한 것",
      "소리가 나는 것",
      "움직이는 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 236,
    "pokedex_no": "229",
    "name": "키링키",
    "specialties": [
      "분류"
    ],
    "env": "따뜻함",
    "likes": [
      "부드러운 것",
      "신기한 것",
      "탈것",
      "보고 즐길 수 있는 것",
      "홀쭉한 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 237,
    "pokedex_no": "230",
    "name": "키키링",
    "specialties": [
      "분류",
      "탐색"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 238,
    "pokedex_no": "231",
    "name": "랄토스",
    "specialties": [
      "순간이동"
    ],
    "env": "nan",
    "likes": [
      "신기한 것",
      "깜찍한 것",
      "상처를 치유하는 것",
      "보고 즐길 수 있는 것",
      "상징"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 239,
    "pokedex_no": "232",
    "name": "킬리아",
    "specialties": [
      "순간이동"
    ],
    "env": "밝음",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 240,
    "pokedex_no": "233",
    "name": "가디안",
    "specialties": [
      "순간이동",
      "거래"
    ],
    "env": "밝음",
    "likes": [
      "신기한 것",
      "럭셔리",
      "상처를 치유하는 것",
      "보고 즐길 수 있는 것",
      "상징"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 241,
    "pokedex_no": "234",
    "name": "엘레이드",
    "specialties": [
      "순간이동",
      "건축"
    ],
    "env": "nan",
    "likes": [
      "신기한 것",
      "트레이닝에 쓰는 것",
      "상처를 치유하는 것",
      "건설",
      "천으로 만든 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 242,
    "pokedex_no": "235",
    "name": "플러시",
    "specialties": [
      "발전"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 243,
    "pokedex_no": "236",
    "name": "마이농",
    "specialties": [
      "발전"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 244,
    "pokedex_no": "237",
    "name": "톱치",
    "specialties": [
      "땅고르기",
      "어지르기"
    ],
    "env": "건조함",
    "likes": [
      "흙이 느껴지는 것",
      "딱딱한 것",
      "신기한 것",
      "보고 즐길 수 있는 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 매운맛",
    "produce": "점토"
  },
  {
    "id": 245,
    "pokedex_no": "238",
    "name": "비르라바",
    "specialties": [
      "땅고르기",
      "공중날기"
    ],
    "env": "건조함",
    "likes": [
      "흙이 느껴지는 것",
      "불꽃이 느껴지는 것",
      "자연이 느껴지는 것",
      "럭셔리",
      "소리가 나는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 246,
    "pokedex_no": "239",
    "name": "플라이곤",
    "specialties": [
      "땅고르기",
      "공중날기"
    ],
    "env": "nan",
    "likes": [
      "흙이 느껴지는 것",
      "불꽃이 느껴지는 것",
      "자연이 느껴지는 것",
      "석조",
      "목제"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 247,
    "pokedex_no": "240",
    "name": "파비코",
    "specialties": [
      "어지르기"
    ],
    "env": "밝음",
    "likes": [
      "부드러운 것",
      "바람이 느껴지는 것",
      "깜찍한 것",
      "보고 즐길 수 있는 것",
      "청결"
    ],
    "flavor": " 단맛",
    "produce": "솜"
  },
  {
    "id": 248,
    "pokedex_no": "241",
    "name": "파비코리",
    "specialties": [
      "어지르기",
      "공중날기"
    ],
    "env": "밝음",
    "likes": [
      "부드러운 것",
      "바람이 느껴지는 것",
      "깜찍한 것",
      "보고 즐길 수 있는 것",
      "소리가 나는 것"
    ],
    "flavor": " 신맛",
    "produce": "솜"
  },
  {
    "id": 249,
    "pokedex_no": "242",
    "name": "해골몽",
    "specialties": [
      "분류"
    ],
    "env": "어두움",
    "likes": [
      "기이한 것",
      "신기한 것",
      "탈것",
      "유리로 만든 것",
      "천으로 만든 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 250,
    "pokedex_no": "243",
    "name": "미라몽",
    "specialties": [
      "분류"
    ],
    "env": "nan",
    "likes": [
      "기이한 것",
      "신기한 것",
      "탈것",
      "부드러운 것",
      "넣을 수 있는 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 251,
    "pokedex_no": "244",
    "name": "야느와르몽",
    "specialties": [
      "분류",
      "거래"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 252,
    "pokedex_no": "245",
    "name": "메탕",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 253,
    "pokedex_no": "246",
    "name": "메탕구",
    "specialties": [
      "리사이클"
    ],
    "env": "시원함",
    "likes": [
      "메탈릭",
      "신기한 것",
      "딱딱한 것",
      "어려워 보이는 것",
      "석조"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 254,
    "pokedex_no": "247",
    "name": "메타그로스",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 255,
    "pokedex_no": "248",
    "name": "주리비얀",
    "specialties": [
      "재배",
      "어지르기"
    ],
    "env": "촉촉함",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "물이 느껴지는 것",
      "흔들리는 것",
      "반짝이는 것"
    ],
    "flavor": " 신맛",
    "produce": ""
  },
  {
    "id": 256,
    "pokedex_no": "249",
    "name": "샤비",
    "specialties": [
      "재배",
      "어지르기"
    ],
    "env": "nan",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "물이 느껴지는 것",
      "청결",
      "반짝이는 것"
    ],
    "flavor": " 쓴맛",
    "produce": "덩굴 끈"
  },
  {
    "id": 257,
    "pokedex_no": "250",
    "name": "샤로다",
    "specialties": [
      "재배",
      "어지르기"
    ],
    "env": "nan",
    "likes": [
      "자연이 느껴지는 것",
      "목제",
      "물이 느껴지는 것",
      "넣을 수 있는 것",
      "홀쭉한 것"
    ],
    "flavor": " 떫은맛",
    "produce": "덩굴 끈"
  },
  {
    "id": 258,
    "pokedex_no": "251",
    "name": "개구마르",
    "specialties": [
      "급수"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "청결",
      "보고 즐길 수 있는 것",
      "넣을 수 있는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 259,
    "pokedex_no": "252",
    "name": "개굴반장",
    "specialties": [
      "급수"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "청결",
      "보고 즐길 수 있는 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 260,
    "pokedex_no": "253",
    "name": "개굴닌자",
    "specialties": [
      "급수",
      "절삭"
    ],
    "env": "nan",
    "likes": [
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "청결",
      "반짝이는 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 261,
    "pokedex_no": "254",
    "name": "데덴네",
    "specialties": [
      "탐색"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "깜찍한 것",
      "보고 즐길 수 있는 것",
      "다 같이 사용하는 것",
      "음식 같은 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 262,
    "pokedex_no": "255",
    "name": "음뱃",
    "specialties": [
      "탐색"
    ],
    "env": "nan",
    "likes": [
      "바람이 느껴지는 것",
      "천으로 만든 것",
      "보고 즐길 수 있는 것",
      "럭셔리",
      "음식 같은 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 263,
    "pokedex_no": "256",
    "name": "음번",
    "specialties": [
      "탐색",
      "공중날기"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 264,
    "pokedex_no": "257",
    "name": "파라꼬",
    "specialties": [
      "절삭"
    ],
    "env": "밝음",
    "likes": [
      "바람이 느껴지는 것",
      "반짝이는 것",
      "넣을 수 있는 것",
      "홀쭉한 것",
      "목제"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 265,
    "pokedex_no": "258",
    "name": "파크로우",
    "specialties": [
      "절삭"
    ],
    "env": "밝음",
    "likes": [
      "바람이 느껴지는 것",
      "반짝이는 것",
      "넣을 수 있는 것",
      "홀쭉한 것",
      "목제"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 266,
    "pokedex_no": "259",
    "name": "아머까오",
    "specialties": [
      "절삭",
      "공중날기"
    ],
    "env": "nan",
    "likes": [
      "바람이 느껴지는 것",
      "메탈릭",
      "반짝이는 것",
      "넣을 수 있는 것",
      "목제"
    ],
    "flavor": " 쓴맛"
  },
  {
    "id": 267,
    "pokedex_no": "260",
    "name": "드라꼰",
    "specialties": [
      "분류",
      "탐색"
    ],
    "env": "촉촉함",
    "likes": [
      "불꽃이 느껴지는 것",
      "기이한 것",
      "탈것",
      "신기한 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 268,
    "pokedex_no": "261",
    "name": "드래런치",
    "specialties": [
      "분류",
      "탐색"
    ],
    "env": "촉촉함",
    "likes": [
      "불꽃이 느껴지는 것",
      "탈것",
      "기이한 것",
      "다 같이 사용하는 것",
      "단맛"
    ],
    "flavor": "nan"
  },
  {
    "id": 269,
    "pokedex_no": "262",
    "name": "드래펄트",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 270,
    "pokedex_no": "263",
    "name": "나오하",
    "specialties": [
      "재배"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "만발한 꽃",
      "넣을 수 있는 것",
      "컬러풀",
      "깜찍한 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 271,
    "pokedex_no": "264",
    "name": "나로테",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 272,
    "pokedex_no": "265",
    "name": "마스카나",
    "specialties": [
      "재배",
      "분위기 메이킹"
    ],
    "env": "nan",
    "likes": [
      "자연이 느껴지는 것",
      "만발한 꽃",
      "반짝이는 것",
      "럭셔리",
      "깜찍한 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 273,
    "pokedex_no": "266",
    "name": "찌리비",
    "specialties": [
      "발전"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "바람이 느껴지는 것",
      "바다가 느껴지는 것",
      "모여 있는 것",
      "어려워 보이는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 274,
    "pokedex_no": "267",
    "name": "찌리비크",
    "specialties": [
      "발전",
      "공중날기"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "바람이 느껴지는 것",
      "바다가 느껴지는 것",
      "모여 있는 것",
      "홀쭉한 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 275,
    "pokedex_no": "268",
    "name": "어리짱",
    "specialties": [
      "건축"
    ],
    "env": "밝음",
    "likes": [
      "깜찍한 것",
      "메탈릭",
      "건설",
      "음식 같은 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 276,
    "pokedex_no": "269",
    "name": "벼리짱",
    "specialties": [
      "건축"
    ],
    "env": "밝음",
    "likes": [
      "깜찍한 것",
      "메탈릭",
      "건설",
      "다 같이 사용하는 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 277,
    "pokedex_no": "270",
    "name": "두드리짱 (거장)",
    "specialties": [
      "장인"
    ],
    "env": "밝음",
    "likes": [
      "깜찍한 것",
      "메탈릭",
      "건설",
      "네모난 것",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 278,
    "pokedex_no": "271",
    "name": "프테라",
    "specialties": [
      "공중날기"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 279,
    "pokedex_no": "272",
    "name": "두개도스",
    "specialties": [
      "분쇄"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 280,
    "pokedex_no": "273",
    "name": "램펄드",
    "specialties": [
      "분쇄",
      "어지르기"
    ],
    "env": "nan",
    "likes": [
      "석조",
      "딱딱한 것",
      "메탈릭",
      "럭셔리",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 떫은맛",
    "produce": "돌"
  },
  {
    "id": 281,
    "pokedex_no": "274",
    "name": "방패톱스",
    "specialties": [
      "분쇄"
    ],
    "env": "nan",
    "likes": [
      "석조",
      "딱딱한 것",
      "메탈릭",
      "럭셔리",
      "동그란 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 282,
    "pokedex_no": "275",
    "name": "바리톱스",
    "specialties": [
      "분쇄",
      "어지르기"
    ],
    "env": "nan",
    "likes": [
      "석조",
      "딱딱한 것",
      "메탈릭",
      "럭셔리",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 쓴맛",
    "produce": "돌"
  },
  {
    "id": 283,
    "pokedex_no": "276",
    "name": "티고라스",
    "specialties": [
      "분쇄"
    ],
    "env": "nan",
    "likes": [
      "석조",
      "딱딱한 것",
      "불꽃이 느껴지는 것",
      "럭셔리",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 284,
    "pokedex_no": "277",
    "name": "견고라스",
    "specialties": [
      "분쇄",
      "어지르기"
    ],
    "env": "건조함",
    "likes": [
      "석조",
      "딱딱한 것",
      "불꽃이 느껴지는 것",
      "럭셔리",
      "트레이닝에 쓰는 것"
    ],
    "flavor": " 신맛",
    "produce": "돌"
  },
  {
    "id": 285,
    "pokedex_no": "278",
    "name": "아마루스",
    "specialties": [
      "분쇄"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 286,
    "pokedex_no": "279",
    "name": "아마루르가",
    "specialties": [
      "분쇄",
      "어지르기"
    ],
    "env": "nan",
    "likes": [
      "석조",
      "딱딱한 것",
      "반짝이는 것",
      "소리가 나는 것",
      "상징"
    ],
    "flavor": " 신맛",
    "produce": "돌"
  },
  {
    "id": 287,
    "pokedex_no": "280",
    "name": "이브이",
    "specialties": [
      "거래"
    ],
    "env": "따뜻함",
    "likes": [
      "부드러운 것",
      "석조",
      "깜찍한 것",
      "문자가 있는 것",
      "다 같이 사용하는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 288,
    "pokedex_no": "281",
    "name": "샤미드",
    "specialties": [
      "급수"
    ],
    "env": "촉촉함",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 289,
    "pokedex_no": "282",
    "name": "쥬피썬더",
    "specialties": [
      "발전"
    ],
    "env": "밝음",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 290,
    "pokedex_no": "283",
    "name": "부스터",
    "specialties": [
      "점화"
    ],
    "env": "따뜻함",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 291,
    "pokedex_no": "284",
    "name": "에브이",
    "specialties": [
      "분류"
    ],
    "env": "밝음",
    "likes": [
      "신기한 것",
      "바람이 느껴지는 것",
      "깜찍한 것",
      "어려워 보이는 것",
      "보고 즐길 수 있는 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 292,
    "pokedex_no": "285",
    "name": "블래키",
    "specialties": [
      "탐색"
    ],
    "env": "어두움",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 293,
    "pokedex_no": "286",
    "name": "리피아",
    "specialties": [
      "재배"
    ],
    "env": "밝음",
    "likes": [
      "자연이 느껴지는 것",
      "만발한 꽃",
      "깜찍한 것",
      "천으로 만든 것",
      "상처를 치유하는 것"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 294,
    "pokedex_no": "287",
    "name": "글레이시아",
    "specialties": [
      "거래"
    ],
    "env": "시원함",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 295,
    "pokedex_no": "288",
    "name": "님피아",
    "specialties": [
      "분위기 메이킹"
    ],
    "env": "따뜻함",
    "likes": [
      "깜찍한 것",
      "자연이 느껴지는 것",
      "천으로 만든 것",
      "소리가 나는 것",
      "동그란 것"
    ],
    "flavor": " 단맛"
  },
  {
    "id": 296,
    "pokedex_no": "289",
    "name": "가이오가",
    "specialties": [
      "불명"
    ],
    "env": "촉촉함",
    "likes": [
      "물이 느껴지는 것",
      "바다가 느껴지는 것",
      "럭셔리",
      "반짝이는 것",
      "유리로 만든 것"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 297,
    "pokedex_no": "290",
    "name": "라이코",
    "specialties": [
      "발전"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "바람이 느껴지는 것",
      "반짝이는 것",
      "유리로 만든 것",
      "럭셔리"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 298,
    "pokedex_no": "291",
    "name": "앤테이",
    "specialties": [
      "점화"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 299,
    "pokedex_no": "292",
    "name": "스이쿤",
    "specialties": [
      "급수"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 300,
    "pokedex_no": "293",
    "name": "볼케니온",
    "specialties": [
      "점화"
    ],
    "env": "따뜻함",
    "likes": [
      "불꽃이 느껴지는 것",
      "물이 느껴지는 것",
      "석조",
      "넣을 수 있는 것",
      "상징"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 301,
    "pokedex_no": "294",
    "name": "프리져",
    "specialties": [
      "공중날기"
    ],
    "env": "nan",
    "likes": [
      "물이 느껴지는 것",
      "바람이 느껴지는 것",
      "반짝이는 것",
      "상징",
      "럭셔리"
    ],
    "flavor": " 신맛"
  },
  {
    "id": 302,
    "pokedex_no": "295",
    "name": "썬더",
    "specialties": [
      "공중날기"
    ],
    "env": "밝음",
    "likes": [
      "전기로 움직이는 것",
      "바람이 느껴지는 것",
      "유리로 만든 것",
      "상징",
      "럭셔리"
    ],
    "flavor": " 매운맛"
  },
  {
    "id": 303,
    "pokedex_no": "296",
    "name": "파이어",
    "specialties": [
      "공중날기"
    ],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 304,
    "pokedex_no": "297",
    "name": "루기아",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 305,
    "pokedex_no": "298",
    "name": "칠색조",
    "specialties": [],
    "env": "nan",
    "likes": [],
    "flavor": "nan"
  },
  {
    "id": 306,
    "pokedex_no": "299",
    "name": "뮤츠",
    "specialties": [
      "순간이동"
    ],
    "env": "어두움",
    "likes": [
      "신기한 것",
      "보고 즐길 수 있는 것",
      "문자가 있는 것",
      "어려워 보이는 것",
      "석조"
    ],
    "flavor": " 떫은맛"
  },
  {
    "id": 307,
    "pokedex_no": "300",
    "name": "뮤",
    "specialties": [
      "순간이동"
    ],
    "env": "nan",
    "likes": [
      "신기한 것",
      "보고 즐길 수 있는 것",
      "럭셔리",
      "어려워 보이는 것",
      "놀이 공간"
    ],
    "flavor": " 단맛"
  }
];