import os

# 1. 이미지 파일들이 들어있는 폴더 경로 (사용자님의 경로로 수정)
folder_path = r'C:\Users\gkstmdtn\Desktop\Pokopia Docs\Pokémon Pokopia_등장 포켓몬 - 나무위키_files'

# 2. 해당 폴더로 이동
os.chdir(folder_path)

# 3. 폴더 내 파일 목록 가져오기 (webp, png 등 이미지 파일만)
files = [f for f in os.listdir() if f.endswith(('.webp', '.png', '.jpg', '.jpeg'))]

# 4. 파일 정렬 (나무위키에서 저장된 순서대로 정렬하기 위해 생성 시간순 추천)
# 만약 이름순이 편하시다면 files.sort() 사용
files.sort(key=os.path.getmtime) 

print(f"총 {len(files)}개의 파일을 변경합니다.")

# 5. 이름 변경 루프
for index, filename in enumerate(files, start=1):
    # 확장자 유지
    ext = os.path.splitext(filename)[1]
    
    # 새 파일명 생성 (docs_001 형식)
    new_name = f"docs_{index:03d}{ext}"
    
    # 실제 변경 실행
    try:
        os.rename(filename, new_name)
        print(f"{filename} -> {new_name}")
    except Exception as e:
        print(f"오류 발생 ({filename}): {e}")

print("모든 파일 이름 변경 완료!")