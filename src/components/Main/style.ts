import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    .container{
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 2%;
        display: flex;
        align-items: center;
        justify-content: center;

        .app {
            margin-top: 20px;
            width: 100%;
            max-width: 400px;

            border: 2px solid #fff;
            border-radius: 12px;
            padding: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap:5px;
        
            .input{
                width: 100%;
                max-width: 300px;
                height: 35px;
                border-radius: 12px;
                padding-left: 15px;
                background-color: rgb(83, 78, 78);
                border: 0;
                color: #fff;
            }
            .button{
                margin-top: 15px;
                cursor: pointer;
                width: 100%;
                max-width: 300px;
                height: 35px;
                border-radius: 12px;
                padding-left: 15px;
                background-color: rgb(96, 187, 123);
                border: 0;
                color: #fff;
                transition: all.4s;
                &:hover{
                    background-color: rgb(91, 168, 114);
                }
            }
            .list{
                margin-top: 15px;
                display: flex;
                flex-direction: column;
                gap: 9px;
                
                li{
                    align-items: center;
                    display: flex;
                    span {
                        margin-right: 15px;

                    }
                    .editables {
                        background-color: rgb(74, 82, 77);
                        width: 100%;
                        max-width: 150px;
                        height: 35px;
                        border-radius: 12px;
                        border: 0;
                        margin-left: 5px;
                        padding: 3px;
                        color: #fff;
                        transition: all.4s;
                        cursor: pointer;
                        &:hover{
                            background-color: rgb(94, 100, 96);
                        }
                    }
                }

            }

        }
    }
`