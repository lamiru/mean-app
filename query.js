// 입력
db.posts.insert({"title": "title1", "user": "bob"})
db.posts.insert({"title": "title2", "user": "alice"})
db.posts.insert({"title": "title3", "user": "alice"})
db.posts.insert({"title": "title4", "user": "john"})
db.posts.insert({"title": "title5", "user": "bob"})
db.posts.insert({"title": "title6", "user": "bob"})
db.posts.insert({"title": "title7", "user": "alice"})
db.posts.insert({"title": "title8", "user": "john"})

// 전체 조회
db.posts.find()

// 조건 조회
db.posts.find({"user": "alice"})

// AND 조건 조회
db.posts.find({"user": "bob", "title": "title1"})

// OR 조건 조회
db.posts.find(
  {$or: [{"user": "alice"}, {"user": "bob"}]}
)

// 1건 수정
db.posts.update(
  {"user": "alice"},
  {$set: {"title": "에스윌"}}
)

// 전체 수정
db.posts.update(
  {"user": "alice"},
  {$set: {"title": "에스윌"}},
  {multi: true}
)

// 1건 삭제
db.posts.remove({"title": "에스윌"}, true)

// 전부 삭제
db.posts.remove({"title": "에스윌"})

// 3 depth
db.posts.insert({
  "title": "제목",
  "user": "앨리스",
  "friends": {
    "첫번째친구": "bob",
    "두번째친구": "john",
    "세번째친구": "nancy",
    "네번째친구가족": {
      "네번째친구의아빠": "david's father",
      "네번째친구의엄마": "david's mother",
      "네번째친구": "david"
    }
  }
})

db.posts.update(
  {"friends.네번째친구가족.네번째친구의아빠": {$exists: true}},
  {$set: { "friends.네번째친구가족.네번째친구의아빠": "david's father!!!"}},
  {multi: true}
)
