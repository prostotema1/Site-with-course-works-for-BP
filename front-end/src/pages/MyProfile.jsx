import React from 'react';
import {Button} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import {useEffect, useState} from "react";
import CourseWorkService from "../API/CourseWorkService";
import '../styles/App.css'
import WorkItemCrud from "../components/WorkItemCRUD";
import WorkItem from "../components/WorkItem";


const MyProfile = () => {
    const auth = localStorage.getItem('auth').split(' ')
    const router = useNavigate()
    const [works, setWorks] = useState([])
    const [fetchWorks, isWorksLoading] = useFetching(async () => {
        const works = await CourseWorkService.getAllCourseWorksByProfessorId(auth[0])
        setWorks(works)
    })

    let user = true;

    if (auth[1].includes("@student.spbu.ru")) {
        user = true;
    }
    else {
        user = false;
    }

    useEffect(() => {
        fetchWorks();
    }, [])

    return (
        <div>
            {isWorksLoading
                ?
                <h1>Загружаю...</h1>
                :
                <div>
                {user
                    ?
                    <div>
                        <table>
                            <tbody>
                            <tr>
                                <td className="nav">
                                    <div className="nav_div">
                                        <ul style={{marginTop: "20px"}}>
                                            <li><a href="#about">
                                                <Button
                                                    id="basic-button"
                                                    sx={{
                                                        color: "#44597e",
                                                        fontSize: "18px",
                                                        fontFamily: "Microsoft Sans Serif",
                                                        textTransform: "capitalize",
                                                    }}
                                                >
                                                    Личная информация
                                                </Button>
                                            </a></li>
                                            <li><a href="#courseworks">
                                                <Button
                                                    id="basic-button"
                                                    sx={{
                                                        color: "#44597e",
                                                        fontSize: "18px",
                                                        fontFamily: "Microsoft Sans Serif",
                                                        textTransform: "capitalize",
                                                    }}
                                                >
                                                    Мои курсовые работы
                                                </Button>
                                            </a></li>
                                        </ul>
                                    </div>
                                </td>
                                <td className="body">
                                    <div>
                                        <h2 id="about">Личная информация</h2>
                                        <div style={{marginLeft: "10px"}}>
                                            {/*{info.map((index) => <div>{index}</div>)} <br/>*/}
                                            Звание:  <br/>
                                            Почта: airatsafin65578@gmail.com <br/>
                                        </div>
                                        {/*<div>*/}
                                        {/*    {surname + " " + name + " " + patronymic} <br/>*/}
                                        {/*    Звание: {state} <br/>*/}
                                        {/*    Почта: {email} <br/>*/}
                                        {/*</div>*/}
                                        <h2 id="courseworks"></h2>
                                        <div style={{
                                            marginLeft: "10px",
                                            width: "40%"
                                        }}>
                                            {works.map((coursework, index) =>
                                                <WorkItem number={index + 1} coursework={coursework} key={coursework.courseWorkId}/>)}
                                        </div>
                                    </div>
                                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    :
                    <div >
                        <table>
                            <tbody>
                            <tr>
                                <td className="nav">
                                    <div className="nav_div">
                                        <ul style={{marginTop: "20px"}}>
                                            <li><a href="#about">
                                                <Button
                                                    id="basic-button"
                                                    sx={{
                                                        color: "#44597e",
                                                        fontSize: "18px",
                                                        fontFamily: "Microsoft Sans Serif",
                                                        textTransform: "capitalize",
                                                    }}
                                                >
                                                    Личная информация
                                                </Button>
                                            </a></li>
                                            <li><a href="#courseworks">
                                                <Button
                                                    id="basic-button"
                                                    sx={{
                                                        color: "#44597e",
                                                        fontSize: "18px",
                                                        fontFamily: "Microsoft Sans Serif",
                                                        textTransform: "capitalize",
                                                    }}
                                                >
                                                    Мои курсовые работы
                                                </Button>
                                            </a></li>
                                        </ul>
                                    </div>
                                </td>
                                <td className="body">
                                    <div>
                                        <h2 id="about">Личная информация</h2>
                                        <div style={{marginLeft: "10px"}}>
                                            {/*{info.map((index) => <div>{index}</div>)} <br/>*/}
                                            Звание:  <br/>
                                            Почта: airatsafin65578@gmail.com <br/>
                                        </div>
                                        {/*<div>*/}
                                        {/*    {surname + " " + name + " " + patronymic} <br/>*/}
                                        {/*    Звание: {state} <br/>*/}
                                        {/*    Почта: {email} <br/>*/}
                                        {/*</div>*/}
                                        <h2 id="courseworks"></h2>
                                        <div style={{
                                            marginLeft: "10px",
                                            width: "40%"
                                        }}>
                                            {works.map((coursework, index) =>
                                                <WorkItemCrud number={index + 1} coursework={coursework} key={coursework.courseWorkId}/>)}
                                        </div>
                                        <br/><br/>
                                        <Button
                                            onClick={() => router(`/createcoursework`)}
                                            sx={{
                                                marginLeft: "10px",
                                                fontSize: "18px",
                                            }}
                                        >
                                            Создать новый пост
                                        </Button>
                                    </div>
                                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                }
                </div>
            }
        </div>
    );
};

export default MyProfile;
