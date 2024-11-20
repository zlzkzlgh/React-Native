import React, {useState} from "react"
import { BoardContext } from "./context/BoardContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BoardList from "./pages/BoardList"
import WritePost from "./pages/WritePost"
import PostDetail2 from "./pages/PostDetail2"

const App = () => {
  const [boardList, setBoardList] = useState([
    { id: 1, title: "첫 번째 게시글", author: "작성자1", writingTime: "2024-11-20 12:00", content: "첫 번째 게시글의 내용입니다." },
    { id: 2, title: "두 번째 게시글", author: "작성자2", writingTime: "2024-11-20 13:00", content: "두 번째 게시글의 내용입니다." },
    { id: 3, title: "세 번째 게시글", author: "작성자3", writingTime: "2024-11-20 14:00", content: "세 번째 게시글의 내용입니다." },
    { id: 4, title: "네 번째 게시글", author: "작성자4", writingTime: "2024-11-20 15:00", content: "네 번째 게시글의 내용입니다." },
    { id: 5, title: "다섯 번째 게시글", author: "작성자5", writingTime: "2024-11-20 16:00", content: "다섯 번째 게시글의 내용입니다." },
    { id: 6, title: "여섯 번째 게시글", author: "작성자6", writingTime: "2024-11-20 17:00", content: "여섯 번째 게시글의 내용입니다." },
    { id: 7, title: "일곱 번째 게시글", author: "작성자7", writingTime: "2024-11-20 18:00", content: "일곱 번째 게시글의 내용입니다." },
    { id: 8, title: "여덟 번째 게시글", author: "작성자8", writingTime: "2024-11-20 19:00", content: "여덟 번째 게시글의 내용입니다." },
    { id: 9, title: "아홉 번째 게시글", author: "작성자9", writingTime: "2024-11-20 20:00", content: "아홉 번째 게시글의 내용입니다." },
    { id: 10, title: "열 번째 게시글", author: "작성자10", writingTime: "2024-11-20 21:00", content: "열 번째 게시글의 내용입니다." },
    { id: 11, title: "열한 번째 게시글", author: "작성자11", writingTime: "2024-11-21 10:00", content: "열한 번째 게시글의 내용입니다." },
    { id: 12, title: "열두 번째 게시글", author: "작성자12", writingTime: "2024-11-21 11:00", content: "열두 번째 게시글의 내용입니다." },
    { id: 13, title: "열세 번째 게시글", author: "작성자13", writingTime: "2024-11-21 12:00", content: "열세 번째 게시글의 내용입니다." },
    { id: 14, title: "열네 번째 게시글", author: "작성자14", writingTime: "2024-11-21 13:00", content: "열네 번째 게시글의 내용입니다." },
    { id: 15, title: "열다섯 번째 게시글", author: "작성자15", writingTime: "2024-11-21 14:00", content: "열다섯 번째 게시글의 내용입니다." },
  ]);

  return(
    <BoardContext.Provider value={{boardList, setBoardList}}>
      <Router>
        <Routes>
          <Route path="/" element={<BoardList />}/>
          <Route path="/write" element={<WritePost />}/>
          <Route path="/post/:id" element={<PostDetail2 />} />
        </Routes>
      </Router>
    </BoardContext.Provider>
  )
}

export default App;