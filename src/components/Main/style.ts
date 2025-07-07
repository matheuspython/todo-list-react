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
            
        }
    }
`