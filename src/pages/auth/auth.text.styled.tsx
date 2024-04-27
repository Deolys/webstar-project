import { css } from '@emotion/react';
import React from 'react';

const TextStyles = () => {
    return (
        <style>
            {`
                .whitecolor {
                    color: white;
                    margin-top: 46px;
                }
                .greencolor {
                    color: #35c7ad;
                    margin-top: 46px;
                }
                .greycolor {
                    color: #c3c3c3;
                    margin-top: 150px;
                }
                .text-field-label {
                    display: block;
                    margin-top: 100px;
                }
                .text-field-input {
                    display: block;
                    width: 100%;
                    height: calc(2.25rem + 2px);
                    font-family: 'Montserrat', sans-serif;
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 1.5;
                    text-indent: 10px;
                    color: #212529;
                    background-color: #fff;
                    background-clip: padding-box;
                    border: 1px solid #bdbdbd;
                    border-radius: 0.25rem;
                    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                }
                .enter-button {
                    border: none;
                    color: white;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 1rem;
                    font-family: 'Montserrat', sans-serif;
                    margin-top: 30px;
                    cursor: pointer;
                }
                a:link {
                    color: #35c7ad;
                    background-color: transparent;
                    text-decoration: none;
                }
                a:visited {
                    color: #35c7ad;
                    background-color: transparent;
                    text-decoration: underline;
                }
                a:hover {
                    color: orange;
                    background-color: transparent;
                }
                a:active {
                    color: yellow;
                    background-color: transparent;
                    text-decoration: underline;
                }
                .password {
                    position: relative;
                }
            `}
        </style>
    );
};

export default TextStyles;
