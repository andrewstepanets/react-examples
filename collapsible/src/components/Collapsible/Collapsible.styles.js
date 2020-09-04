import styled from 'styled-components';

export const CollapsibleWrapper = styled.div`
    background-color: #fff;
    border-radius: 4px;
    max-width: 420px;
    margin: 0 auto;
    text-align: left;
    padding: 20px;
    position: relative;
    min-height: 100px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
`
export const Title = styled.h2`
    font-size: 30px;
    font-weight: 300;
    padding: 10px 15px 20px;
    margin-bottom: 10px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
`

export const Panel = styled.div`
    font-size: 16px;
    line-height: 1.5em;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
    div {
        padding: 0 15px 20px;
    }
`;

export const ItemWrapper = styled.div`
     /* Simple way
      &.isExpanded {
        ${Panel} {
            display: block;
        }
    } */
    
    /* CSS max-height transition */
    /*${Panel} {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.5s ease-out;
    }
    &.isExpanded {
        ${Panel} {
            max-height: 200px;
        }
        */

        /* JS calculates height + css height transition */
        &.isExpanded {
            ${Title} {
                box-shadow: none;
            }
        }
        ${Panel} {
            overflow: hidden;
            transition: height 0.3s ease-out;
        }
`;

export const ButtonWrapper = styled.div`
    display: grid;
    place-items: center;
    margin-bottom: 20px;
    button {
        color: #78D0FC;
        text-transform: uppercase;
        background: #ffffff;
        padding: 20px;
        border: 4px solid #78D0FC;
        border-radius: 6px;
        display: inline-block;
        transition: all 0.3s ease 0s;
        cursor: pointer;
    }
    button:hover {
        color: #494949;
        border-radius: 50px;
        border-color: #494949;
        transition: all 0.3s ease 0s;
    }
    button:focus {
        outline: none;
    }
`;