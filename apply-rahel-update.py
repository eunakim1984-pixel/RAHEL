#!/usr/bin/env python3
"""Patch visible copy in assets/rahel.js without changing JavaScript behavior."""
from pathlib import Path
import sys

js = Path("assets/rahel.js")
if not js.exists():
    sys.exit("assets/rahel.js를 찾을 수 없습니다. RAHEL 프로젝트 루트에서 실행해 주세요.")

text = js.read_text(encoding="utf-8")
replacements = [
    ('data-ko="채팅 상담" data-en="Live chat">채팅 상담', 'data-ko="웹사이트 상담" data-en="Website consultation">웹사이트 상담'),
    ('{ v:"업무 분야", en:"Practice areas", on:true }', '{ v:"전문 분야", en:"Specialties", on:true }'),
    ('{ v:"변호사 소개", en:"About the lawyer", on:true }', '{ v:"전문가 소개", en:"Expert profile", on:true }'),
    ('{ v:"성공 사례", en:"Case results", opt:true, on:true }', '{ v:"사례 · 성과", en:"Cases & results", opt:true, on:true }'),
    ('{ v:"법률 칼럼", en:"Legal column", opt:true, on:true }', '{ v:"인사이트 · 콘텐츠", en:"Insights & content", opt:true, on:true }'),
    ('{ v:"언론 보도", en:"Press", opt:true, on:true }', '{ v:"경력 · 프로필", en:"Credentials & profile", opt:true, on:true }'),
    ('{ v:"미니멀", en:"Minimal", d:"여백 많고 깔끔" }', '{ v:"미니멀", en:"Minimal", d:"여백이 넉넉하고 명확한" }'),
    ('{ v:"모던 럭셔리", en:"Modern Luxury", d:"고급스럽고 절제된" }', '{ v:"신뢰 중심", en:"Trust-led", d:"차분하고 전문적인" }'),
    ('{ v:"내추럴", en:"Natural", d:"자연스럽고 편안한" }', '{ v:"모던", en:"Modern", d:"현대적이고 정돈된" }'),
    ('{ v:"키치", en:"Kitsch", d:"알록달록 발랄, 복고 팝" }', '{ v:"정보 중심", en:"Information-led", d:"서비스와 정보를 빠르게 찾는" }'),
    ('{ v:"비비드 & 볼드", en:"Vivid & Bold", d:"강렬하고 자신감 있는" }', '{ v:"프리미엄", en:"Premium", d:"절제되고 무게감 있는" }'),
    ('{ v:"파스텔 소프트", en:"Pastel Soft", d:"부드럽고 사랑스러운" }', '{ v:"따뜻한", en:"Warm", d:"편안하고 친절한" }'),
    ('{ v:"감성 빈티지", en:"Vintage", d:"따뜻한 추억, 아날로그" }', '{ v:"의료·클리니컬", en:"Medical", d:"깨끗하고 신뢰감 있는" }'),
    ('{ v:"다크 & 시크", en:"Dark Chic", d:"세련되고 힙한, 몰입감" }', '{ v:"교육 친화형", en:"Education", d:"명확하고 접근하기 쉬운" }'),
    ('{ v:"코퍼레이트 트러스트", en:"Corporate", d:"신뢰·안정·전문" }', '{ v:"다크", en:"Dark", d:"집중도 높은 어두운 톤" }'),
    ('{ v:"일러스트 프렌들리", en:"Friendly", d:"친근하고 귀여운" }', '{ v:"맞춤 제안", en:"Custom", d:"전문 분야에 맞춰 제안" }'),
    ('data-ko="채팅 상담 신청" data-en="Start a chat consultation">채팅 상담 신청', 'data-ko="전문직 웹사이트 상담" data-en="Professional website consultation">전문직 웹사이트 상담'),
    ('data-ko="원하는 메뉴와 디자인 분위기를 고르고 제출하면 상담 채팅이 바로 열립니다." data-en="Pick your pages and design mood, then submit — the chat opens right away.">원하는 메뉴와 디자인 분위기를 고르고 제출하면 상담 채팅이 바로 열립니다.', 'data-ko="필요한 메뉴와 원하는 방향을 선택하면 상담 내용을 빠르게 정리할 수 있습니다." data-en="Choose the pages and direction you need to organize your website consultation.">필요한 메뉴와 원하는 방향을 선택하면 상담 내용을 빠르게 정리할 수 있습니다.'),
    ('data-ko="② 디자인 분위기" data-en="② Design mood">② 디자인 분위기', 'data-ko="② 웹사이트 방향" data-en="② Website direction">② 웹사이트 방향'),
    ('data-ko="제출 → 채팅 열기" data-en="Submit → Open chat">제출 → 채팅 열기', 'data-ko="상담 내용 보내기 →" data-en="Send consultation →">상담 내용 보내기 →'),
    ('data-ko="제출하면 선택 내용이 상담 채팅으로 자동 전송됩니다." data-en="On submit, your selections are sent to the chat automatically.">제출하면 선택 내용이 상담 채팅으로 자동 전송됩니다.', 'data-ko="선택한 내용은 상담 메시지에 함께 정리됩니다." data-en="Your selections are included in the consultation message.">선택한 내용은 상담 메시지에 함께 정리됩니다.'),
    ('return "[홈페이지 상담 신청]\\n▸ 선택 메뉴: " + (menus.join(", ") || "-") + "\\n▸ 디자인 분위기: " + mood;', 'return "[전문직 웹사이트 상담]\\n▸ 선택 메뉴: " + (menus.join(", ") || "-") + "\\n▸ 웹사이트 방향: " + mood;'),
    ('encodeURIComponent("[홈페이지 상담 신청]")', 'encodeURIComponent("[전문직 웹사이트 상담]")'),
]

changed = 0
for old, new in replacements:
    if old in text:
        text = text.replace(old, new)
        changed += 1

js.write_text(text, encoding="utf-8")

forbidden = ["변호사", "법률", "법무", "법률사무소", "lawyer", "attorney", "law firm"]
found = [term for term in forbidden if term.lower() in text.lower()]
if found:
    print("주의: assets/rahel.js에 잔여 표현이 있습니다:", ", ".join(found))
    sys.exit(2)

print(f"assets/rahel.js 카피 패치 완료: {changed}개 항목 변경")
print("JavaScript 함수/동작 로직은 변경하지 않았습니다.")
