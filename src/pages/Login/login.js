import styled from "styled-components";


export const Container = styled.div`

    margin: 0 auto;
    width: 500px;
    display: flex;
    flex-direction: column;
   


    input{
        width: 100%;
        border: none;
        outline: none;
        border: 2px solid #FFF;
        background: #FFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
        height: 52px;
        border-radius: 4px;
        padding: 0 16px;
        font-size: 16px;
        transition: border-color .2s ease-in;
        appearance: none;
        margin-bottom: 15px;
    }

    button{
        width: 100%;
        padding: 0 16px;
        height: 52px;
        border: none;
        background: blueviolet;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
        font-weight: bold;
        color: #FFF;
        border-radius: 4px;
     
       

      

    }


`;