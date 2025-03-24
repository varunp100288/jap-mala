import React from "react";

function useHello(){
    console.log("hello world!");

}

function HelloHook(){
    const message = useHello();

}

export default HelloHook;