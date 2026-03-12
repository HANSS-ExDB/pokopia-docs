import os
import re

# 1. 설정
folder_path = r'C:\Users\gkstmdtn\Desktop\Pokopia Docs\images' # 이미지 폴더 경로
start_no = 150  # 이 번호부터 뒤로 밀기 시작 (예: 81번 자리를 비우고 싶을 때)
shift_amount = 2 # 몇 칸을 밀 것인지

os.chdir(folder_path)

# 2. 파일 목록 가져오기 및 번호 추출
files = []
for filename in os.listdir():
    # docs_081.webp 같은 형식에서 숫자만 추출
    match = re.search(r'docs_(\d+)', filename)
    if match:
        files.append((int(match.group(1)), filename))

# 3. 뒤에서부터 번호 변경 (덮어쓰기 방지 위해 역순 정렬)
files.sort(key=lambda x: x[0], reverse=True)

print(f"🚀 {start_no}번부터 파일명을 {shift_amount}칸씩 뒤로 미룹니다.")
print("-" * 40)

for num, filename in files:
    if num >= start_no:
        ext = os.path.splitext(filename)[1]
        new_num = num + shift_amount
        new_name = f"docs_{new_num:03d}{ext}"
        
        try:
            os.rename(filename, new_name)
            print(f"✅ {filename} -> {new_name}")
        except Exception as e:
            print(f"❌ {filename} 변경 실패: {e}")

print("-" * 40)
print("모든 작업이 완료되었습니다. 이제 빈 번호에 새 이미지를 넣으세요!")