import React, {useEffect, useState, useContext} from "react";
import { BoardContext } from "../context/BoardContext";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useNavigate,useParams } from "react-router-dom";

const EditPost = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [post, setPost] = useState({
        id: id,
        author:'',
        title:'',
        content:'',
    })
    const {boardList,setBoardList} = useContext(BoardContext);

    const {author, title, content} = post;

    useEffect(() => {
        const post = boardList.find((item) => item.id === parseInt(id));
        if(post){
            setPost(post);
        } else {
            alert('해당 게시글이 없습니다.');
        }
    },[])

    const backToPost = () => {
        navigate("/post/"+id);
    }

    // const handleOnChange = (e) => {
    //     const {value, name} = e.target;
    //     setPost((prevPost) => ({
    //         ...prevPost,
    //         [name]:value,
    //     }))
    // }

    const updatePost = (e) => {
        e.preventDefault();
        const newBoardList = boardList.map((item) => {
            if(item.id === post.id){
                return {...item, ...post}
            }
            return item;
        });

        setBoardList(newBoardList)
        navigate("/post/"+id);
    }

    return(
        <div>
            <h1>글 수정하기</h1>
            <CustomInput label="제목" value={title} onChange={(
                e => setPost((prevPost) => ({
                ...prevPost,
                title : e.target.value,
            })))}
            />
            <CustomInput label="작성자" value={author} onChange={(
                e => setPost((prevPost) => ({
                ...prevPost,
                author : e.target.value,
            })))}/>
            <CustomInput 
                label="내용" 
                multiline
                rows={6}
                value={content} 
                onChange={(
                    e => setPost((prevPost) => ({
                    ...prevPost,
                    content : e.target.value,
                })))}/>
            <div>
                <CustomButton label="수정 완료" onClick={updatePost} />
                <CustomButton 
                    label="수정 취소" 
                    variant="outlined" 
                    color="secondary"
                    onClick={backToPost}
                />
            </div>
        </div>
    )
}

export default EditPost;