import axios from "axios";

// (1) API 서버에서 게시물 목록 조회
async function getList() {
  const response = await axios.get("https://11.fesp.shop/posts", {
    params: { type: "test", page: 1, limit: 10 },
  });
  return response.data;
}

// (2) 조회한 게시물 목록을 화면에 출력
async function renderList() {
  const list = await getList();
  const liLists = list.item.map((post) => {
    return `
    <li>
      <h2>[${post._id}] ${post.title}</h2>
      <span>조회수 : ${post.views}</span>
      <span>날짜 : ${post.creat}
    `;
  });
}
